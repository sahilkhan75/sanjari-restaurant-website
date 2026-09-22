import { Award, Clock3, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";

function WhyChooseUs() {
    const features = [
        {
            icon: <Award />,
            title: "Quality Food",
            description: "Delicious food prepared with care and quality ingredients.",
        },
        {
            icon: <Clock3 />,
            title: "Quick Service",
            description: "Friendly and efficient service for a comfortable experience.",
        },
        {
            icon: <HeartHandshake />,
            title: "Warm Hospitality",
            description: "A welcoming atmosphere where every guest feels comfortable.",
        },
        {
            icon: <Sparkles />,
            title: "Memorable Taste",
            description: "Flavours that keep our guests coming back for more.",
        },
    ];

    return (
        <section className="py-20 bg-[#17120f] text-white">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="text-center max-w-2xl mx-auto">

                    <p className="text-orange-400 uppercase tracking-[0.25em] text-sm font-semibold">
                        Why Sanjari
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Made For Good Moments
                    </h2>

                    <p className="text-gray-400 mt-5">
                        Good food is only part of the experience.
                        We care about the people, service and moments around it.
                    </p>

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

                    {features.map((feature, index) => (

                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl p-7 hover:border-orange-500/50 hover:bg-white/5 transition-all"
                        >

                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-6 mt-3">
                                {feature.description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;