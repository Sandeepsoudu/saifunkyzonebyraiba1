import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  // Animations only happen once
      offset: 50   // Trigger animations slightly earlier
    });
  }, []);

  const SectionCard = ({ title, children, className = "", dataAos = "", bgColor = "" }) => (
    <div
      data-aos={dataAos}
      className={`bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg ${className}`}
      style={{
        background: bgColor,
      }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-pink-400 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>about|SaiFashionZone by Raiba</title>
        <meta name="description" content="Learn about SaiFashionZone by Raiba journey, vision, and mission." />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                About Our Company
              </span>
              <span className="text-gray-900 block text-3xl mt-2">Celebrating Tradition, Redefining Style</span>
            </h1>
          </div>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* About Our Company Section */}
            <SectionCard
              title="About Our Company"
              dataAos="fade-right"
              bgColor="linear-gradient(145deg, #f0f8ff 0%, #e0f7fa 100%)" // Light blue gradient
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                At SaiFashionZone by Raiba, we are more than just a store. We are a celebration of tradition, elegance, and modern style, dedicated to providing an exceptional shopping experience for all your fashion needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey is rooted in a passion for fashion and a commitment to offering high-quality sarees, girls' wear, boys' wear, and ganzy clothes that resonate with your personality and preferences.
              </p>
            </SectionCard>

            {/* Why Choose Us Section */}
            <SectionCard
              title="Why Choose Us?"
              dataAos="fade-left"
              bgColor="linear-gradient(145deg, #fff9e6 0%, #fff3d9 100%)" // Light yellow gradient
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                We stand apart with our:
                <ul className="list-disc pl-5">
                  <li>Handpicked collections that blend tradition and trend.</li>
                  <li>Personalized shopping experience tailored to your needs.</li>
                  <li>Dedication to quality and customer satisfaction.</li>
                </ul>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team combines expertise in fashion, creative thinking, and a shared passion for delivering styles that make you shine.
              </p>
            </SectionCard>

            {/* Objective Section */}
            <SectionCard
              title="Objectives"
              dataAos="fade-right"
              bgColor="linear-gradient(145deg, #fdf5e6 0%, #f9f3d1 100%)" // Light cream gradient
              className="lg:col-span-2"
            >
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                <li>Deliver curated collections that elevate your wardrobe.</li>
                <li>Promote a blend of traditional and contemporary designs.</li>
                <li>Foster trust and long-term relationships with our customers.</li>
                <li>Continuously innovate to meet evolving fashion trends.</li>
              </ul>
            </SectionCard>

            {/* Vision Section */}
            <SectionCard
              title="Vision"
              dataAos="fade-right"
              bgColor="linear-gradient(145deg, #d9f7ff 0%, #c6e8fa 100%)" // Light sky blue gradient
            >
              <p className="text-gray-700 leading-relaxed">
                To be the go-to destination for premium ethnic and contemporary wear, inspiring confidence and style in every step.
              </p>
            </SectionCard>

            {/* Mission Section */}
            <SectionCard
              title="Mission"
              dataAos="fade-left"
              bgColor="linear-gradient(145deg, #e6ffe6 0%, #c3f8c3 100%)" // Light green gradient
            >
              <p className="text-gray-700 leading-relaxed">
                Our mission is to celebrate the beauty of tradition while embracing modern design, offering high-quality clothing that connects with every individual’s unique style.
              </p>
            </SectionCard>
          </div>

          {/* Image Section */}
          <div className="mt-16 text-center">
            <img
              src="src/assets/bg shop.png"
              alt="Our Team"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl h-auto transform transition duration-500 hover:scale-[1.05] hover:shadow-2xl"
            />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                Join Our Journey
              </span>
              <span className="text-gray-900 block text-2xl mt-2">Together, We Create Extraordinary Experiences</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At SaiFashionZone by Raiba, every saree, every outfit tells a story. We invite you to be a part of this journey, as we celebrate style, culture, and individuality with every piece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
