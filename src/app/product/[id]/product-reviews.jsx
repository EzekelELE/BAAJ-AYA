import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

// This would typically come from a database or API
const reviews = [
  {
    id: "1",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2 months ago",
    title: "Excellent quality and comfort",
    content:
      "I've been wearing this hoodie almost daily since I got it. The material is soft yet durable, and it's kept its shape after multiple washes. Definitely worth the price!",
  },
  {
    id: "2",
    user: {
      name: "Sam Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    date: "1 month ago",
    title: "Great hoodie, runs slightly large",
    content:
      "The quality is excellent and I love the color. My only note is that it runs a bit large, so consider sizing down if you're between sizes. Otherwise, very happy with my purchase.",
  },
  {
    id: "3",
    user: {
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "3 weeks ago",
    title: "Perfect for everyday wear",
    content:
      "This hoodie has quickly become my go-to for both lounging at home and casual outings. The material is breathable yet warm, and the pockets are spacious. Highly recommend!",
  },
]

// Rating distribution for the progress bars
const ratingDistribution = {
  5: 70,
  4: 20,
  3: 5,
  2: 3,
  1: 2,
}

export default function ProductReviews({ productId }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Overall Rating Summary */}
        <div className="col-span-1">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-2">4.5</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : i === 4 ? "fill-yellow-400 text-yellow-400 half" : "fill-gray-200 text-gray-200"}`} />
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-4">Based on 127 reviews</p>

            {/* Rating Distribution */}
            <div className="w-full space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="flex items-center gap-1 w-12">
                    <span>{rating}</span>
                    <Star className="w-3 h-3 fill-gray-400 text-gray-400" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${ratingDistribution[rating]}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-500 w-8">{ratingDistribution[rating]}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div
          className="col-span-2 flex flex-col justify-center items-center bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Share your thoughts</h3>
          <p className="text-gray-600 mb-4 text-center">
            If you've used this product, share your thoughts with other customers
          </p>
          <Button>Write a Review</Button>
        </div>
      </div>
      <Separator className="my-8" />
      {/* Individual Reviews */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{review.user.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </div>
                </div>
                <h5 className="font-medium mt-2">{review.title}</h5>
                <p className="text-gray-600 mt-1">{review.content}</p>

                <div className="flex gap-4 mt-4">
                  <button className="text-sm text-gray-500 hover:text-gray-700">Helpful (12)</button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Report</button>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  );
}
