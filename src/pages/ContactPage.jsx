import React, { useRef, useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser';

import '../styles/ContactStyles.css';

const ContactPage = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        to_name: '',
        to_last_name: '',
        to_cellphone: '',
        to_email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Accede a los valores del formulario directamente desde el estado local
        const { to_name, to_last_name, to_cellphone, to_email, message } = formValues;

        emailjs
            .sendForm('service_70o6068', 'template_jfbh0ak', form.current, {
                publicKey: 'trY4QoPrMDNElsS2q',
            })
            .then(
                () => {
                    toast('Correo Enviado Correctamente')
                    // Después de enviar el formulario, establece los valores en blanco
                    setFormValues({
                        to_name: '',
                        to_last_name: '',
                        to_cellphone: '',
                        to_email: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    // Manejar cambios en los inputs y actualizar el estado local
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    useEffect(() => {
        document.title = "Contact Page";
    }, []);

    return (
        <main>
            <NavBar />

            <section className='sectionForm'>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='map'>

                    </div>
                    <div className='contactForm'>
                        <h1>Contact Me!</h1>
                        <label>
                            <input required name='to_name' placeholder='Nombre - Carlos' value={formValues.to_name} onChange={handleChange} />
                        </label>
                        <label>
                            <input required name='to_last_name' placeholder='Apellido - Diaz' value={formValues.to_last_name} onChange={handleChange} />
                        </label>
                        <label>
                            <input required name='to_cellphone' placeholder='Telefono - 317 757 6245' value={formValues.to_cellphone} onChange={handleChange} />
                        </label>
                        <label>
                            <input required name='to_email' placeholder='Correo - example@gmail.com' value={formValues.to_email} onChange={handleChange} />
                        </label>
                        <label>
                            <textarea required name='message' placeholder='Haz realidad tus sueños, da una breve descripción de tus ideas' value={formValues.message} onChange={handleChange} />
                        </label>
                        <button className='btnSubmit' type='submit'>Enviar Mensaje</button>
                    </div>
                </form>
            </section>

            <Footer />
        </main>
    );
}

export default ContactPage;
