import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './Solution.module.css';

const Solution = ({ onOpenBooking }) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.content}
                    >
                        <span className={styles.badge}>A SOLUÇÃO</span>
                        <h2 className={styles.headline}>
                            Pro Harmonize: Mais do Que Técnica,<br />
                            <span className="text-gradient">Construção de Autoridade</span>
                        </h2>

                        <div className={`glass-card ${styles.descriptionCard}`}>
                            <p>
                                Um método exclusivo para profissionais que desejam sair da guerra de preços
                                e se tornar a única opção na mente de seus pacientes.
                            </p>
                        </div>

                        <div className={styles.benefits}>
                            {['Autoridade', 'Referência', 'Valor Premium'].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className={styles.benefitTag}
                                >
                                    <CheckCircle size={16} /> {item}
                                </motion.div>
                            ))}
                        </div>

                        <button className={styles.ctaButton} onClick={onOpenBooking}>
                            Conhecer o Método →
                        </button>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.visual}
                    >
                        <div className={styles.visualContent}>
                            {/* Abstract minimalist representation of "Structure/Hierarchy" */}
                            <div className={styles.structure}>
                                <div className={styles.cube1} />
                                <div className={styles.cube2} />
                                <div className={styles.cube3} />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Solution;
