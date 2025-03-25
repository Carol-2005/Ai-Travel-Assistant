'use client';

import { useState } from 'react';
import { Search, Globe, Wind, Mountain, Navigation, Database, Bot, DollarSign, Zap } from 'lucide-react';

export default function Home() {
  const [destination, setDestination] = useState('');
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white" 
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 leading-tight">
                AI-Powered <br />
                <span className="text-blue-500">Travel Assistant</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-lg">
                Your intelligent travel companion that plans personalized trips based on your preferences, budget, and destination.
                We provide a seamless experience.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Where would you like to go?"
                    className="w-full px-6 py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <Search className="absolute right-4 top-4 text-blue-500" />
                </div>
                <button 
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => setShowFeatures(true)}
                >
                  Plan My Trip
                </button>
              </div>
              
              <div className="mt-8 flex items-center text-gray-600">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 border-2 border-white flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="ml-4">Join 10,000+ travelers planning smarter trips</p>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                  <Globe className="w-32 h-32 md:w-40 md:h-40 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-400 rounded-full opacity-70 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600">Discover what makes our AI Travel Assistant extraordinary</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Personalized Itinerary Planner</h3>
              <p className="text-gray-600">
                Generate custom travel plans based on your budget, duration, and season preferences. Prioritize experiences and discover hidden gems.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Real-Time Weather Integration</h3>
              <p className="text-gray-600">
                Get real-time weather updates for any destination and weather-based packing recommendations for your trip.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Activity & Gear Suggestions</h3>
              <p className="text-gray-600">
                Receive recommendations for gear, clothing, and safety tips based on your activities and destination climate.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">AI-Powered Intent Classification</h3>
              <p className="text-gray-600">
                Our AI detects your travel intent and directs your queries to specialized sub-agents for the best recommendations.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">RAG-Based Information Retrieval</h3>
              <p className="text-gray-600">
                Access deep contextual insights from our vector store of travel guides, blogs, and tips using advanced similarity searching.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Conversational AI Chatbot</h3>
              <p className="text-gray-600">
                Engage in natural conversations to get route suggestions, transportation options, and local cuisine recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-b from-indigo-100 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">Planning your perfect trip in just a few steps</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6">1</div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Tell Us Your Preferences</h3>
              <p className="text-gray-600">
                Share your destination, budget, trip duration, and what experiences matter most to you.
              </p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block text-blue-300">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6">2</div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Our AI Gets to Work</h3>
              <p className="text-gray-600">
                Advanced algorithms analyze thousands of options to create your personalized itinerary.
              </p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block text-blue-300">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6">3</div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Enjoy Your Perfect Trip</h3>
              <p className="text-gray-600">
                Receive your detailed itinerary with real-time updates and recommendations throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of travelers who are discovering the world with our AI-powered assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
              Start Planning Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900">Powered By Cutting-Edge Tech</h2>
            <p className="mt-4 text-xl text-gray-600">Our stack combines the latest technologies for a seamless experience</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">Next.js & React</h3>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">Python & FastAPI</h3>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">MongoDB & PostgreSQL</h3>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">GPT-4 & LangChain</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Future Enhancements Section */}
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900">Coming Soon</h2>
            <p className="mt-4 text-xl text-gray-600">Exciting new features on our roadmap</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Flight & Hotel Bookings</h3>
              <p className="text-gray-600">
                Seamlessly book your flights and accommodations directly through our platform with real-time pricing.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Voice-Enabled Assistant</h3>
              <p className="text-gray-600">
                Plan your trips hands-free with our intelligent voice-enabled AI assistant.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">AI Packing List Generator</h3>
              <p className="text-gray-600">
                Never forget essential items with our smart packing list customized to your specific trip.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">AI Travel Assistant</h3>
              <p className="text-indigo-200 max-w-xs">
                Your intelligent companion for planning the perfect travel experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-indigo-200">
                  <li>Itinerary Planner</li>
                  <li>Weather Integration</li>
                  <li>Gear Suggestions</li>
                  <li>Budget Optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-indigo-200">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-indigo-200">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-300">© 2025 AI Travel Assistant. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Trial Modal */}
      {showFeatures && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowFeatures(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Your Destination Awaits!</h3>
            <p className="text-gray-600 mb-6">
              Enter your email to start planning your trip to <span className="font-semibold">{destination || "your dream destination"}</span>.
            </p>
            
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            
            <button 
              className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setShowFeatures(false)}
            >
              Get Started
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}