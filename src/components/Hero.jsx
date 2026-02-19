import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ onOpenBooking }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <section ref={ref} className={styles.hero}>
            {/* Animated Background */}
            <motion.div
                className={styles.background}
                style={{ y: backgroundY }}
            >
                <div className={styles.blob} />
                <div className={styles.grid} />
            </motion.div>

            <div className="container">
                <motion.div
                    className={styles.content}
                    style={{ y: textY }}
                >
                    {/* Logo / Top Text */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.logoWrapper}
                    >
                        <img src="https://bxhymspdioxddhacxvrt.supabase.co/storage/v1/object/public/cauamagno/logomasterfacepro.png" alt="Master Face Pro" className={styles.heroLogo} />
                    </motion.div>
                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={styles.headlineWrapper}
                    >
                        <h1 className={styles.headline}>
                            ALÉM DA<br />
                            <span className="text-gradient">TÉCNICA</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Onde Nasce a Profissional de Referência em Harmonização Estética
                        </p>
                    </motion.div>

                    {/* Event Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="glass-card"
                        style={{ padding: '1.5rem', margin: '2rem 0', display: 'inline-block' }}
                    >
                        <div className={styles.eventInfo}>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📅</span> 07 de março de 2026
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>⏰</span> 8h às 18h
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📍</span> Rampa Hub Innovation - Sala Plug.In
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.9 }}
                        className={styles.ctaButton}
                        onClick={onOpenBooking}
                    >
                        Garantir Minha Vaga Agora →
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={styles.scrollIndicator}
            >
                <ArrowDown size={32} color="var(--color-primary)" />
            </motion.div>
        </section>
    );
};

export default Hero;
