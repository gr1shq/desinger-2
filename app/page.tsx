'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projects = [
    { id: 1, title: 'Neon Branding', image: '/images/project1.jpg' },
    { id: 2, title: 'Cyber Poster', image: '/images/project2.webp' },
    { id: 3, title: 'Futuristic UI', image: '/images/project3.webp' },
  ];

  const socials = [
    { icon: <FaBehance size={24} />, href: 'https://www.behance.net', label: 'Behance' },
    { icon: <FaDribbble size={24} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! (Placeholder)');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero */}
      <motion.section
        id="hero"
        className="h-screen flex items-center justify-center bg-black font-orbitron px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="/images/logo.png"
              alt="Alex Harper Logo"
              width={150}
              height={150}
              className="mx-auto animate-float"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 animate-glitch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Alex Harper
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Designing bold, futuristic visuals.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="h-screen flex items-center justify-center bg-black font-orbitron px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-cyan-400 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative h-48"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.id * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded animate-glitch">
                  {project.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="h-screen flex items-center justify-center bg-black font-orbitron px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-cyan-400 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 bg-black border border-cyan-400 text-white rounded-lg focus:neon-glow"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 bg-black border border-cyan-400 text-white rounded-lg focus:neon-glow"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-2 bg-black border border-cyan-400 text-white rounded-lg focus:neon-glow h-32 resize-y"
              required
            />
            <motion.button
              type="submit"
              className="w-full px-6 py-2 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}