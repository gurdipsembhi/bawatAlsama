'use client';
import { useState } from 'react';
import styles from '@/component/ContactUs/contactUs.module.css';
import contactUs from '@/json/contactUs.json';

export default function Contact() {
    const { contactForm } = contactUs.contactPage;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setStatus(result.message);
        } catch (error) {
            setStatus('Failed to send the message.');
            console.error(error);
        }
    };

    if (!contactForm) {
        return <p>Loading...</p>;
    }

    return (
       <div className={styles.container}>
            <div className={styles.contactForm}>
                <h2 className={styles.subtitle}>{contactForm.label}</h2>
                <form onSubmit={handleSubmit}>
                    {contactForm.fields.map((field, index) => (
                        <div key={index}>
                            <label>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                    <button type="submit">{contactForm.button.text}</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
}
