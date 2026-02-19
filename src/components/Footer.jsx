import { Instagram, Mail, Phone, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        MASTER FACE PRO
                    </div>

                    <div className={styles.contact}>
                        <p>Realização:</p>
                        <div className={styles.logos}>
                            <span>Master Face Pro</span>
                            <span className={styles.divider}>|</span>
                            <span>Amora Gestão de Marcas</span>
                        </div>
                        <p className={styles.phone}>Fefa Morales</p>
                    </div>

                    <div className={styles.social}>
                        <a href="#" className={styles.socialLink}><Instagram size={20} /></a>

                        <a href="#" className={styles.socialLink}><Mail size={20} /></a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Master Face Pro. Todos os direitos reservados.</p>
                    <div className={styles.legal}>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
