import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "./toast";
import * as z from "zod";
import { Button } from "./button";
import { Input } from "./input";
// Zod schema for validation
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function EmailForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Email Submitted", data);
    toast({
      title: "Your Email Submitted Succesfully",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, totam.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full border-[#1959AC] focus-visible:ring-[#1959AC]"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-8"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
