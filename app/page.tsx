"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/app/ui/contactform';
import '@/app/ui/background.css';

export default function Page() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openContactForm = () => setContactFormVisible(true);
  const closeContactForm = () => setContactFormVisible(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const repeatedListItems = Array.from({ length: 50 }, (_, index) => <li key={index}></li>);

  return (
    <>
      <ul className="background">
        {repeatedListItems}
      </ul>

      <main className="min-h-screen flex flex-col items-center justify-center z-0 overflow-auto ml-10 mr-10">

        <header className="fixed top-0 left-0 right-0 z-50 bg-[#26394e] text-white shadow">
          <div className="relative flex items-center justify-between p-2">
            {/* Hamburger Icon */}
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
              <button onClick={openContactForm} className="font-bold hover:text-white text-[#eb3c00] flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Contact Us
              </button>
              <Link href="/login" legacyBehavior>
                <a className="font-bold hover:text-white text-[#eb3c00] flex items-center">
                  <ArrowRightCircleIcon className="h-5 w-5 mr-2" />
                  Login
                </a>
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
                  className="font-bold hover:text-white text-[#eb3c00] flex items-center"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Contact Us
                </button>
                <Link href="/login" legacyBehavior>
                  <a className="font-bold hover:text-white text-[#eb3c00] flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <ArrowRightCircleIcon className="h-5 w-5 mr-2" />
                    Login
                  </a>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold hover:text-white text-[#eb3c00] flex items-center"
                >
                  <XMarkIcon className="h-5 w-5 mr-2" />
                  Close Menu
                </button>
              </div>
            </div>
          )}
        </header>

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-20">
          {/* Image with rounded corners */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg z-0">
            <Image
              src="/images/website/support1.jpg"
              alt="AR-Source Support"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
          {/* Text positioned at the top right of the image with a semi-transparent background on mobile */}
          <div className="absolute top-0 right-0 md:p-10 p-4 z-10 bg-black bg-opacity-80 md:bg-transparent rounded-lg">
            <h2 className="text-4xl font-bold text-right text-white">Streamline Your Digital Transformation</h2>
            <p className="text-2xl mt-4 font-semibold text-right text-white">With Our Suite Of Cloud-Based Software</p>
          </div>
        </section>

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-20">
          {/* Image with rounded corners */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg z-0">
            <Image
              src="/images/website/process2-2.jpg"
              alt="AR-Source Process"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
          {/* Text positioned centrally with an opaque background */}
          <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
            <div className="bg-[#26394e] bg-opacity-80 rounded-lg p-6 md:p-10">
              <h2 className="text-4xl font-bold text-white text-center">Work with an expert team to</h2>
              <h2 className="text-4xl font-bold text-white text-center">accomplish your business goals</h2>

              <hr className="my-4 border-t border-[#eb3c00]" />
              <p className="text-2xl text-white font-semibold text-center">
                Our process will swiftly transforms your concept into a
              </p>
              <p className="text-2xl text-white font-semibold text-center">
                Minimum Viable Product (MVP), laying the groundwork for success
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-20 px-4 pb-20">
          <div className="w-full max-w-4xl bg-[#26394e] shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center text-white">Services</h3>
            <hr className="my-4 border-t border-[#eb3c00]" />
            <ul className="space-y-2 text-center">
              <li className="text-white font-semibold">Cloud Migration Services</li>
              <li className="text-white font-semibold">Custom Software Development</li>
              <li className="text-white font-semibold">E-Commerce Solutions</li>
              <li className="text-white font-semibold">EDI Integration</li>
              <li className="text-white font-semibold">Shipping Label Generation and Package Tracking</li>
              <li className="text-white font-semibold">Web Design & Development</li>
            </ul>
          </div>

          <div className="w-full max-w-4xl bg-[#26394e] shadow-lg rounded-lg p-6 mt-10">
            <h3 className="text-2xl font-bold text-center text-white">Software Suite</h3>
            <hr className="my-4 border-t border-[#eb3c00]" />
            <ul className="space-y-2 text-center">
              <li className="text-white font-semibold">Customer Relations Management</li>
              <li className="text-white font-semibold">EDI Processing and Communication</li>
              <li className="text-white font-semibold">GPS Tracking & Google Maps Integration</li>
              <li className="text-white font-semibold">Human Relations Management</li>
              <li className="text-white font-semibold">Warehousing and Inventory Management</li>
            </ul>
          </div>

          <button onClick={openContactForm} className="p-2 bg-[#26394e] text-white rounded-md mt-10 flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contact Us
          </button>
        </section>

        {/* Moving Background Images where things like services will appear over it */}
        <ul className="background">
          {repeatedListItems}
        </ul>

        {isContactFormVisible && (
          <ContactForm onClose={closeContactForm} />
        )}
      </main>
    </>
  );
}
