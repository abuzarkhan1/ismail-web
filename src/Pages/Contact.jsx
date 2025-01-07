import React from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
              ></textarea>
            </div>
            <button className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;