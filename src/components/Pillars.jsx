import { motion } from 'framer-motion';
import { Briefcase, Crown, MessageCircle, Target, Diamond } from 'lucide-react';
import styles from './Pillars.module.css';

const Pillars = ({ onOpenBooking }) => {
    const pillars = [
        {
            id: "01",
            icon: <Briefcase size={32} />,
            title: "Postura Profissional",
            description: "Como se portar para transmitir confiança imediata."
        },
        {
            id: "02",
            icon: <Crown size={32} />,
            title: "Imagem Coerente",
            description: "Sua imagem pessoal alinhada com o valor do seu serviço."
        },
        {
            id: "03",
            icon: <MessageCircle size={32} />,
            title: "Comunicação Clara",
            description: "Expressar valor sem parecer arrogante ou insegura."
        },
        {
            id: "04",
            icon: <Target size={32} />,
            title: "Posicionamento Estratégico",
            description: "Ocupar o lugar de destaque na mente do cliente."
        },
        {
            id: "05",
            icon: <Diamond size={32} />,
            title: "Valor Percebido",
            description: "Fazer o cliente enxergar que seu preço é justo."
        }
    ];

    return (
        <section id="pillars" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        OS 5 PILARES DA<br />
                        <span className="text-gradient">PROFISSIONAL DE REFERÊNCIA</span>
                    </h2>
                </div>

                <div className={styles.gridContainer}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`glass-card ${styles.card}`}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.number}>{pillar.id}</span>
                                <div className={styles.iconWrapper}>{pillar.icon}</div>
                            </div>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <p className={styles.cardDesc}>{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Dominar os 5 Pilares →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
