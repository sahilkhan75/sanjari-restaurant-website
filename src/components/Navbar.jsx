import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Rooms", href: "#rooms" },
        { name: "Menu", href: "#menu" },
        { name: "Gallery", href: "#gallery" },
        { name: "Reviews", href: "#reviews" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#17120f]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold leading-none">
                                Sanjari
                            </h2>

                            <p className="text-orange-400 text-[10px] uppercase tracking-widest mt-1">
                                Hotel & Restaurant
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">

                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>

                    {/* Desktop Button */}
                    <a
                        href="tel:08239498562"
                        className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
                    >
                        <Phone size={16} />
                        Call Now
                    </a>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-6">

                        <div className="flex flex-col gap-2">

                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-orange-400 py-3 border-b border-white/5"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="tel:08239498562"
                                className="mt-3 flex justify-center items-center gap-2 bg-orange-500 text-white py-3 rounded-full font-semibold"
                            >
                                <Phone size={17} />
                                Call Now
                            </a>

                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;