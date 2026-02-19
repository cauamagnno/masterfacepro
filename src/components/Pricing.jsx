import { motion } from 'framer-motion';
import { User, Users, Check } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = ({ onOpenBooking }) => {
    const benefits = [
        "10h de workshop",
        "Material didático",
        "Coffee break",
        "Ecobag oficial",
        "Certificado",
        "Grupo exclusivo"
    ];

    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>INVESTIMENTO NA SUA AUTORIDADE</h2>
                    <p className={styles.subtitle}>Escolha o melhor plano para sua jornada</p>
                </div>

                <div className={styles.grid}>
                    {/* Individual Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className={`glass-card ${styles.card}`}
                    >
                        <div className={styles.cardHeader}>
                            <User size={32} className={styles.icon} />
                            <h3 className={styles.planName}>Ingresso Individual</h3>
                        </div>

                        <div className={styles.priceWrapper}>
                            <span className={styles.currency}>R$</span>
                            <span className={styles.price}>490</span>
                            <span className={styles.cents}>,00</span>
                        </div>

                        <ul className={styles.benefitList}>
                            {benefits.map((b, i) => (
                                <li key={i} className={styles.benefitItem}>
                                    <Check size={18} className={styles.check} /> {b}
                                </li>
                            ))}
                        </ul>

                        <button className={styles.ctaButton} onClick={onOpenBooking}>
                            Garantir Vaga Individual →
                        </button>
                    </motion.div>

                    {/* Double Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className={`glass-card ${styles.card} ${styles.highlight}`}
                    >
                        <div className={styles.badge}>⭐ MAIS POPULAR</div>

                        <div className={styles.cardHeader}>
                            <Users size={32} className={styles.icon} />
                            <h3 className={styles.planName}>Ingresso Duplo</h3>
                        </div>

                        <div className={styles.priceWrapper}>
                            <span className={styles.currency}>R$</span>
                            <span className={styles.price}>690</span>
                            <span className={styles.cents}>,00</span>
                        </div>
                        <p className={styles.subPrice}>R$ 345,00 por pessoa</p>

                        <ul className={styles.benefitList}>
                            {benefits.map((b, i) => (
                                <li key={i} className={styles.benefitItem}>
                                    <Check size={18} className={styles.check} /> {b}
                                </li>
                            ))}
                            <li className={styles.benefitItem}>
                                <Check size={18} className={styles.check} /> <strong>Networking em dupla</strong>
                            </li>
                        </ul>

                        <button className={`${styles.ctaButton} ${styles.ctaHighlight}`} onClick={onOpenBooking}>
                            Garantir 2 Vagas →
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
