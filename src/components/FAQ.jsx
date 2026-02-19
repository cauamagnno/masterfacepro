import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = ({ onOpenBooking }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "É um curso técnico de procedimentos?",
            answer: "Não. O foco é posicionamento, estratégia de carreira, imagem e vendas. Você já tem a técnica, agora vamos te ensinar a ser valorizada por ela."
        },
        {
            question: "Preciso ter experiência na área?",
            answer: "Idealmente sim. O workshop é desenhado para profissionais que já atuam e querem escalar seus resultados e autoridade."
        },
        {
            question: "Tem certificado?",
            answer: "Sim! Você receberá um certificado de participação exclusivo Master Face Pro, atestando sua busca por excelência além da técnica."
        },
        {
            question: "Como funciona o ingresso duplo?",
            answer: "Você compra dois ingressos com desconto especial. Ideal para trazer uma sócia ou colega de profissão para crescerem juntas."
        },
        {
            question: "Tem gravação?",
            answer: "O evento é presencial para garantir a experiência imersiva e o networking. Não haverá transmissão online ou gravação completa."
        }
    ];

    return (
        <section id="faq" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>PERGUNTAS FREQUENTES</h2>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.faqItem}
                        >
                            <button
                                className={styles.questionButton}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className={styles.questionContent}>
                                    <HelpCircle className={styles.icon} size={20} />
                                    <span className={styles.questionText}>{faq.question}</span>
                                </div>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={styles.answerWrapper}
                                    >
                                        <p className={styles.answer}>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <button className={styles.ctaButton} onClick={onOpenBooking}>
                        Ainda Tem Dúvidas? Fale Conosco →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
