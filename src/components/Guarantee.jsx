import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import styles from './Guarantee.module.css';

const Guarantee = ({ onOpenBooking }) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`glass-card ${styles.card}`}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        className={styles.sealWrapper}
                    >
                        <div className={styles.seal}>
                            <Shield size={40} className={styles.shieldIcon} />
                        </div>
                    </motion.div>

                    <div className={styles.content}>
                        <div className={styles.badge}>GARANTIA DE SATISFAÇÃO</div>
                        <h2 className={styles.title}>100% DO SEU INVESTIMENTO DE VOLTA</h2>
                        <p className={styles.description}>
                            Se você participar do primeiro turno e sentir que o conteúdo não é para você,
                            devolvemos o valor integral do seu ingresso.
                        </p>
                        <p className={styles.subtext}>Sem letras miúdas. Sem burocracia.</p>

                        <button className={styles.ctaButton} onClick={onOpenBooking}>
                            Garantido, Quero Participar →
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Guarantee;
