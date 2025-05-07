export default function CategoryLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header Skeleton */}
      <div className="mb-8">
        <div className="h-8 w-1/3 bg-gray-200 animate-pulse rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Filters Skeleton - Desktop */}
        <div className="hidden lg:block">
          <div className="h-8 w-1/2 bg-gray-200 animate-pulse rounded mb-6"></div>
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-5 w-1/3 bg-gray-200 animate-pulse rounded mb-4"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="h-8 bg-gray-200 animate-pulse rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div>
          <div className="flex justify-between mb-6">
            <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-8 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
                <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="h-8 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
