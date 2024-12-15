import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollProgress / 100 }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 origin-left z-50"
    />
  );
};

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  const productCategories = [
    { img: "https://tse3.mm.bing.net/th?id=OIP.kZ-qc46TIkfO2jtXbRcvCwAAAA&pid=Api&P=0&h=220", title: "Sarees", description: "Elegant sarees for every occasion." },
    { img: "https://sp.yimg.com/ib/th?id=OPHS.KSi01GL4xjhwQQ474C474&o=5&pid=21.1&w=160&h=105", title: "Girls' Wear", description: "Trendy outfits for girls." },
    { img: "https://tse2.mm.bing.net/th?id=OIP.LfX-qg9vTP0H70HykyUPxQHaLH&pid=Api&P=0&h=220", title: "Boys' Wear", description: "Stylish clothing for boys." },
    { img: "https://tse4.mm.bing.net/th?id=OIP.dkBel2Ur3OU1bZurMnYh0wHaHa&pid=Api&P=0&h=220", title: "Ganzy Clothes", description: "Comfortable and chic designs." },
  ];

  return (
    <>
      <Helmet>
        <title>SaiFashionZone | Unique Collections</title>
        <meta name="description" content="Discover unique collections for every occasion." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <div className="w-full bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
              alt="Elegant Background"
              className="w-full h-full object-cover filter brightness-50"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="relative z-10 container mx-auto max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-12 rounded-3xl shadow-2xl text-center">
              <h1 className="mb-6 text-5xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-transparent">
                Discover Curated Collections
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Explore products that define elegance and style.
              </p>
              <div className="space-x-4 flex justify-center">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 px-10 py-3 rounded-full text-white font-semibold shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </Link>
                <Link to="/shop">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg"
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Product Categories */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Our Collections
              </h2>
              <p className="text-gray-600">Carefully designed categories for your style.</p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
            >
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={category.img}
                    alt={category.title}
                    className="object-cover mx-auto border-2 border-black"
                    style={{ width: "300px", height: "500px" }}
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg mb-2 hover:text-pink-500 transition duration-200">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 hover:text-gray-800 transition duration-200">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
