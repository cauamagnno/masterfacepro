import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './FinalCTA.module.css';

const FinalCTA = ({ onOpenBooking }) => {
    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.container}
            >
                <div className={styles.content}>
                    <h2 className={`text-gradient ${styles.quote}`}>
                        "FAZER MAIS NÃO É A RESPOSTA"
                    </h2>
                    <p className={styles.subtext}>
                        Pro Harmonize não é sobre fazer mais. É sobre fazer com intenção, clareza e presença.
                    </p>
                    <p className={styles.closing}>
                        Profissionais de referência não se improvisam. Elas se constroem.
                    </p>

                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Construir Minha Autoridade Agora →
                    </button>

                    <div className={styles.badges}>
                        <div className={styles.badgeItem}>
                            <CheckCircle size={16} className={styles.icon} /> 40 vagas limitadas
                        </div>
                        <div className={styles.badgeItem}>
                            <CheckCircle size={16} className={styles.icon} /> Garantia 100%
                        </div>
                        <div className={styles.badgeItem}>
                            <CheckCircle size={16} className={styles.icon} /> Pagamento seguro
                        </div>
                    </div>
                </div>

                {/* Decorative particles */}
                <div className={styles.particles}>
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.particle}
                            animate={{
                                y: [0, -100],
                                opacity: [0, 1, 0],
                                x: Math.random() * 200 - 100
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '100%'
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FinalCTA;
