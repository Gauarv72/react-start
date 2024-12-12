import React from "react";

export default function More() {
  return (
    <div className="bg-gray-100 text-gray-800">
   
     

      {/* Hero Section */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to My Page</h2>
          <p className="text-lg mb-6">This is a simple, responsive design made with Tailwind CSS.</p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Placeholder Hero"
            className="mx-auto rounded shadow-lg mb-6"
          />
          <a href="#services" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder Web Development"
                className="rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Web Development</h4>
              <p>We build modern, responsive websites.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder Mobile Apps"
                className="rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Mobile Apps</h4>
              <p>Creating high-quality mobile applications.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder SEO Optimization"
                className="rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">SEO Optimization</h4>
              <p>Boost your website's visibility in search engines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
