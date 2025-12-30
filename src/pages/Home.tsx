import { useState } from 'react';
import { Building2, Home, Paintbrush, Wrench, Construction, ArrowRight, Users, Award, Briefcase, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '../components/Button';

interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  content: string;
  rating: number;
}

interface HomeProps {
  onNavigate: (page: string) => void;
}

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'John Anderson',
    company: 'Anderson Properties',
    content: 'Exceptional work quality and professionalism. They delivered our commercial project ahead of schedule and within budget. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    client_name: 'Sarah Mitchell',
    company: 'Mitchell Homes',
    content: 'The team transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched.',
    rating: 5,
  },
  {
    id: '3',
    client_name: 'Robert Chen',
    company: 'Chen Enterprises',
    content: 'Outstanding construction company! They handled our complex renovation project with expertise and maintained excellent communication throughout.',
    rating: 5,
  },
  {
    id: '4',
    client_name: 'Emily Thompson',
    company: 'Thompson Development',
    content: 'Professional, reliable, and skilled. They exceeded our expectations on every level. Will definitely work with them again.',
    rating: 5,
  },
];

export default function HomePage({ onNavigate }: HomeProps) {
  const [testimonials] = useState<Testimonial[]>(mockTestimonials);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Building your dream home with quality and care',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Professional spaces that drive business success',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces into modern marvels',
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Creating beautiful and functional interiors',
    },
    {
      icon: Construction,
      title: 'Road & Infrastructure',
      description: 'Building the foundations of tomorrow',
    },
  ];

  const stats = [
    { icon: Briefcase, number: '500+', label: 'Projects Completed' },
    { icon: Award, number: '29', label: 'Years of Experience' },
    { icon: Users, number: '150+', label: 'Expert Workers' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Building Dreams with <span className="text-yellow-400">Precision & Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Premium construction services with 29 years of excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('projects')}>
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-400"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-yellow-600 font-semibold flex items-center hover:text-yellow-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => onNavigate('services')}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-gray-900" />
                </div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it
              </p>
            </div>

            <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentTestimonial]?.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xl text-gray-700 text-center mb-6 italic">
                "{testimonials[currentTestimonial]?.content}"
              </p>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial]?.client_name}
                </p>
                {testimonials[currentTestimonial]?.company && (
                  <p className="text-gray-600">{testimonials[currentTestimonial]?.company}</p>
                )}
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('about')}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
