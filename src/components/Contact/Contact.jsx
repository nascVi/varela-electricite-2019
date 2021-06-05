import React from "react";
import { useForm } from "react-hook-form";

import "./Contact.css";


const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
  
  return (
  <div>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <h3>Prendre Contact</h3>
      <br/>
      <br/>
        <input type='text' name='user_name' placeholder='Nom' {...register('text')} maxLength='30' />
        <br/>
        <input type='email' name='user_email' placeholder='Email' {...register('email')} maxLength='30' />
        <br/>
        <input type='text' name='user_subject' placeholder='Objet' {...register('text')} maxLength='30'/>
        <br/>
        <input type='text' name='user_phone' placeholder='📞 Numéro de téléphone' {...register('text')} maxLength='30'/>
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
