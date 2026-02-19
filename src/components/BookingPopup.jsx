import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';
import styles from './BookingPopup.module.css';

const BookingPopup = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        dificuldade: '',
        expectativa: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // Send data to webhook
            await fetch('https://viaza-n8n-webhook.nohypeia.com/webhook/masterface', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Redirect to payment
            window.location.href = 'https://www.ticketsul.com.br/w-tic/public/direct/ev218.html';
        } catch (error) {
            console.error('Error submitting form:', error);
            // Fallback redirect even on error to ensure conversion
            window.location.href = 'https://www.ticketsul.com.br/w-tic/public/direct/ev218.html';
        }
    };

    const isStep1Valid = formData.nome.length > 2 && formData.telefone.length > 8;
    const isStep2Valid = formData.dificuldade.length > 5;
    const isStep3Valid = formData.expectativa.length > 5;

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <div className={styles.overlay}>
            <motion.div
                className={styles.popupContainer}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
            >
                <button onClick={onClose} className={styles.closeButton}>
                    <X size={24} />
                </button>

                <div className={styles.progressContainer}>
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`${styles.progressDot} ${step >= s ? styles.activeDot : ''}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode='wait' initial={false}>
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.stepContent}
                        >
                            <h3 className={styles.question}> Vamos começar! Qual seu nome e contato?</h3>

                            <div>
                                <label className={styles.label}>Nome Completo</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Seu nome"
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className={styles.label}>WhatsApp / Telefone</label>
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <button
                                onClick={handleNext}
                                className={styles.nextButton}
                                disabled={!isStep1Valid}
                            >
                                Próximo <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.stepContent}
                        >
                            <h3 className={styles.question}>Qual sua principal dificuldade hoje na harmonização?</h3>

                            <textarea
                                name="dificuldade"
                                value={formData.dificuldade}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Ex: precificação, insegurança técnica, captar pacientes..."
                                autoFocus
                            />

                            <div className={styles.buttonGroup}>
                                <button onClick={handleBack} className={styles.backButton}>Voltar</button>
                                <button
                                    onClick={handleNext}
                                    className={styles.nextButton}
                                    disabled={!isStep2Valid}
                                >
                                    Próximo <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.stepContent}
                        >
                            <h3 className={styles.question}>O que você espera transformar com o Master Face Pro?</h3>

                            <textarea
                                name="expectativa"
                                value={formData.expectativa}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Ex: ser referência na minha cidade, aumentar faturamento..."
                                autoFocus
                            />

                            <div className={styles.buttonGroup}>
                                <button onClick={handleBack} className={styles.backButton}>Voltar</button>
                                <button
                                    onClick={handleSubmit}
                                    className={styles.nextButton}
                                    disabled={!isStep3Valid || isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Finalizar e Ir para Pagamento'}
                                    {!isSubmitting && <Check size={18} />}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default BookingPopup;
