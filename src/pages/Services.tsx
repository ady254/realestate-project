import { Building2, Home, Paintbrush, Wrench, Construction, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Creating beautiful homes where families thrive and memories are made.',
      features: [
        'Custom home building',
        'Single & multi-family housing',
        'Energy-efficient designs',
        'Smart home integration',
        'Sustainable building practices',
      ],
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Building impressive commercial spaces that drive business success.',
      features: [
        'Office buildings',
        'Retail spaces',
        'Industrial facilities',
        'Hospitality projects',
        'Mixed-use developments',
      ],
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces into modern, functional environments.',
      features: [
        'Complete home renovations',
        'Kitchen & bathroom remodeling',
        'Structural modifications',
        'Space optimization',
        'Historic restoration',
      ],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Crafting beautiful interiors that reflect your style and personality.',
      features: [
        'Space planning',
        'Custom furniture design',
        'Color consultation',
        'Lighting design',
        'Material selection',
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    },
    {
      icon: Construction,
      title: 'Road & Infrastructure',
      description: 'Building the foundations that connect communities and drive progress.',
      features: [
        'Highway construction',
        'Bridge building',
        'Parking facilities',
        'Utility installation',
        'Site development',
      ],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction solutions backed by 29 years of expertise and innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button onClick={() => onNavigate('contact')}>
                    Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
