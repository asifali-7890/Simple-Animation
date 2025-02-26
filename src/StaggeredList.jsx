import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4
        }
    }
};

const itemVariants = (direction) => ({
    hidden: {
        x: direction === "left" ? -100 : 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
});

export default function StaggeredList() {
    const items = [
        { id: 1, text: "First item", direction: "left" },
        { id: 2, text: "Second item", direction: "right" },
        { id: 3, text: "Third item", direction: "left" },
        { id: 5, text: "Fourth item", direction: "right" },
        { id: 6, text: "First item", direction: "left" },
        { id: 7, text: "Second item", direction: "right" },
        { id: 8, text: "Third item", direction: "left" },
        { id: 9, text: "Fourth item", direction: "right" }
    ];

    return (
        <>
            <div className="flex">
                <motion.div
                    style={{
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem"
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants(item.direction)}
                            style={{
                                padding: "1rem",
                                backgroundColor: "lightblue",
                                borderRadius: "8px",
                                width: "300px"
                            }}
                        >
                            {item.text}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    style={{
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem"
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants(item.direction)}
                            style={{
                                padding: "1rem",
                                backgroundColor: "yellow",
                                borderRadius: "8px",
                                width: "300px"
                            }}
                        >
                            {item.text}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    style={{
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem"
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants(item.direction)}
                            style={{
                                padding: "1rem",
                                backgroundColor: 'pink',
                                borderRadius: "8px",
                                width: "300px"
                            }}
                        >
                            {item.text}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}