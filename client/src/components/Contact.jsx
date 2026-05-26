import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/contact", formData);

      setSuccess("✅ Table booked successfully! We will contact you soon.");

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess("");
      }, 4000);
    } catch (error) {
      setSuccess("❌ Booking failed. Please try again.");
    }
  };

  return (
    <section
  id="contact"
  className="text-white py-24 px-6 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24')",
  }}
>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          Book Your Table
        </h1>

        {success && (
          <div className="mb-6 text-center bg-green-500 text-black font-bold py-4 rounded-2xl">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 outline-none" required />

          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 outline-none" required />

          <div className="grid md:grid-cols-3 gap-6">
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-5 rounded-2xl bg-white text-black border border-zinc-700 outline-none" required />

            <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-5 rounded-2xl bg-white text-black border border-zinc-700 outline-none" required />

            <input type="number" name="guests" placeholder="Guests" min="1" max="20" value={formData.guests} onChange={handleChange} className="p-5 rounded-2xl bg-white text-black border border-zinc-700 outline-none" required />
          </div>

          <textarea name="message" placeholder="Special request optional" rows="5" value={formData.message} onChange={handleChange} className="p-5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 outline-none" />

          <button className="bg-yellow-500 text-black py-4 rounded-full font-bold hover:bg-yellow-400 transition">
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;