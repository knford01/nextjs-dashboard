"use client";

import { useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/app/ui/contactform';

export default function Page() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openContactForm = () => setContactFormVisible(true);
  const closeContactForm = () => setContactFormVisible(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-auto">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#26394e] text-white shadow">
        <div className="relative flex items-center justify-between p-4">
          {/* Hamburger Icon (always visible on mobile) */}
          <button
            className="md:hidden p-2 text-[#eb3c00] hover:text-white absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Centered Title */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-white">AR-Source Software</h1>
            <hr className="my-2 border-t border-[#eb3c00] mx-auto" style={{ maxWidth: '15%' }} />
            <span className="text-lg italic text-white">Our Source For Software</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2">
            <button onClick={openContactForm} className="font-bold hover:text-white text-[#eb3c00]">Contact Us</button>
            <Link href="/login" legacyBehavior>
              <a className="font-bold hover:text-white text-[#eb3c00]">Login</a>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bg-[#26394e] text-white p-4 md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => {
                  openContactForm();
                  setMobileMenuOpen(false);
                }}
                className="font-bold hover:text-white text-[#eb3c00]"
              >
                Contact Us
              </button>
              <Link href="/login" legacyBehavior>
                <a className="font-bold hover:text-white text-[#eb3c00]" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </a>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold hover:text-white text-[#eb3c00]"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="mt-20 flex flex-col items-center">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <h2 className="text-4xl font-bold text-white">Welcome to AR-Source Software</h2>
        </div>

        <button onClick={openContactForm} className="p-2 bg-blue-500 text-white rounded-md mt-4">
          Contact Us
        </button>
      </section>
      {isContactFormVisible && (
        <ContactForm onClose={closeContactForm} />
      )}
    </main>
  );
}
