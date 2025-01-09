import React, { ReactNode } from 'react';
import { Monitor, Server, Shield, Users, MessageSquare, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface StatProps {
  number: string;
  label: string;
}

const Website = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Under Construction Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <p className="text-center text-yellow-800 font-medium">
            🚧 Website Under Construction - Please Check Back Soon 🚧
          </p>
        </div>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Kayes IT Consulting</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with Expert IT Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional IT consulting services tailored to your needs
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Monitor className="w-12 h-12 text-blue-600" />}
              title="IT Infrastructure"
              description="Optimize your IT infrastructure for maximum efficiency and reliability"
            />
            <ServiceCard 
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Cybersecurity"
              description="Protect your business with comprehensive security solutions"
            />
            <ServiceCard 
              icon={<Server className="w-12 h-12 text-blue-600" />}
              title="Cloud Solutions"
              description="Transform your business with scalable cloud computing services"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <Feature 
                  icon={<Users className="w-6 h-6 text-blue-600" />}
                  title="Expert Team"
                  description="Our certified professionals bring years of industry experience"
                />
                <Feature 
                  icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
                  title="Dedicated Support"
                  description="24/7 support to ensure your systems run smoothly"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
              <div className="space-y-4">
                <Stat number="200+" label="Clients Served" />
                <Stat number="98%" label="Client Satisfaction" />
                <Stat number="15+" label="Years Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">Ready to transform your IT infrastructure?</p>
          </div>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kayes IT Consulting</h3>
              <p className="text-gray-400">Transforming businesses through technology</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">imrul@sbcglobal.net</p>
              <p className="text-gray-400">+1 (213) 309-1732</p>
              <p className="text-gray-400">659 Orchid Dr.</p>
              <p className="text-gray-400">South San Francisco, CA 94080</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kayes IT Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for service cards
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <button className="mt-4 text-blue-600 flex items-center justify-center w-full">
      Learn More <ArrowRight className="w-4 h-4 ml-2" />
    </button>
  </div>
);

// Component for features
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for statistics
const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-600 mb-1">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default Website;