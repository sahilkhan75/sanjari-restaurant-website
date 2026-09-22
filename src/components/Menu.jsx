import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Menu() {
    const menuItems = [
        {
            name: "Pizza",
            category: "Fast Food",
            description: "Freshly prepared with quality ingredients.",
            image:
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Paneer Dishes",
            category: "Main Course",
            description: "Rich and flavorful Indian favourites.",
            image:
                "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Hakka Noodles",
            category: "Chinese",
            description: "Loaded with vegetables and delicious flavours.",
            image:
                "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Indian Specialities",
            category: "Indian",
            description: "Comforting Indian flavours made for every guest.",
            image:
                "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Beverages",
            category: "Drinks",
            description: "Refreshing drinks to complement your meal.",
            image:
                "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85",
        },
    ];

    return (
        <section id="menu" className="py-24 bg-[#f8f5f0]">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

                    <div>
                        <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                            Our Specialties
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3">
                            Popular Menu
                        </h2>

                        <p className="text-gray-600 mt-4">
                            Delicious food from our kitchen to your heart.
                        </p>
                    </div>

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">

                    {menuItems.map((item, index) => (

                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center">
                                    <ArrowUpRight size={17} />
                                </div>

                            </div>

                            <div className="p-5">

                                <h3 className="text-lg font-bold">
                                    {item.name}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2 leading-5">
                                    {item.description}
                                </p>

                                <span className="inline-block mt-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                                    {item.category}
                                </span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Menu;