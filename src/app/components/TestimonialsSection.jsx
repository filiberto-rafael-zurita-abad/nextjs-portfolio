import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Gloria Abad Mora',
      role: 'Business Owner',
      message: 'Working in sales with Rafael has been a rewarding experince. He is both hardworking and a good example for his co-workers to follow.',
      image: '/images/testimonial-1.png', // Placeholder image path
    },
    {
      id: 2,
      name: 'Michael Hsieh',
      role: 'Head of Global Teaching Operations at TutorABC',
      message: "Rafael's professionalism and outgoing spirit make him a great asset to any team. His ability to work with people from different backgrounds helped him better navigate the online teaching world.",
      image: '/images/testimonial-2.png', // Placeholder image path
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-24 text-white">  {/* Removed bg-[#18191E] */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#33353F] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-[#ADB7BE]">{testimonial.role}</p>
                  <p className="testimonial-stars">★★★★★</p>  {/* Added star rating class */}
                </div>
              </div>
              <p className="italic">" {testimonial.message} "</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


