export interface Project {
  id: string;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  category: string;
  completion_date: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  content: string;
  rating: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
