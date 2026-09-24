import { Heart, Leaf, Users, Zap, MapPin } from "lucide-react";
import { motion } from "motion/react";

function About() {
    return (
        <section id="about" className="py-24 bg-[#f8f5f0]">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                            About Sanjari
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                            Good Food.
                            <br />
                            Great People.
                        </h2>

                        <p className="text-gray-600 mt-6 leading-7 max-w-xl">
                            Sanjari Hotel & Restaurant brings together delicious food,
                            friendly service and a comfortable atmosphere in the heart
                            of Didwana.
                        </p>

                        <p className="text-gray-600 mt-4 leading-7 max-w-xl">
                            Whether you're looking for a quick meal, family dining or
                            simply want to enjoy some delicious food, Sanjari is here
                            to make your experience memorable.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-6 mt-9">

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center">
                                    <Heart size={21} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Homestyle</h4>
                                    <p className="text-gray-500 text-sm">Taste</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center">
                                    <Zap size={21} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Fast</h4>
                                    <p className="text-gray-500 text-sm">Service</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center">
                                    <Leaf size={21} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Freshly</h4>
                                    <p className="text-gray-500 text-sm">Prepared</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center">
                                    <Users size={21} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Family</h4>
                                    <p className="text-gray-500 text-sm">Friendly</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-start gap-3 mt-9 text-gray-600">
                            <MapPin className="text-orange-500 shrink-0" size={20} />

                            <p className="text-sm leading-6">
                                Govt. Bus Stand Rd, near ICICI Bank,
                                Adarsh Nagar, Didwana, Rajasthan 341303
                            </p>
                        </div>

                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <img
                            src="IMG_5439.JPG"
                            alt="Restaurant interior"
                            className="w-full h-[500px] object-cover rounded-[2rem]"
                        />

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default About;
