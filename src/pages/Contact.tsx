import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Construction Avenue<br />
                      Builder City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@buildpro.com</p>
                    <p className="text-gray-600">quotes@buildpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841937374205!2d-73.98823492346677!3d40.758701971383674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BuildPro Location"
                ></iframe>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {isSubmitted && (
                  <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4 mb-6 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-semibold">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.name ? 'border-red-400' : 'border-gray-300'
                      } focus:border-yellow-400 focus:outline-none transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? 'border-red-400' : 'border-gray-300'
                      } focus:border-yellow-400 focus:outline-none transition-colors`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message ? 'border-red-400' : 'border-gray-300'
                      } focus:border-yellow-400 focus:outline-none transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4">
                      <p className="text-red-800 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose BuildPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
