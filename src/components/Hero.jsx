import { ArrowRight, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-[#17120f] text-white overflow-hidden"
        >

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85"
                    alt="Indian food"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-5 lg:px-8 min-h-screen flex items-center pt-20">

                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                            Welcome to Sanjari
                        </p>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                            Taste That
                            <span className="block text-orange-400">
                                Feels Like Home.
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold mt-6">
                            संजरी होटल & रेस्टोरेंट
                        </h2>

                        <p className="text-gray-300 text-lg mt-5 max-w-xl leading-relaxed">
                            Delicious food, warm hospitality and memorable moments
                            at Sanjari Hotel & Restaurant, Didwana.
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mt-7">

                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star size={19} fill="currentColor" />
                                <span className="text-white font-semibold text-lg">
                                    4.2
                                </span>
                            </div>

                            <span className="text-gray-400">
                                249 Reviews
                            </span>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">

                            <a
                                href="#menu"
                                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                            >
                                View Menu
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Sanjari+Hotel+%26+Restaurant+Didwana"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-7 py-3.5 rounded-full font-semibold transition-all"
                            >
                                <MapPin size={18} />
                                Get Directions
                            </a>

                        </div>

                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block"
                    >

                        <div className="relative">

                            <div className="absolute -inset-5 border border-orange-400/30 rounded-[2rem]" />

                            <img
                                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85"
                                alt="Delicious Indian food"
                                className="relative w-full h-[550px] object-cover rounded-[2rem]"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Hero;