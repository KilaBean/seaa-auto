// src/components/sections/ReviewsSection.tsx
import { Star, CheckCircle2 } from 'lucide-react'

const reviews = [
  { id: 1, name: 'Kwame Asante',  avatar: 'KA', rating: 5, date: '2 weeks ago', service: 'Washing Bay',
    comment: 'Absolutely amazing service! My car looks brand new after the full detailing. The team was professional and thorough. Highly recommend SEAA Auto Services!', verified: true },
  { id: 2, name: 'Akua Mensah',   avatar: 'AM', rating: 5, date: '1 month ago', service: 'Vulcanizing',
    comment: 'Got a flat tire and they fixed it quickly. Fair prices and excellent service. Will definitely be coming back for all my tire needs.', verified: true },
  { id: 3, name: 'Kofi Owusu',    avatar: 'KO', rating: 5, date: '3 weeks ago', service: 'Balancing & Alignment',
    comment: 'My car was pulling to one side, and they fixed the alignment perfectly. The computerized equipment gave me confidence in their precision. Great experience!', verified: true },
]

export default function ReviewsSection() {
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-seaa-blue/5 text-seaa-blue border border-seaa-blue/20 text-xs font-semibold px-3 py-1 rounded-full mb-4">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Don&apos;t just take our word for it — hear from our satisfied customers.</p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-seaa-blue to-seaa-blue-light rounded-2xl p-6 mb-10 max-w-xl mx-auto reveal">
          {[
            { value: avg,  sub: [...Array(5)].map((_, i) => <Star key={i} size={14} className="text-seaa-yellow fill-seaa-yellow" />), label: 'Average Rating' },
            { value: `${reviews.length}+`, sub: null, label: 'Customer Reviews' },
            { value: '98%', sub: null, label: 'Would Recommend' },
          ].map(({ value, sub, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-seaa-yellow">{value}</div>
              {sub && <div className="flex justify-center gap-0.5 my-1">{sub}</div>}
              <p className="text-white/70 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-seaa-blue flex items-center justify-center text-seaa-yellow font-bold text-sm shrink-0">
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-seaa-blue text-sm">{r.name}</span>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                        <CheckCircle2 size={11} /> Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < r.rating ? 'text-seaa-yellow fill-seaa-yellow' : 'text-gray-200 fill-gray-200'} />
                ))}
              </div>
              <span className="inline-block bg-seaa-yellow/10 text-seaa-blue text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
                {r.service}
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}