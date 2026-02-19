import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import styles from './TargetAudience.module.css';

const TargetAudience = ({ onOpenBooking }) => {
    const forYou = [
        "Deseja ser reconhecida como autoridade",
        "Quer cobrar o valor justo pelo seu trabalho",
        "Busca segurança no posicionamento",
        "Quer atrair pacientes qualificados",
        "Está disposta a investir na própria carreira",
        "Entende que imagem comunica valor"
    ];

    const notForYou = [
        "Procura apenas fórmulas mágicas",
        "Não quer se dedicar ao processo",
        "Acha que preço é o único diferencial",
        "Está satisfeita com resultados medianos"
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>

                    {/* For You Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`glass-card ${styles.card} ${styles.positive}`}
                    >
                        <div className={styles.header}>
                            <div className={`${styles.iconWrapper} ${styles.green}`}>
                                <Check size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>ESTE WORKSHOP É PARA VOCÊ SE...</h3>
                        </div>
                        <ul className={styles.list}>
                            {forYou.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className={styles.listItem}
                                >
                                    <Check size={20} className={styles.checkIcon} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For You Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`glass-card ${styles.card} ${styles.negative}`}
                    >
                        <div className={styles.header}>
                            <div className={`${styles.iconWrapper} ${styles.red}`}>
                                <X size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>NÃO É PARA VOCÊ SE...</h3>
                        </div>
                        <ul className={styles.list}>
                            {notForYou.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    className={styles.listItem}
                                >
                                    <X size={20} className={styles.xIcon} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Sim, Isso é Para Mim →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
