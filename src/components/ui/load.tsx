import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="container flex h-20 items-center justify-between border-b border-gray-100">
        {/* Logo */}
        <Skeleton className="h-10 w-28 rounded-xl bg-gray-200/60" />

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1.5">
            <Skeleton className="h-6 w-28 rounded-lg bg-gray-200/80" />
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200/60" />
          </div>
          <div className="flex items-center space-x-1.5">
            <Skeleton className="h-6 w-28 rounded-lg bg-gray-200/80" />
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200/60" />
          </div>
        </div>

        {/* Sign In Button */}
        <Skeleton className="h-10 w-24 rounded-full bg-blue-100/80" />
      </header>

      {/* Hero Section */}
      <main className="container grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 py-12 md:grid-cols-2">
        {/* Left Column */}
        <div className="relative flex flex-col space-y-8">
          {/* Decorative background element */}
          <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl" />
          <div className="absolute right-12 bottom-12 h-40 w-40 rounded-full bg-purple-50/30 blur-2xl" />

          {/* Content */}
          <div className="relative space-y-4">
            <Skeleton className="h-16 w-4/5 rounded-2xl bg-gray-300/60" />
            <Skeleton className="h-16 w-3/5 rounded-2xl bg-gray-300/60" />
          </div>

          <div className="relative space-y-3">
            <Skeleton className="h-6 w-full rounded-lg bg-gray-200/60" />
            <Skeleton className="h-6 w-11/12 rounded-lg bg-gray-200/60" />
            <Skeleton className="h-6 w-4/5 rounded-lg bg-gray-200/60" />
          </div>

          <div className="relative space-y-4">
            <div className="flex gap-3">
              <Skeleton className="h-12 flex-1 rounded-xl bg-gray-200/80" />
              <Skeleton className="h-12 w-28 rounded-xl bg-blue-200/50" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5 rounded-full bg-blue-100/80" />
              <Skeleton className="h-5 w-36 rounded-lg bg-gray-200/60" />
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -right-8 top-8 h-72 w-72 rounded-full bg-orange-50/30 blur-3xl" />
          <div className="absolute -left-8 bottom-8 h-48 w-48 rounded-full bg-blue-50/30 blur-2xl" />

          {/* Image skeleton */}
          <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
            <Skeleton className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-200/80 to-gray-100/50" />
          </div>
        </div>
      </main>
    </div>
  );
}
