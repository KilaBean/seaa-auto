// src/components/sections/ReviewsSection.tsx
import { Star, CheckCircle2 } from 'lucide-react'

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  service: string
  comment: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Kwame Asante',
    avatar: 'KA',
    rating: 5,
    date: '2 weeks ago',
    service: 'Washing Bay',
    comment:
      'Absolutely amazing service! My car looks brand new after the full detailing. The team was professional and thorough. Highly recommend SEAA Auto Services!',
    verified: true,
  },
  {
    id: 2,
    name: 'Akua Mensah',
    avatar: 'AM',
    rating: 5,
    date: '1 month ago',
    service: 'Vulcanizing',
    comment:
      'Got a flat tire and they fixed it quickly. Fair prices and excellent service. Will definitely be coming back for all my tire needs.',
    verified: true,
  },
  {
    id: 3,
    name: 'Kofi Owusu',
    avatar: 'KO',
    rating: 5,
    date: '3 weeks ago',
    service: 'Balancing & Alignment',
    comment:
      'My car was pulling to one side, and they fixed the alignment perfectly. The computerized equipment gave me confidence in their precision. Great experience!',
    verified: true,
  },
]

export default function ReviewsSection() {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1)

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-outline mb-4">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="review-summary">
          <div className="review-summary-grid">
            <div className="review-summary-item">
              <div className="review-summary-value">{averageRating}</div>
              <div className="review-summary-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="review-star filled" />
                ))}
              </div>
              <p className="review-summary-label">Average Rating</p>
            </div>
            <div className="review-summary-item">
              <div className="review-summary-value">{reviews.length}+</div>
              <p className="review-summary-label">Customer Reviews</p>
            </div>
            <div className="review-summary-item">
              <div className="review-summary-value">98%</div>
              <p className="review-summary-label">Would Recommend</p>
            </div>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="card-content pt-6">
                <div className="review-header">
                  <div className="review-author">
                    <div className="review-avatar">{review.avatar}</div>
                    <div className="review-author-info">
                      <div className="review-author-name">
                        <span>{review.name}</span>
                        {review.verified && (
                          <span className="review-verified">
                            <CheckCircle2 size={12} />
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`review-star ${star <= review.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>

                <span className="review-service">{review.service}</span>
                <p className="review-comment">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}