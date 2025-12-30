import { useState } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import Button from '../components/Button';

interface Project {
  id: string;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  category: string;
  completion_date: string;
}

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Complex',
    description: 'Luxury apartments with state-of-the-art amenities',
    full_description: 'A stunning 50-unit residential complex featuring modern architecture, green spaces, and premium facilities including a gym, pool, and community center.',
    image_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    category: 'Residential Construction',
    completion_date: '2024-03-15',
  },
  {
    id: '2',
    title: 'Downtown Office Tower',
    description: 'Commercial high-rise building in city center',
    full_description: '30-story commercial office building with sustainable design features, advanced HVAC systems, and premium office spaces totaling 500,000 sq ft.',
    image_url: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    category: 'Commercial Construction',
    completion_date: '2024-01-20',
  },
  {
    id: '3',
    title: 'Shopping Mall Renovation',
    description: 'Complete modernization of retail space',
    full_description: 'Full renovation of a 200,000 sq ft shopping mall including new facades, interior design, lighting systems, and updated retail spaces.',
    image_url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    category: 'Renovation & Remodeling',
    completion_date: '2023-11-10',
  },
  {
    id: '4',
    title: 'Highway Bridge Construction',
    description: 'Infrastructure project connecting major routes',
    full_description: 'Construction of a 2-mile bridge with 6 lanes, featuring modern engineering and designed to last 100+ years.',
    image_url: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg',
    category: 'Road & Infrastructure',
    completion_date: '2024-02-28',
  },
  {
    id: '5',
    title: 'Luxury Villa Interior',
    description: 'High-end residential interior design',
    full_description: 'Complete interior design and execution for a 10,000 sq ft luxury villa featuring custom furniture, lighting, and premium finishes.',
    image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    category: 'Interior Design',
    completion_date: '2024-04-05',
  },
  {
    id: '6',
    title: 'Corporate Headquarters',
    description: 'State-of-the-art office campus',
    full_description: 'Construction of a modern 5-building corporate campus with 750,000 sq ft of office space, parking facilities, and landscaped grounds.',
    image_url: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
    category: 'Commercial Construction',
    completion_date: '2023-09-15',
  },
];

export default function ProjectsPage({ onNavigate }: ProjectsProps) {
  const [projects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'Interior Design', 'Road & Infrastructure'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Ongoing';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing excellence in construction
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  filter === category
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category.split(' ')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(project.completion_date)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {selectedProject.category}
                </span>
                <span className="text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(selectedProject.completion_date)}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {selectedProject.title}
              </h2>

              <p className="text-xl text-gray-700 mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.full_description && (
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.full_description}
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button onClick={() => {
                  setSelectedProject(null);
                  onNavigate('contact');
                }}>
                  Start Similar Project
                </Button>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's turn your vision into reality. Get in touch for a free consultation.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
