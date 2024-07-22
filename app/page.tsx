"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import ContactForm from '@/app/ui/contactform';
import Image from 'next/image';

export default function Page() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const openContactForm = () => setContactFormVisible(true);
  const closeContactForm = () => setContactFormVisible(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-auto">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-bold">AR-Source Software</h1>
          <Link href="/login" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700">Login</a>
          </Link>
        </div>
      </header>

      <section className="mt-20 flex flex-col items-center">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <h2 className="text-4xl font-bold text-white">Welcome to AR-Source Software</h2>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2">
            <li>Cloud Migration Services</li>
            <li>Custom Software Development</li>
            <li>E-Commerce Solutions</li>
            <li>EDI Integration</li>
            <li>Web Design & Development</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold">Our Software</h3>
          <ul className="mt-4 space-y-2">
            <li>Customer Relations Management Software</li>
            <li>EDI Processing and Communication</li>
            <li>Generate Shipping Labels and Track Packages</li>
            <li>GPS Tracking & Google Maps Integration</li>
            <li>Human Relations Management Software</li>
            <li>Warehousing and Inventory Software</li>
          </ul>
        </div>
        <button
          onClick={openContactForm}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Open Contact Form
        </button>
      </section>
      {isContactFormVisible && (
        <ContactForm onClose={closeContactForm} />
      )}
    </main>
  );
}
