
import {
    BedDouble,
    Wifi,
    Tv,
    Bath,
    Wind,
    Coffee,
    ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

function Rooms() {
    const facilities = [
        {
            icon: BedDouble,
            title: "Comfortable Rooms",
            description: "A comfortable space to relax after your journey.",
        },
        {
            icon: Wifi,
            title: "Wi-Fi",
            description: "Stay connected during your visit.",
        },
        {
            icon: Tv,
            title: "Entertainment",
            description: "Relax with in-room entertainment.",
        },
        {
            icon: Bath,
            title: "Private Bathroom",
            description: "Convenient private bathroom facilities.",
        },
        {
            icon: Wind,
            title: "Air Conditioning",
            description: "A comfortable environment for your stay.",
        },
        {
            icon: Coffee,
            title: "Dining Nearby",
            description: "Enjoy delicious food at our restaurant.",
        },
    ];

    return (
        <section
            id="rooms"
            className="py-24 bg-[#f8f5f0]"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                        Stay With Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Comfortable Rooms,
                        <span className="text-orange-500">
                            {" "}Warm Hospitality.
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-5 leading-7">
                        Planning to stay in Didwana? Enjoy a comfortable stay
                        at Sanjari Hotel with convenient access to our restaurant
                        and the city.
                    </p>
                </motion.div>


                {/* Main Room Card */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-0 mt-12 bg-white rounded-[2rem] overflow-hidden shadow-sm"
                >

                    {/* Image */}
                    <div className="relative min-h-[400px]">

                        <img
                            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
                            alt="Hotel room"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <div className="absolute bottom-6 left-6">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                                Hotel Stay
                            </span>
                        </div>

                    </div>


                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">

                        <p className="text-orange-500 text-sm uppercase tracking-widest font-semibold">
                            Stay at Sanjari
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold mt-3">
                            A Comfortable Place
                            <br />
                            to Rest & Relax
                        </h3>

                        <p className="text-gray-600 leading-7 mt-5">
                            Whether you're visiting Didwana for business, travel,
                            or simply passing through, Sanjari offers a convenient
                            place to relax and enjoy your stay.
                        </p>

                        {/* Facilities */}
                        <div className="grid grid-cols-2 gap-5 mt-8">

                            {facilities.slice(0, 4).map((facility) => {

                                const Icon = facility.icon;

                                return (
                                    <div
                                        key={facility.title}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                                            <Icon size={19} />
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold">
                                                {facility.title}
                                            </h4>

                                            <p className="text-xs text-gray-500 mt-1">
                                                {facility.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* Call Button */}
                        <a
                            href="tel:08239498562"
                            className="mt-9 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-full font-semibold transition-all w-fit"
                        >
                            Enquire About Rooms
                            <ArrowRight size={18} />
                        </a>

                    </div>

                </motion.div>


                {/* Facility Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

                    {facilities.slice(4).map((facility, index) => {

                        const Icon = facility.icon;

                        return (
                            <motion.div
                                key={facility.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-gray-100"
                            >

                                <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                                    <Icon size={20} />
                                </div>

                                <h4 className="font-bold text-lg mt-5">
                                    {facility.title}
                                </h4>

                                <p className="text-gray-500 text-sm leading-6 mt-2">
                                    {facility.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default Rooms;