import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const features = [
    {
      title: 'Smart Farming Solutions',
      description: 'Leverage technology to maximize your crop yield and profit',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800',
    },
    {
      title: 'Weather Intelligence',
      description: 'Make informed decisions with accurate weather forecasts',
      image: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800',
    },
    {
      title: 'Market Insights',
      description: 'Stay updated with real-time market prices and trends',
      image: 'https://images.unsplash.com/photo-1620200423727-8127f75d4f3e?auto=format&fit=crop&w=800',
    },
  ];

  const successStories = [
    {
      name: 'Rajesh Kumar',
      location: 'Punjab',
      story: 'Using the weather forecasts and market insights from Farmer\'s Assistant, I increased my wheat yield by 40% and got better prices for my crops.',
      image: 'https://images.unsplash.com/photo-1595457730090-5701c9e4da85?auto=format&fit=crop&w=800',
    },
    {
      name: 'Anita Patel',
      location: 'Gujarat',
      story: 'The crop guidance helped me diversify my farming. Now I grow multiple crops throughout the year, significantly improving my income.',
      image: 'https://images.unsplash.com/photo-1599123245877-eec0b8f0ff02?auto=format&fit=crop&w=800',
    },
    {
      name: 'Mohammed Siddiqui',
      location: 'Maharashtra',
      story: 'Thanks to the government scheme information, I received crucial support for irrigation. My farm\'s productivity has doubled since then.',
      image: 'https://images.unsplash.com/photo-1595457725928-affb1a34c32b?auto=format&fit=crop&w=800',
    },
  ];

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920',
      title: 'Empowering Farmers with Technology',
      description: 'Your complete farming companion providing weather forecasts, market prices, and agricultural guidance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920',
      title: 'Make Informed Decisions',
      description: 'Access real-time weather data and market insights to optimize your farming operations.',
    },
    {
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920',
      title: 'Grow Together',
      description: 'Join our community of successful farmers and share knowledge to prosper together.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <Link
                      to="/crop-guide"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Farmer's Assistant?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{story.name}</h3>
                      <p className="text-gray-600">{story.location}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-green-600 mb-4" />
                  <p className="text-gray-700">{story.story}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of farmers who are already benefiting from our platform
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/weather"
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Check Weather
          </Link>
          <Link
            to="/market-prices"
            className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors border-2 border-green-600 text-lg font-semibold"
          >
            View Market Prices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;