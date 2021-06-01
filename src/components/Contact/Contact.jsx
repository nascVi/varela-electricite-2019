import React from 'react';
import Post from './Post';


const deskUpload = () => {
  return (
    <form>
      <input type="file"/>
    </form>
  )
}

function Contact() {
  return (
    <div className="contact">
      <Post />
    </div>
  );
}

export default Contact;