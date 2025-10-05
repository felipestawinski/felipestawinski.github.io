'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900  transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">Get In Touch</h2>
          <div className="w-20 h-1 bg-violet-600 dark:bg-violet-600 mx-auto mb-4 transition-colors duration-300"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-blue-600 dark:text-blue-400 text-xl transition-colors duration-300">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Email</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">felipe.stawinski@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-blue-600 dark:text-blue-400 text-xl transition-colors duration-300">💼</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">linkedin.com/in/felipe-stawinski-suzuki-654002238</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                  <span className="text-blue-600 dark:text-blue-400 text-xl transition-colors duration-300">🐙</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">github.com/felipestawinski</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;