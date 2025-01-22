import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'aquibahmed21@gmail.com',
      href: 'mailto:aquibahmed21@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 (805) 069-1979',
      href: 'tel:+918080591979',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Bengaluru, KA, In',
      href: 'https://www.google.com/maps/@13.0154536,77.6099238,13z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={ info.href }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <div className="text-blue-500">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;