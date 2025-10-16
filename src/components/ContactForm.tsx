import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6 md:space-y-8">
          <div className="font-['Inter_Display'] text-sm font-normal leading-tight text-gray-500">
            Contact Us
          </div>

          <h2 className="font-['Inter_Display'] text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight text-black">
            Built for the future with us
          </h2>

          <button className="px-8 py-3 bg-black text-white rounded-lg font-['Inter_Display'] font-medium leading-tight hover:bg-gray-900 transition-all">
            Contact
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Property Type</option>
            <option value="residential">Residential</option>
            <option value="villa">Exclusive Villa</option>
            <option value="condo">High-End Condo</option>
            <option value="mansion">Modern Mansion</option>
            <option value="resort">Resort Property</option>
          </select>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Preferred location</option>
            <option value="dubai">Dubai</option>
            <option value="abu-dhabi">Abu Dhabi</option>
            <option value="sharjah">Sharjah</option>
            <option value="ajman">Ajman</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-['Inter_Display'] text-base focus:outline-none focus:ring-2 focus:ring-black resize-none"
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-black text-white rounded-2xl font-['Inter_Display'] font-medium leading-tight hover:bg-gray-900 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
