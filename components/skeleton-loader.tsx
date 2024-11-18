import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start max-w-3xl mx-auto">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Skeleton className="h-80 w-full" />
        </div>
        <div className="w-full mt-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-6">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <ul className="space-y-2">
                {[...Array(4)].map((_, qIndex) => (
                  <li key={qIndex}>
                    <Skeleton className="h-6 w-full" />
                  </li>
                ))}
              </ul>
              <Skeleton className="h-6 w-full mt-2" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
