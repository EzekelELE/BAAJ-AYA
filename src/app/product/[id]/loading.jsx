export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image Skeleton */}
        <div className="space-y-4">
          <div className="aspect-square w-full bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 w-20 bg-gray-200 animate-pulse rounded-md"></div>
            ))}
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-1/5 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="h-px w-full bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-5 w-1/6 bg-gray-200 animate-pulse rounded"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-10 bg-gray-200 animate-pulse rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-5 w-1/6 bg-gray-200 animate-pulse rounded"></div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
              ))}
            </div>
          </div>
          <div className="h-12 w-full bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
      {/* Reviews Skeleton */}
      <div className="space-y-6 mb-16">
        <div className="h-8 w-1/4 bg-gray-200 animate-pulse rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-40 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="col-span-2 h-40 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      </div>
      {/* Related Products Skeleton */}
      <div className="space-y-6">
        <div className="h-8 w-1/4 bg-gray-200 animate-pulse rounded"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
              <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
