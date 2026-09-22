import { Phone, Globe } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#0e0b09] text-white">

            <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">

                <div className="grid md:grid-cols-3 gap-10 items-center">

                    {/* Logo */}
                    <div>
                        <a
                            href="#home"
                            className="flex items-center gap-3"
                        >
                            <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
                                <span className="font-bold text-xl">
                                    S
                                </span>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Sanjari
                                </h2>

                                <p className="text-orange-400 text-[10px] uppercase tracking-widest">
                                    Hotel & Restaurant
                                </p>
                            </div>
                        </a>

                        <p className="text-gray-500 text-sm leading-6 mt-5 max-w-sm">
                            Authentic taste, warm hospitality and memorable moments
                            in the heart of Didwana.
                        </p>
                    </div>


                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">

                        <a
                            href="#home"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#menu"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            Menu
                        </a>

                        <a
                            href="#gallery"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            Gallery
                        </a>

                        <a
                            href="#reviews"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            Reviews
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                        >
                            Contact
                        </a>

                    </div>


                    {/* Contact Icons */}
                    <div className="flex md:justify-end gap-3">

                        {/* Website */}
                        <a
                            href="#home"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                            aria-label="Website"
                        >
                            <Globe size={18} />
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:08239498562"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                            aria-label="Call Sanjari"
                        >
                            <Phone size={18} />
                        </a>

                    </div>

                </div>


                {/* Bottom */}
                <div className="border-t border-white/10 mt-10 pt-7 flex flex-col md:flex-row justify-between gap-3">

                    <p className="text-gray-600 text-sm">
                        © 2026 Sanjari Hotel & Restaurant. All rights reserved.
                    </p>

                    <p className="text-gray-600 text-sm">
                        Didwana, Rajasthan
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;