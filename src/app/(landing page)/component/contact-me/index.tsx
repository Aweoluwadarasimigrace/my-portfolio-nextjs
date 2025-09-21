
"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { toast } from "sonner";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mkgvllnj");

  // controlled inputs
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // when succeeded, clear inputs + show toast
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setFormValues({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#f9fafb] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Hire <span className="text-amber-500">Me</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 my-4"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* box-left */}
            <div className="bg-gray-900 text-white p-8 md:p-12">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold mb-4 text-2xl">
                    LET'S WORK TOGETHER, TEXT ME
                  </h3>
                  <p className="text-gray-300 mb-7 text-lg">
                    Need my help on a project? Send me a message and I’ll
                    respond as soon as possible.
                  </p>

                  <div className="flex items-center gap-3">
                    <MdMailOutline className="text-yellow-600 text-xl mb-2" />
                    <Link href="mailto:darasimigrace123@icloud.com">
                      darasimigrace123@icloud.com
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-3 text-lg">
                    Need to reach me urgently?
                  </p>
                  <button className="bg-green-600 text-white rounded-md py-2 px-7">
                    <Link
                      href="tel:+2348139130040"
                      className="flex items-center gap-1"
                    >
                      <FaWhatsapp /> Text me on WhatsApp
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* box-right */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-all duration-300"
                  >
                    {state.submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
