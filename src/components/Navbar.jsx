import { useState, useEffect } from 'react';

import styles from './Navbar.module.css';

const Navbar = ({ onOpenBooking }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#problem' },
        { name: 'Pilares', href: '#pillars' },
        { name: 'Investimento', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <img src="https://bxhymspdioxddhacxvrt.supabase.co/storage/v1/object/public/cauamagno/logomasterfacepro.png" alt="Master Face Pro" className={styles.logoImage} />
                    </div>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </a>
                        ))}
                        <button className={styles.ctaButton} onClick={onOpenBooking}>
                            Garantir Vaga
                        </button>
                    </div>

                    {/* Mobile CTA (Visible only on mobile) */}
                    <button className={styles.mobileCtaOnly} onClick={onOpenBooking}>
                        Garantir Vaga
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
