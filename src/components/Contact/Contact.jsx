import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./Contact.css";
import { init, sendForm } from 'emailjs-com';
  init('user_nsqhzN524O4FXdA1nVKhL');

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("Message");
  const [contactNumber, setContactNumber] = useState("000000");
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.status-message');
    // console.log(data);
    generateContactNumber();  sendForm('default_service', 'template_qpwmu8g', '#contact-form')
      .then(function(response) {
        setStatusMessage("Le message a bien été envoyé!");
        statusMessage.className = "status-message success";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      }, function(error) {
        setStatusMessage("Le message n'a put être envoyé! Essayez à nouveau, s'il vous plais.");
        statusMessage.className = "status-message failure";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000);
      });
  }
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  
  return (
  <div>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <h3>Prendre Contact</h3>
      <br/>
      <p className='status-message'>{statusMessage}</p>
        <h6>Ligne directe: <a href="tel:+33160649896">01.60.64.98.96</a></h6>
        <h6>Mail: <a href="mailto:contact@varela-electricite.com">contact@varela-electricite.com</a></h6>
        <br />
        <input type='hidden' name='contact_number' value={contactNumber} />
        <input type='text' name='user_name' placeholder='Nom' {...register('user_name')} maxLength='30' />
        <br/>
        <input type='email' name='user_email' placeholder='Email' {...register('user_email')} maxLength='30' />
        <br/>
        <input type='text' name='user_objet' placeholder='Objet' {...register('user_objet')} maxLength='30'/>
        <br/>
        <input type='text' name='user_phone' placeholder='📞 Numéro de téléphone' {...register('user_phone')} maxLength='30'/>
        <br/>
        <textarea name='message' placeholder='Votre message' {...register('message')} maxLength='1500' />
        <br />
        <p className='message-chars-left'>{messageCharsLeft} caractères</p>

        <input type='submit' value='Envoyer' />
      </form>
  </div>
  );
}

export default Contact;
