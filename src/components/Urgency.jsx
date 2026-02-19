import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import styles from './Urgency.module.css';

const Urgency = ({ onOpenBooking }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set deadline to 3 days from now for demo purposes
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 3);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = deadline - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={styles.content}
                >
                    <div className={styles.header}>
                        <Clock size={32} className={styles.icon} />
                        <h2 className={styles.title}>VAGAS LIMITADAS</h2>
                    </div>

                    <p className={styles.subtitle}>Apenas 40 vagas disponíveis</p>

                    <div className={styles.timer}>
                        <div className={styles.timeUnit}>
                            <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className={styles.label}>Dias</span>
                        </div>
                        <span className={styles.separator}>:</span>
                        <div className={styles.timeUnit}>
                            <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className={styles.label}>Horas</span>
                        </div>
                        <span className={styles.separator}>:</span>
                        <div className={styles.timeUnit}>
                            <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className={styles.label}>Min</span>
                        </div>
                        <span className={styles.separator}>:</span>
                        <div className={styles.timeUnit}>
                            <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className={styles.label}>Seg</span>
                        </div>
                    </div>

                    <p className={styles.dateInfo}>Próxima turma: Ainda não confirmada</p>

                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Não Perder Esta Oportunidade →
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Urgency;
