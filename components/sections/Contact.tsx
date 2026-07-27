"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Whether you're ordering mangoes for your family or
            buying in bulk, we'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <Phone className="text-green-700" />
              <span>+880 18XXXXXXXX</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-green-700" />
              <span>safarahmed1177@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-green-700" />
              <span>Rajshahi, Bangladesh</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <form className="space-y-6 rounded-3xl border bg-[#FFFDF8] p-8 shadow">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
          />

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-xl border p-4 outline-none focus:border-green-700"
          />

          <button
            className="rounded-full bg-green-700 px-8 py-4 text-white transition hover:bg-green-800"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}