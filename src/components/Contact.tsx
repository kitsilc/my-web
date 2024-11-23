import React from 'react';
import { Mail, Globe2, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-blue-400 mr-4 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">edmond07@hku.hk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe2 className="text-blue-400 mr-4 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">Room 18, 4/F, Academic building</p>
                  <p className="text-lg">No.3 Sassoon Road, Pokfulam</p>
                  <p className="text-lg">Hong Kong</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-400 mr-4 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">(852)-39176632</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;