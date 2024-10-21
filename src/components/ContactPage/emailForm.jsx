import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=" p-10 rounded-lg  md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            name="user_firstname"
            id="first_name"
            className="w-full border-b-2 border-custom-orange focus:outline-none focus:border-green-700 text-gray-900 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
            Last Name
          </label>
          <input
            type="text"
            name="user_lastname"
            id="last_name"
            className="w-full border-b-2 border-custom-orange focus:outline-none focus:border-green-700 text-gray-900 py-2"
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email *
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          className="w-full border-b-2 border-custom-orange focus:outline-none focus:border-green-700 text-gray-900 py-2"
          required
        />
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full border-b-2 border-custom-orange focus:outline-none focus:border-green-700 text-gray-900 py-2"
          rows="4"
          required
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="bg-custom-orange hover:bg-green-700 text-white font-bold py-2 px-6  shadow-md transition duration-200"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
