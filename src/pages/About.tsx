import { Target, Eye, Award, Shield, Users, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutProps) {
  const team = [
    {
      name: 'Michael Roberts',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    },
    {
      name: 'David Chen',
      role: 'Lead Architect',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality, using only the best materials and techniques.',
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and deliver excellence.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing new technologies and methods to deliver superior results.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to exceeding expectations in every project we undertake.',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'LEED Accredited Professional',
    'OSHA Safety Certified',
    'Green Building Certified',
    'Licensed General Contractor',
    'Bonded & Insured',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About BuildPro</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building excellence since 1995 with integrity, innovation, and unmatched expertise
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 1995 by Michael Roberts, BuildPro Construction began as a small family
                  business with a simple mission: to build quality structures that stand the test of time.
                </p>
                <p>
                  Over the past 29 years, we've grown from a local contractor to a leading construction
                  company, completing over 500 projects across residential, commercial, and infrastructure
                  sectors.
                </p>
                <p>
                  Our success is built on a foundation of trust, quality craftsmanship, and an unwavering
                  commitment to our clients. Every project we undertake reflects our dedication to
                  excellence and innovation in the construction industry.
                </p>
                <p>
                  Today, BuildPro employs over 150 skilled professionals and continues to set new
                  standards in construction quality, safety, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations through
                innovation, quality craftsmanship, and unwavering commitment to safety and sustainability.
                We strive to build lasting relationships and structures that serve communities for
                generations to come.
              </p>
            </div>

            <div>
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted and respected construction company, recognized for our innovative
                solutions, sustainable practices, and commitment to excellence. We envision a future
                where every project we complete sets new standards for quality and contributes positively
                to the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence and commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-800 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us on Your Next Project
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the BuildPro difference. Let's create something exceptional together.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
}
