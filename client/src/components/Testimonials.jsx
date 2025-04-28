import React from "react";

const testimonials = [
  {
    image: "https://via.placeholder.com/50",
    opinion: "This is an amazing service! Highly recommended.",
    name: "John Doe",
  },
  {
    image: "https://via.placeholder.com/50",
    opinion: "I had a great experience. Will use it again.",
    name: "Jane Smith",
  },
  {
    image: "https://via.placeholder.com/50",
    opinion: "Fantastic quality and support. Loved it!",
    name: "Alice Johnson",
  },
  {
    image: "https://via.placeholder.com/50",
    opinion: "Exceeded my expectations. Great job!",
    name: "Michael Brown",
  },
  {
    image: "https://via.placeholder.com/50",
    opinion: "Very professional and reliable. Thank you!",
    name: "Emily Davis",
  },
  {
    image: "https://via.placeholder.com/50",
    opinion: "Absolutely wonderful! Will recommend to others.",
    name: "Chris Wilson",
  },
];

const Testimonials = ({language}) => {
  return (
    <div className="overflow-hidden pt-50">
      <h2 className="text-5xl font-semibold text-center mb-8">
        {language === "en"
          ? "What Our Clients Say"
          : "Lo Que Dicen Nuestros Clientes"}
      </h2>
      <div className="inline-flex animate-scroll hover:pause-scroll">
        {/* Duplicate testimonials for seamless looping */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 p-4 mx-6 border-1 border-gray-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <p className="mt-4 text-sm text-gray-200">{testimonial.opinion}</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
