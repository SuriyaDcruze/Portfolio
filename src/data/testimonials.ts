export interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechGrowth Inc.",
    text: "Working with John was an absolute pleasure. He took our vague concept and transformed it into a stunning website that perfectly captures our brand. His attention to detail and ability to translate our needs into a functional design exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "Innovate Solutions",
    text: "John is a true professional who delivers outstanding results. His technical expertise combined with his eye for design resulted in a product that not only looks beautiful but functions flawlessly. He was responsive, met all deadlines, and was a joy to collaborate with.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "Nexus Digital",
    text: "I've worked with many designers and developers, but John stands out for his ability to balance creativity with functionality. He asks the right questions, provides valuable insights, and delivers high-quality work consistently. I highly recommend him for any project.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];