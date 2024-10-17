'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, ChevronDown, Facebook, Twitter, Instagram, Send, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="text-center">
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f] dark:text-white">{title}</h3>
      <p className="text-[#86868b] dark:text-[#a1a1a6]">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
}

function TestimonialCard({ quote, author, company, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-lg shadow-lg">
      <p className="text-[#1d1d1f] dark:text-white mb-4 italic">&quot;{quote}&quot;</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={imageUrl}
            alt={author}
            width={48}
            height={48}
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-semibold text-[#1d1d1f] dark:text-white">{author}</p>
          <p className="text-[#86868b] dark:text-[#a1a1a6]">{company}</p>
        </div>
      </div>
    </div>
  )
}

export function EnhancedLandingPageWithSocial() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactMethod, setContactMethod] = useState<string>('email')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted')
  }

  if (!mounted) return null

  return (
    <div className="bg-white dark:bg-[#0d0d0d] min-h-screen font-sans text-[#1d1d1f] dark:text-white">
      <header className="bg-[#fbfbfd] dark:bg-[#1c1c1e] backdrop-blur-md bg-opacity-70 fixed w-full z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="Alissoft Logo" width={40} height={40} />
              <span className="text-2xl font-semibold ml-2">Alissoft</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-[#06c]">Services</a>
              <a href="#featured-project" className="hover:text-[#06c]">Featured Project</a>
              <a href="#testimonials" className="hover:text-[#06c]">Testimonials</a>
              <a href="#faq" className="hover:text-[#06c]">FAQ</a>
              <a href="#contact" className="hover:text-[#06c]">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#1c1c1e] px-6 py-4">
            <a href="#services" className="block py-2 hover:text-[#06c]">Services</a>
            <a href="#featured-project" className="block py-2 hover:text-[#06c]">Featured Project</a>
            <a href="#testimonials" className="block py-2 hover:text-[#06c]">Testimonials</a>
            <a href="#faq" className="block py-2 hover:text-[#06c]">FAQ</a>
            <a href="#contact" className="block py-2 hover:text-[#06c]">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="bg-[#fbfbfd] dark:bg-[#1c1c1e] py-24 text-center relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1656998019079-a7f9182c12be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Digital world map"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-7xl font-semibold mb-4">Innovate. Create. Succeed.</h1>
            <p className="text-xl mb-8">Empowering businesses with cutting-edge software solutions.</p>
            <a href="#contact" className="inline-flex items-center text-[#06c] hover:underline">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-16 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <ServiceCard
                title="Custom Application Development"
                description="Bespoke solutions tailored to your specific business needs."
                imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <ServiceCard
                title="Mobile App Development"
                description="Reach your audience on-the-go with intuitive iOS and Android apps."
                imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <ServiceCard
                title="UI/UX Design"
                description="Create engaging user experiences that delight your customers."
                imageUrl="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <ServiceCard
                title="Consultation Services"
                description="Strategic guidance to help you achieve your digital goals."
                imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#fbfbfd] dark:bg-[#1c1c1e] py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with businesses of all sizes across various industries. Our clients range from startups to large enterprises in fields such as healthcare, finance, e-commerce, and more."
                },
                {
                  question: "How long does it typically take to develop a custom application?",
                  answer: "The timeline for custom application development can vary depending on the complexity and scope of the project. On average, a medium-sized project might take 3-6 months from concept to launch. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you provide ongoing support after the app is launched?",
                  answer: "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, updates, and continuous improvements to ensure your application remains secure and up-to-date."
                },
                {
                  question: "Can you work with our existing systems and integrate new solutions?",
                  answer: "Absolutely. We have extensive experience in integrating new solutions with existing systems. Our team is skilled in creating seamless connections between different platforms and technologies."
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold  hover:text-[#06c]"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <p className="mt-2 text-[#86868b] dark:text-[#a1a1a6]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold mb-16 text-center">Get in Touch</h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="contact-method" className="block text-sm font-medium mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="contact-method"
                  className="w-full px-4 py-3 border-b border-[#86868b] dark:border-[#a1a1a6] focus:border-[#06c] focus:outline-none transition-colors bg-white dark:bg-[#1c1c1e]"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full mb-6 px-4 py-3 border-b border-[#86868b] dark:border-[#a1a1a6] focus:border-[#06c] focus:outline-none transition-colors bg-white dark:bg-[#1c1c1e]" 
              />
              {contactMethod === 'email' && (
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full mb-6 px-4 py-3 border-b border-[#86868b] dark:border-[#a1a1a6] focus:border-[#06c] focus:outline-none transition-colors bg-white dark:bg-[#1c1c1e]" 
                />
              )}
              {(contactMethod === 'phone' || contactMethod === 'whatsapp') && (
                <input 
                  type="tel" 
                  placeholder={`Your ${contactMethod === 'whatsapp' ? 'WhatsApp' : 'Phone'} Number`}
                  className="w-full mb-6 px-4 py-3 border-b border-[#86868b] dark:border-[#a1a1a6] focus:border-[#06c] focus:outline-none transition-colors bg-white dark:bg-[#1c1c1e]" 
                />
              )}
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="w-full mb-6 px-4 py-3 border-b border-[#86868b] dark:border-[#a1a1a6] focus:border-[#06c] focus:outline-none transition-colors bg-white dark:bg-[#1c1c1e]"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#06c] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#007aff] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f5f7] dark:bg-[#1c1c1e] py-12 text-[#86868b] dark:text-[#a1a1a6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#1d1d1f] dark:text-white font-semibold mb-4">About Alissoft</h3>
              <p>We craft cutting-edge applications that drive business growth and innovation.</p>
            </div>
            <div>
              <h3 className="text-[#1d1d1f] dark:text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-[#06c]">Services</a></li>
                <li><a href="#featured-project" className="hover:text-[#06c]">Featured Project</a></li>
                <li><a href="#testimonials" className="hover:text-[#06c]">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-[#06c]">FAQ</a></li>
                <li><a href="#contact" className="hover:text-[#06c]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#1d1d1f] dark:text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#06c]" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-[#06c]" aria-label="Twitter">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-[#06c]" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-[#06c]" aria-label="WhatsApp">
                  <Send />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
            <p>&copy; 2023 Alissoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}