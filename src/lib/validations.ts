import * as z from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  timeFrame: z.enum(["1-2 weeks", "2-4 weeks", "1-2 months", "2+ months"], {
    required_error: "Please select a time frame",
  }),
  size: z.enum(["Small", "Medium", "Large", "Custom"], {
    required_error: "Please select a size",
  }),
  quantity: z.enum(["1-10", "11-50", "51-100", "100+"], {
    required_error: "Please select a quantity",
  }),
  projectDescription: z
    .string()
    .min(10, "Please provide more details about your project"),
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
