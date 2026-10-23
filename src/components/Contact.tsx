"use client";

import { useState } from "react";

const services = [
  "Website Development",
  "E-Commerce",
  "Industry Solutions",
  "Custom Web Apps",
  "Business Automation",
  "UI/UX & Branding",
  "Hosting & Maintenance",
  "Other",
];

const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "Other"];
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];

export default function Contact() {
  const [country, setCountry] = useState("");
  const [showStates, setShowStates] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setShowStates(e.target.value === "India");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const service = data.get("service");
    const message = data.get("message");
    const state = data.get("state");
    const countryVal = data.get("country");

    const text = `Hi CODEWEB24! I'm interested in your services.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Country:* ${countryVal}${state ? `%0A*State:* ${state}` : ""}%0A*Service:* ${service}%0A*Message:* ${message}`;
    window.open(`https://wa.me/917567490201?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="section-label">Contact</span>
          <h2 className="section-heading mt-6 mx-auto max-w-2xl">Let&apos;s shape the next stage of your digital presence.</h2>
        </div>

        <div className="contact-panel mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block">Name</label>
                <input id="name" name="name" type="text" required className="form-field" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block">Email</label>
                <input id="email" name="email" type="email" required className="form-field" placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="country" className="mb-2 block">Country</label>
                <select id="country" name="country" value={country} onChange={handleCountryChange} required className="form-field">
                  <option value="" disabled>Select Country</option>
                  {countries.map((countryOption) => (
                    <option key={countryOption} value={countryOption}>
                      {countryOption}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block">Phone</label>
                <input id="phone" name="phone" type="tel" required className="form-field" placeholder="+91 9876543210" />
              </div>
            </div>

            {showStates && (
              <div>
                <label htmlFor="state" className="mb-2 block">State (India)</label>
                <select id="state" name="state" className="form-field">
                  <option value="" disabled>Select State (India)</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="service" className="mb-2 block">Service</label>
              <select id="service" name="service" required className="form-field" defaultValue="">
                <option value="" disabled>Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block">Message</label>
              <textarea id="message" name="message" rows={5} required className="form-field resize-none" placeholder="Tell us about your project..." />
            </div>

            <button type="submit" className="primary-btn w-full">
              Send to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
