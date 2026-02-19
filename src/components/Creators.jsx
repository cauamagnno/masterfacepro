import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';
import styles from './Creators.module.css';

const Creators = ({ onOpenBooking }) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>QUEM ESTÁ POR TRÁS</h2>

                <div className={styles.grid}>
                    {/* Creator 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`glass-card ${styles.card}`}
                    >
                        <div className={styles.imageWrapper}>
                            <img src="https://bxhymspdioxddhacxvrt.supabase.co/storage/v1/object/public/cauamagno/fotoluana.JPEG" alt="Luana Amaral" className={styles.creatorImage} />
                        </div>
                        <div className={styles.content}>
                            <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>Luana Amaral</h3>
                            <p className={styles.role}>34 anos • Biomédica Esteta</p>
                            <div className={styles.iconTag}>
                                <Briefcase size={16} /> Especialista Técnica
                            </div>
                            <p className={styles.bio}>
                                Referência em harmonização facial com mais de 10 anos de experiência clínica.
                                Transformou sua técnica em um método replicável de sucesso.
                            </p>
                        </div>
                    </motion.div>

                    {/* Creator 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`glass-card ${styles.card}`}
                    >
                        <div className={styles.imageWrapper}>
                            <img src="https://bxhymspdioxddhacxvrt.supabase.co/storage/v1/object/public/cauamagno/fotocamila.JPG" alt="Camila Kruger" className={styles.creatorImage} />
                        </div>
                        <div className={styles.content}>
                            <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>Camila Kruger</h3>
                            <p className={styles.role}>36 anos • Gestora de Carreira</p>
                            <div className={styles.iconTag}>
                                <TrendingUp size={16} /> Estrategista de Negócios
                            </div>
                            <p className={styles.bio}>
                                Especialista em posicionamento de marcas pessoais e alavancagem de carreiras
                                na área da saúde estética.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.footer}>
                    <p className={styles.equation}>Técnica + Estratégia = Referência</p>
                    <button className={styles.ctaButton} onClick={onOpenBooking}>Conhecer as Idealizadoras →</button>
                </div>
            </div>
        </section>
    );
};

export default Creators;
