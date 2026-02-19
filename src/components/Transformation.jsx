import { motion } from 'framer-motion';
import { Target, Sparkles, MessageSquare, Trophy } from 'lucide-react';
import styles from './Transformation.module.css';

const Transformation = ({ onOpenBooking }) => {
    const items = [
        {
            icon: <Target className={styles.icon} />,
            title: "Posicionamento Profissional",
            desc: "Deixe de ser comparada e torne-se a referência natural."
        },
        {
            icon: <Sparkles className={styles.icon} />,
            title: "Alinhamento de Imagem",
            desc: "Sua aparência comunicando exatamente o valor que você entrega."
        },
        {
            icon: <MessageSquare className={styles.icon} />,
            title: "Comunicação de Valor",
            desc: "Argumentos que justificam seu preço sem esforço."
        },
        {
            icon: <Trophy className={styles.icon} />,
            title: "Transformação em Referência",
            desc: "O reconhecimento que sua técnica já merece."
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>O QUE VOCÊ VAI CONQUISTAR</h2>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card ${styles.card}`}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            </div>

                            <div className={styles.progressWrapper}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className={styles.progressBar}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Iniciar Minha Transformação →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
