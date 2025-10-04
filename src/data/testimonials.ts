export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  tour: string;
  date: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jennifer Smith",
    location: "New York, USA",
    rating: 5,
    content:
      "The Golden Temple tour was absolutely incredible! Our guide was knowledgeable and respectful. The experience was both educational and spiritually uplifting. Highly recommended!",
    tour: "Golden Temple Heritage Tour",
    date: "2024-01-10",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    content:
      "The cultural experience tour exceeded all expectations. We learned so much about local traditions and the guide made everything so engaging. A truly authentic experience.",
    tour: "Cultural Experiences",
    date: "2024-01-08",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: "3",
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    content:
      "The Varanasi temple tour was a life-changing experience. The morning rituals at the ghats and the evening aarti were unforgettable. Our guide was exceptional.",
    tour: "Varanasi Sacred Temples",
    date: "2024-01-05",
    image: "/images/testimonial-3.jpg",
  },
  {
    id: "4",
    name: "David Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    content:
      "The educational program was perfect for our group. The lecturer was excellent and the materials provided were comprehensive. We gained deep insights into temple architecture.",
    tour: "Educational Programs",
    date: "2024-01-03",
    image: "/images/testimonial-4.jpg",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    location: "Melbourne, Australia",
    rating: 5,
    content:
      "Our custom tour was perfectly tailored to our interests. The guide was flexible and accommodating, making sure we saw everything we wanted. Outstanding service!",
    tour: "Custom Tours",
    date: "2024-01-01",
    image: "/images/testimonial-5.jpg",
  },
];
