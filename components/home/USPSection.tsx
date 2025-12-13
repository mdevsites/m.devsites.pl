'use client';

import { motion } from 'framer-motion';
import { USP_ITEMS } from '@/lib/constants';

export default function USPSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="section-spacing !pt-12">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center !mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                        Dlaczego warto ze mną współpracować?
                    </h2>
                    <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed text-center">
                        Połączenie nowoczesnych technologii, doświadczenia i pasji do tworzenia
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
                    {USP_ITEMS.map((item, index) => {
                        const itemVariants = {
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: index * 0.1 },
                            },
                        };

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="card-light p-10 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center w-full md:w-[350px]"
                            >
                                <motion.div
                                    className="text-5xl mb-6 text-purple-600"
                                    style={{ willChange: 'transform' }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2,
                                    }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        );

                    })}
                </div>
            </div>
        </section>
    );
}
