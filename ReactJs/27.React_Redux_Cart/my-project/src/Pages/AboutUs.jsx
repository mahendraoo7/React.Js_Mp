import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Our Company</h1>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              We are a team of passionate individuals dedicated to bringing innovative solutions to the tech industry. Our mission is to deliver high-quality products that exceed customer expectations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                Our vision is to be a leader in tech innovation, making technology accessible and valuable to everyone.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                We aim to deliver high-quality products and exceptional customer service, fostering long-term relationships with our clients.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Innovation, and Customer Satisfaction are the core values that drive us in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Company. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#!" className="text-white hover:underline">Privacy Policy</a>
            <a href="#!" className="text-white hover:underline">Terms of Service</a>
            <a href="#!" className="text-white hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
