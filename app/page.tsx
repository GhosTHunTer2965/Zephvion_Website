"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-500 tracking-tight">ACONITE</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-sm font-medium hover:text-purple-400 transition-colors duration-200">Portfolio</a>
            <a href="#services" className="text-sm font-medium hover:text-purple-400 transition-colors duration-200">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-purple-400 transition-colors duration-200">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="hidden lg:flex items-center gap-2 text-sm hover:text-purple-400 transition-colors duration-200">
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:hello@aconite.io" className="hidden md:flex items-center gap-2 text-sm hover:text-purple-400 transition-colors duration-200">
              <Mail size={16} />
              <span>hello@aconite.io</span>
            </a>
          </div>
        </div>
      </header>

      <section className={`max-w-7xl mx-auto px-6 py-20 md:py-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Plan. Design.<br />Build. Maintain.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Your comprehensive tech partner from concept to deployment. We transform ideas into scalable digital solutions with precision and excellence.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40">
              Book Discovery Call
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-blue-900/20 rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="text-center relative z-10 transform group-hover:scale-110 transition-transform duration-500">
              <div className="text-7xl mb-4 animate-pulse">💻</div>
              <p className="text-gray-300 text-lg font-medium">Technical Excellence</p>
            </div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Service Approach</h2>
          <p className="text-gray-400 text-lg md:text-xl">Excellence in every aspect of development</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "⚖️", title: "Balanced Service Approach", desc: "We balance speed, quality, and cost to deliver optimal results for your business needs." },
            { icon: "💬", title: "Transparent Communication", desc: "Clear, honest communication at every stage keeps you informed and in control." },
            { icon: "📈", title: "Fully Scalable Teams", desc: "Our flexible team structure adapts to your project's evolving requirements." },
            { icon: "✨", title: "Relentless Quality", desc: "We maintain the highest standards through rigorous testing and code reviews." }
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-900/50 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg md:text-xl">Excellence delivered across diverse industries</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              gradient: "from-blue-900/40 to-purple-900/40",
              icon: "📊",
              title: "Syncorp",
              subtitle: "Sales Software Platform",
              industry: "SaaS",
              duration: "6 months",
              services: "Full-stack development, UX/UI design",
              desc: "Comprehensive sales management platform with real-time analytics and team collaboration features."
            },
            {
              gradient: "from-green-900/40 to-teal-900/40",
              icon: "🚀",
              title: "VanguardTech",
              subtitle: "Technology Website",
              industry: "Technology",
              duration: "3 months",
              services: "Web development, Branding",
              desc: "Modern, responsive website showcasing cutting-edge technology solutions and services."
            },
            {
              gradient: "from-orange-900/40 to-red-900/40",
              icon: "📱",
              title: "Resolve",
              subtitle: "Mobile Application",
              industry: "Productivity",
              duration: "4 months",
              services: "Mobile app development, API integration",
              desc: "Feature-rich mobile app for task management and team productivity optimization."
            }
          ].map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  <div className="relative z-10 group-hover:scale-125 transition-transform duration-500">{project.icon}</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-purple-400 text-sm font-medium">{project.subtitle}</p>
                  <div className="space-y-2 text-sm text-gray-400 border-t border-gray-800 pt-3">
                    <p><span className="text-white font-medium">Industry:</span> {project.industry}</p>
                    <p><span className="text-white font-medium">Duration:</span> {project.duration}</p>
                    <p><span className="text-white font-medium">Services:</span> {project.services}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed pt-2">
                    {project.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-transparent via-purple-950/5 to-transparent fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-400 text-lg md:text-xl">Modern tools for modern solutions</p>
        </div>
        <div className="relative pause-marquee">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 px-4">
                {[
                  { name: "Express.js", icon: "🟢" },
                  { name: "TypeScript", icon: "🔷" },
                  { name: "Node.js", icon: "🟩" },
                  { name: "React.js", icon: "⚛️" },
                  { name: "Figma", icon: "🎨" },
                  { name: "Shopify", icon: "🛍️" },
                  { name: "Next.js", icon: "▲" },
                  { name: "Vercel", icon: "△" },
                  { name: "Tailwind CSS", icon: "💨" },
                  { name: "Firebase", icon: "🔥" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-8 bg-gray-900/80 border border-gray-800 rounded-xl hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 min-w-[160px] backdrop-blur-sm group"
                  >
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                    <p className="text-sm text-gray-300 text-center font-medium whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-400 text-lg md:text-xl">Expert developers and designers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Alex Thompson", role: "Lead Developer", emoji: "👨‍💻" },
            { name: "Sarah Chen", role: "UX/UI Designer", emoji: "👩‍🎨" },
            { name: "Michael Roberts", role: "Project Manager", emoji: "👨‍💼" },
          ].map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-900/50 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-300">{member.emoji}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{member.name}</h3>
                <p className="text-purple-400 font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 fade-in-section opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 text-lg md:text-xl">Trusted by industry leaders</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stars: "★★★★★",
              quote: "Aconite transformed our vision into reality. Their technical expertise and dedication to quality are unmatched.",
              name: "John Martinez",
              role: "CEO, Syncorp"
            },
            {
              stars: "★★★★★",
              quote: "Outstanding work from start to finish. The team's professionalism and technical skills exceeded our expectations.",
              name: "Emily Watson",
              role: "CTO, VanguardTech"
            },
            {
              stars: "★★★★★",
              quote: "A true partnership. Aconite delivered a product that perfectly aligns with our business goals and user needs.",
              name: "David Kim",
              role: "Founder, Resolve"
            }
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-900/50 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="text-yellow-400 text-3xl">{testimonial.stars}</div>
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="font-bold text-lg group-hover:text-purple-400 transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-purple-400 font-medium">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-500 tracking-tight">ACONITE</h3>
              <p className="text-gray-400 leading-relaxed">
                Your comprehensive tech partner for digital excellence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Web Development</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">UX/UI Design</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block hover:translate-x-1">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-200 hover:scale-125">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-200 hover:scale-125">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-200 hover:scale-125">
                  <Facebook size={24} />
                </a>
              </div>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-purple-400 transition-colors cursor-pointer">hello@aconite.io</p>
                <p className="hover:text-purple-400 transition-colors cursor-pointer">+1 (234) 567-890</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aconite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
