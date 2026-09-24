import { motion } from "motion/react";

function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",

        "/public/IMG_5442.JPG",

        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=85",

        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",

        "/public/IMG_5439.JPG",
    ];

    return (
        <section id="gallery" className="py-24 bg-[#17120f] text-white">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

                    <div>

                        <p className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
                            Our Gallery
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3">
                            Moments at Sanjari
                        </h2>

                        <p className="text-gray-400 mt-4">
                            A glimpse of our food, ambience and happy customers.
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

                    {images.map((image, index) => (

                        <motion.div
                            key={image}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`overflow-hidden rounded-2xl ${index === 0
                                ? "md:col-span-2 md:row-span-2"
                                : ""
                                }`}
                        >

                            <img
                                src={image}
                                alt={`Sanjari gallery ${index + 1}`}
                                className={`w-full h-full min-h-[180px] ${index === 0
                                    ? "md:min-h-[380px]"
                                    : ""
                                    } object-cover hover:scale-105 transition-transform duration-700`}
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Gallery;