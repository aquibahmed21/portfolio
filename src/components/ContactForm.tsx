import React, { useState, useEffect } from 'react';

const WEB3FORMS_ACCESS_KEY = "37ed1dab-97de-4556-a08b-2f18a3b28172";
const STATUS_DISPLAY_DURATION = 4000;

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SubmitStatus | null>(null);

  useEffect(() => {
    if (!status) return;
    const timeout = setTimeout(() => setStatus(null), STATUS_DISPLAY_DURATION);
    return () => clearTimeout(timeout);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    // Handle form submission
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const formDataObj = new FormData(e.target as HTMLFormElement);

    formDataObj.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: "Thanks for reaching out! I'll get back to you soon." });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: data.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: 'error', message: "Network error. Please try again." });
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={ handleSubmit } className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <p
          className={`text-center text-sm mt-2 ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;