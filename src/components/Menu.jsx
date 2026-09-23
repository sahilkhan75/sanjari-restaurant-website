// 

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Utensils,
    Pizza,
    Soup,
    Coffee,
    ChefHat,
    Flame,
    Salad,
    Wheat,
    Search,
    X,
} from "lucide-react";

function Menu() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [showFullMenu, setShowFullMenu] = useState(false);

    const categories = [
        { name: "All", icon: Utensils },
        { name: "Starters", icon: Soup },
        { name: "Pizza", icon: Pizza },
        { name: "Chinese", icon: Utensils },
        { name: "Paneer", icon: ChefHat },
        { name: "Indian", icon: Utensils },
        { name: "Tandoor", icon: Flame },
        { name: "Rice", icon: Wheat },
        { name: "South Indian", icon: Salad },
        { name: "Beverages", icon: Coffee },
    ];

    const menuItems = [
        // =========================
        // STARTERS
        // =========================
        {
            name: "Tasty Papad",
            category: "Starters",
            price: 20,
            description: "Crispy papad served with fresh seasoning.",
            image:
                "https://www.shutterstock.com/shutterstock/photos/614849828/display_1500/stock-photo-indian-snack-deep-fried-papad-614849828.jpg",
        },
        {
            name: "Samosa ",
            category: "Starters",
            price: 90,
            description: "Crispy and spicy Indian street-style starter.",
            image:
                "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Veg Pakoda",
            category: "Starters",
            price: 100,
            description: "Crispy vegetable fritters with Indian spices.",
            image:
                "https://harekrishnarecipes.com/wp-content/uploads/2024/08/Vegetable-Pakora-Recipe-1024x585.webp",
        },
        {
            name: "Masala Pakoda",
            category: "Starters",
            price: 130,
            description: "Crunchy pakodas served hot and fresh.",
            image:
                "https://5.imimg.com/data5/ANDROID/Default/2023/4/304405439/VQ/IW/AO/99213380/product-jpeg-500x500.jpg",
        },

        // =========================
        // PIZZA
        // =========================
        {
            name: "OTC Pizza",
            category: "Pizza",
            price: 180,
            description: "Classic pizza loaded with delicious toppings.",
            image:
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Cheese Pizza",
            category: "Pizza",
            price: 160,
            description: "Classic cheesy pizza with a delicious crust.",
            image:
                "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Punjabi Pizza",
            category: "Pizza",
            price: 190,
            description: "Loaded Punjabi-style pizza with rich toppings.",
            image:
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Paneer Tikka Pizza",
            category: "Pizza",
            price: 240,
            description: "Cheesy pizza topped with spicy paneer tikka.",
            image:
                "https://tse2.mm.bing.net/th/id/OIP.FnWraxXZtmeDszI35OMRDwHaHG?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // CHINESE
        // =========================
        {
            name: "Veg Chowmein",
            category: "Chinese",
            price: 99,
            description: "Stir-fried noodles with fresh vegetables.",
            image:
                "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Chilli Garlic Chowmein",
            category: "Chinese",
            price: 110,
            description: "Spicy noodles tossed with chilli and garlic.",
            image:
                "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Singapore Chowmein",
            category: "Chinese",
            price: 130,
            description: "Flavorful Singapore-style vegetable noodles.",
            image:
                "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Veg Manchurian",
            category: "Chinese",
            price: 140,
            description: "Crispy vegetable balls in Manchurian sauce.",
            image:
                "https://img.freepik.com/premium-photo/veg-manchurian-popular-indochinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-rustic-wooden-table-selective-focus_726363-656.jpg?w=1380",
        },

        // =========================
        // PANEER
        // =========================
        {
            name: "Paneer Tikka Masala",
            category: "Paneer",
            price: 260,
            description: "Tandoori paneer cooked in rich masala gravy.",
            image:
                "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Paneer Do Pyaza",
            category: "Paneer",
            price: 240,
            description: "Paneer cooked with onions and aromatic spices.",
            image:
                "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/12/paneer-do-pyaza-recipe.jpg",
        },
        {
            name: "Matar Paneer",
            category: "Paneer",
            price: 200,
            description: "Classic combination of paneer and green peas.",
            image:
                "https://tse3.mm.bing.net/th/id/OIP.2K2XvsI7qdnBItskROh0pwHaHa?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Palak Paneer",
            category: "Paneer",
            price: 220,
            description: "Soft paneer cooked in creamy spinach gravy.",
            image:
                "https://tse4.mm.bing.net/th/id/OIP.orGb0pHI14yLO5x40awPAwHaHa?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // INDIAN
        // =========================
        {
            name: "Chhole Bhature",
            category: "Indian",
            price: 120,
            description: "Spiced chickpeas served with fluffy bhature.",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.kBt87mR_bp5CfVcrwG1LowHaHa?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Dahi Pakoda",
            category: "Indian",
            price: 60,
            description: "Soft pakodas topped with seasoned yogurt.",
            image:
                "https://images.news18.com/static-guju/uploads/2019/05/dahi-pakoda-poo.jpg",
        },
        {
            name: "Dum Aloo",
            category: "Indian",
            price: 220,
            description: "Baby potatoes cooked in aromatic Indian gravy.",
            image:
                "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/08/Dum-Aloo-5.jpg?resize=1024%2C683&ssl=1",
        },
        {
            name: "Aloo Matar",
            category: "Indian",
            price: 140,
            description: "Potatoes and green peas in homestyle gravy.",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.Ynk07g-62T8D3g3Zm7CJXwHaHa?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // TANDOOR
        // =========================
        {
            name: "Tandoori Roti",
            category: "Tandoor",
            price: 12,
            description: "Freshly baked traditional tandoori roti.",
            image:
                "https://tse4.mm.bing.net/th/id/OIP.j_6Nnf-LYzP5BwZDSvDY8wHaFX?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Butter Naan",
            category: "Tandoor",
            price: 40,
            description: "Soft naan finished with a touch of butter.",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.UygCvK5iexglNXu9zHHogQHaHa?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Garlic Naan",
            category: "Tandoor",
            price: 60,
            description: "Soft naan topped with aromatic garlic.",
            image:
                "https://static.wixstatic.com/media/81a008_4b3977af1edb4156908b655e9313fac4~mv2.jpg/v1/fill/w_980,h_643,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81a008_4b3977af1edb4156908b655e9313fac4~mv2.jpg",
        },
        {
            name: "Paneer Paratha",
            category: "Tandoor",
            price: 80,
            description: "Stuffed paneer paratha served hot.",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.WcHvxEViPx07pchLwy97dgHaE7?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // RICE
        // =========================
        {
            name: "Plain Rice",
            category: "Rice",
            price: 70,
            description: "Steamed aromatic basmati rice.",
            image:
                "https://tse4.mm.bing.net/th/id/OIP.XRFFJhBk7MdT_HxqExyZbwHaE7?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Jeera Rice",
            category: "Rice",
            price: 80,
            description: "Fragrant basmati rice tempered with cumin.",
            image:
                "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Matar Pulao",
            category: "Rice",
            price: 110,
            description: "Aromatic rice cooked with green peas.",
            image:
                "https://pipingpotcurry.com/wp-content/uploads/2023/04/Matar-Pulao-Piping-Pot-Curry.jpg",
        },
        {
            name: "Veg Pulao",
            category: "Rice",
            price: 120,
            description: "Basmati rice cooked with fresh vegetables.",
            image:
                "https://tse1.mm.bing.net/th/id/OIP.6xVYFrI3n4mlqTIfzPrT4AHaFx?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // SOUTH INDIAN
        // =========================
        {
            name: "Masala Dosa",
            category: "South Indian",
            price: 100,
            description: "Crispy dosa filled with spiced potato masala.",
            image:
                "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Mysore Masala Dosa",
            category: "South Indian",
            price: 120,
            description: "Crispy Mysore dosa with spicy chutney.",
            image:
                "https://vismaifood.com/storage/app/uploads/public/609/3dc/1d7/6093dc1d77053892307086.jpg",
        },
        {
            name: "Paneer Masala Dosa",
            category: "South Indian",
            price: 130,
            description: "South Indian dosa with delicious paneer filling.",
            image:
                "https://tse2.mm.bing.net/th/id/OIP.LKNC1RjWepNs9Ni0OC724gHaFP?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Cheese Paneer Dosa",
            category: "South Indian",
            price: 140,
            description: "Crispy dosa with paneer and melted cheese.",
            image:
                "https://tse4.mm.bing.net/th/id/OIP.GkqjQv_2tNpjdP2ASYvZbwHaGL?r=0&pid=Api&h=220&P=0",
        },

        // =========================
        // BEVERAGES
        // =========================
        {
            name: "Masala Chaas",
            category: "Beverages",
            price: 20,
            description: "Refreshing chilled buttermilk with Indian spices.",
            image:
                "https://tse3.mm.bing.net/th/id/OIP.WsI9SxjhiuOROE7xL-BmowHaLH?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Lassi",
            category: "Beverages",
            price: 50,
            description: "Thick and refreshing traditional lassi.",
            image:
                "https://tse3.mm.bing.net/th/id/OIP.W0fJPxyo521T9yCuFHKVDAHaJ4?r=0&pid=Api&h=220&P=0",
        },
        {
            name: "Cold Coffee",
            category: "Beverages",
            price: 80,
            description: "Chilled creamy coffee for a refreshing break.",
            image:
                "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
        },
        {
            name: "Chocolate Shake",
            category: "Beverages",
            price: 100,
            description: "Rich and creamy chocolate milkshake.",
            image:
                "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
        },
    ];


    const filteredItems =
        activeCategory === "All"
            ? menuItems.slice(0, 4)
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section
            id="menu"
            className="py-24 bg-[#f8f5f0] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                {/* ================= HEADING ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">
                        Our Menu
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-[#17120f]">
                        Taste That
                        <span className="text-orange-500"> Feels Like Home.</span>
                    </h2>

                    <p className="text-gray-600 mt-5 leading-7 max-w-2xl mx-auto">
                        Discover our delicious selection of Indian favourites,
                        pizzas, Chinese dishes, paneer specials, refreshing
                        beverages and much more.
                    </p>
                </motion.div>

                {/* ================= CATEGORY FILTER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-10"
                >
                    <div className="flex gap-3 overflow-x-auto pb-4 justify-start lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const isActive = activeCategory === category.name;

                            return (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`
                    shrink-0
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-medium
                    border
                    transition-all
                    duration-300
                    ${isActive
                                            ? "bg-[#17120f] text-white border-[#17120f] shadow-lg"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:text-orange-500"
                                        }
                  `}
                                >
                                    <Icon size={16} />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ================= SECTION HEADER ================= */}
                <div className="flex items-end justify-between mt-12 mb-7">
                    <div>
                        <p className="text-orange-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
                            Sanjari Specials
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold text-[#17120f] mt-1">
                            {activeCategory === "All"
                                ? "Popular Dishes"
                                : activeCategory}
                        </h3>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
                        <Search size={17} />
                        Freshly prepared
                    </div>
                </div>

                {/* ================= FOOD CARDS ================= */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.article
                                layout
                                key={`${activeCategory}-${item.name}`}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                    scale: 0.96,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.04,
                                }}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* IMAGE */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                                    {/* Category */}
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#17120f] px-3 py-1.5 rounded-full text-xs font-semibold">
                                        {item.category}
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="font-bold text-lg text-[#17120f] leading-6">
                                            {item.name}
                                        </h4>

                                        <span className="text-orange-500 font-bold text-lg whitespace-nowrap">
                                            ₹{item.price}
                                        </span>
                                    </div>

                                    <p className="text-gray-500 text-sm leading-6 mt-2">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-xs text-gray-400">
                                            Freshly prepared
                                        </span>

                                        <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <span className="text-lg leading-none">+</span>
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ================= COMPLETE MENU CTA ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 rounded-[2rem] bg-[#17120f] overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#17120f] via-[#17120f]/95 to-orange-950/70" />

                    <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-orange-400 uppercase tracking-[0.25em] text-xs font-semibold">
                                Explore More
                            </p>

                            <h3 className="text-white text-2xl md:text-4xl font-bold mt-2">
                                Want to explore our complete menu?
                            </h3>

                            <p className="text-gray-400 mt-3 max-w-xl">
                                Discover all our dishes, specialities and prices
                                from the complete Sanjari menu.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowFullMenu(true)}
                            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                        >
                            View Full Menu
                        </button>
                    </div>
                </motion.div>

                {/* ================= BOTTOM NOTE ================= */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-xs">
                        Prices are subject to change. Please confirm current prices
                        at the restaurant.
                    </p>
                </div>
            </div>

            {/* ================= FULL MENU IMAGE MODAL ================= */}
            <AnimatePresence>
                {showFullMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setShowFullMenu(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full max-h-[95vh] flex justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setShowFullMenu(false)}
                                className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-[#17120f] flex items-center justify-center shadow-xl hover:bg-orange-500 hover:text-white transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>

                            {/* SINGLE MENU IMAGE */}
                            <img
                                src="public/menu/ChatGPT Image Sep 23, 2026, 12_25_45 PM.png"
                                alt="Sanjari Hotel & Restaurant Full Menu"
                                className="max-h-[90vh] max-w-full object-contain rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Menu;