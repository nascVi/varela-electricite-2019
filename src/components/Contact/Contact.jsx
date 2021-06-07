import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./Contact.css";
import { init, sendForm } from 'emailjs-com';
init('user_T88n6gWGeTvbEW2Dluq3m');

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();  sendForm('default_service', 'template_cj2uqd8', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  
  return (
  <div>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <h3>Prendre Contact</h3>
      <br/>
      <br/>
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
        <p className='message-chars-left'>{messageCharsLeft} caracters</p>

        <input type='submit' value='Envoyer' />
      </form>
  </div>
  );
}

export default Contact;
