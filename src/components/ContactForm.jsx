import React, { useState } from 'react'
import './ContactForm.scss'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

  return (
    <div className='contactFormContainer'>
        <form action="https://formsubmit.co/samueltribulo@gmail.com" method="post">
            <div className="formGroup">
                <label htmlFor="name">Tu nombre
                <input type="text" id='name' name='name' value={name} onChange={e => setName(e.target.value)}/>
                </label>
            </div>
            <div className="formGroup">
                <label htmlFor="mail">Tu E-mail
                <input type="email" id='mail' name='mail' value={mail} onChange={e => setMail(e.target.value)}/>
                </label>
            </div>
            <div className="formGroup">
                <label htmlFor="message">Tu mensaje
                <textarea  id='message' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                </label>
            </div>
            <button type='submit' className='formBTN'>Enviar</button>
        </form>
    </div>
  )
}
