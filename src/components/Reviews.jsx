import { Star } from "lucide-react";
import { motion } from "motion/react";

function Reviews() {
    const reviews = [
        {
            name: "Aves",
            rating: 5,
            time: "4 months ago",
            text: "Best hotel in Didwana. The staff is really really very helpful and the owners did really great job. It just feels like home. The food tastes delicious.",
        },
        {
            name: "Indian Traveller",
            rating: 5,
            time: "3 months ago",
            text: "Best hotel at cheapest price in Didwana. Food of this hotel can't be compared to any restaurant in Didwana because its food is too delicious.",
        },
        {
            name: "MANU JODHA",
            rating: 4,
            time: "3 months ago",
            text: "Ok ok place but I like Hakka noodles at this place, fully paneer loaded Hakka noodles.",
        },
    ];

    return (
        <section id="reviews" className="py-24 bg-[#f8f5f0]">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

                    <div>

                        <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                            Customer Reviews
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3">
                            What Our Guests Say
                        </h2>

                        <p className="text-gray-600 mt-4">
                            Your happiness is our biggest reward.
                        </p>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="text-5xl font-bold">
                            4.2
                        </div>

                        <div>

                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        fill="currentColor"
                                    />
                                ))}

                                <Star size={20} />
                            </div>

                            <p className="text-gray-500 text-sm mt-1">
                                249 Reviews
                            </p>

                        </div>

                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    {reviews.map((review, index) => (

                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-7 shadow-sm"
                        >

                            <div className="flex text-yellow-500">

                                {Array.from({ length: review.rating }).map(
                                    (_, index) => (
                                        <Star
                                            key={index}
                                            size={17}
                                            fill="currentColor"
                                        />
                                    )
                                )}

                            </div>

                            <p className="text-gray-600 leading-7 mt-5">
                                "{review.text}"
                            </p>

                            <div className="border-t border-gray-100 mt-6 pt-5">

                                <h4 className="font-bold">
                                    {review.name}
                                </h4>

                                <p className="text-gray-400 text-sm mt-1">
                                    Google Review · {review.time}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Reviews;