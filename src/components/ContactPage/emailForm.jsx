import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_firstname, user_lastname, user_email, message } = formData;

    // Create a mailto link with pre-filled details
    const mailtoLink = `mailto:sharathksasikumar@gmail.com?subject=Message from ${user_firstname} ${user_lastname}&body=${encodeURIComponent(
      `From: ${user_firstname} ${user_lastname}\nEmail: ${user_email}\n\n${message}`
    )}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 rounded-lg md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            name="user_firstname"
            id="first_name"
            value={formData.user_firstname}
            onChange={handleChange}
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
            value={formData.user_lastname}
            onChange={handleChange}
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
          value={formData.user_email}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b-2 border-custom-orange focus:outline-none focus:border-green-700 text-gray-900 py-2"
          rows="4"
          required
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="bg-custom-orange hover:bg-green-700 text-white font-bold py-2 px-6 shadow-md transition duration-200"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
