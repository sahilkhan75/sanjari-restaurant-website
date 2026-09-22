import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#17120f] text-white">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
                            Get In Touch
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3">
                            Visit Us Today
                        </h2>

                        <p className="text-gray-400 mt-5 max-w-xl leading-7">
                            Come visit Sanjari Hotel & Restaurant and enjoy delicious
                            food with warm hospitality in Didwana.
                        </p>

                        {/* Phone */}
                        <a
                            href="tel:08239498562"
                            className="flex items-start gap-4 mt-10 group"
                        >

                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                                <Phone size={21} />
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">
                                    Call Us
                                </p>

                                <p className="font-semibold text-lg group-hover:text-orange-400 transition-colors">
                                    082394 98562
                                </p>
                            </div>

                        </a>

                        {/* Address */}
                        <div className="flex items-start gap-4 mt-7">

                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                                <MapPin size={21} />
                            </div>

                            <div>

                                <p className="text-gray-400 text-sm">
                                    Address
                                </p>

                                <p className="font-medium leading-6 mt-1">
                                    Govt. Bus Stand Rd, near ICICI Bank,
                                    Adarsh Nagar, Didwana,
                                    Rajasthan 341303
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* Map / Directions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="bg-[#221b17] border border-white/10 rounded-3xl p-8">

                            <div className="w-full h-72 bg-[#302721] rounded-2xl flex items-center justify-center">

                                <div className="text-center">

                                    <MapPin
                                        size={42}
                                        className="mx-auto text-orange-400"
                                    />

                                    <h3 className="text-xl font-semibold mt-4">
                                        Sanjari Hotel & Restaurant
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Didwana, Rajasthan
                                    </p>

                                </div>

                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Sanjari+Hotel+%26+Restaurant+Didwana"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 py-3.5 rounded-full font-semibold transition-colors"
                            >
                                Get Directions
                                <ArrowUpRight size={18} />
                            </a>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Contact;