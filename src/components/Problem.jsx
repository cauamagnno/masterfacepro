import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Target, TrendingDown } from 'lucide-react';
import styles from './Problem.module.css';

const Problem = ({ onOpenBooking }) => {
    const problems = [
        {
            icon: <DollarSign size={40} className={styles.icon} />,
            title: "Compete por Preço",
            description: "Seu diferencial acaba sendo quem cobra menos."
        },
        {
            icon: <Target size={40} className={styles.icon} />,
            title: "Justifica Valores",
            description: "O cliente não entende por que pagar o seu preço."
        },
        {
            icon: <TrendingDown size={40} className={styles.icon} />,
            title: "Vira Commodity",
            description: "É vista como apenas mais uma no mercado."
        }
    ];

    return (
        <section id="problem" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`glass-card ${styles.card}`}
                >
                    <div className={styles.header}>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                        >
                            <AlertTriangle size={48} color="var(--color-primary)" />
                        </motion.div>
                        <h2 className={styles.title}>
                            Você é Excelente na Técnica,<br />
                            <span className={styles.subtitle}>Mas Isso Não Basta Mais</span>
                        </h2>
                    </div>

                    <div className={styles.grid}>
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10, borderColor: "var(--color-primary)" }}
                                className={styles.problemCard}
                            >
                                <div className={styles.iconWrapper}>{problem.icon}</div>
                                <h3 className={styles.problemTitle}>{problem.title}</h3>
                                <p className={styles.problemDesc}>{problem.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className={styles.footer}
                    >
                        <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 700 }}>
                            "O PROBLEMA NÃO É SUA TÉCNICA.<br />É SEU POSICIONAMENTO."
                        </h3>
                        <button className={styles.ctaButton} onClick={onOpenBooking}>
                            Quero Mudar Isso →
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
