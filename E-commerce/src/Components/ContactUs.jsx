import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactUs = () => {

    useEffect(() => {
        gsap.from(".contact-animate", {
            opacity: 0,
            y: 60,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
        });
        gsap.from("#submitBtn", {
            opacity: 0,
            scale: 0,
            duration: 1,

        });
    });

    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 pt-20 pb-20 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-emerald-300/30 blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-emerald-400/20 blur-[120px]" />

            {/* Container */}
            <div className="relative z-10 max-w-5xl w-full mt-10 grid md:grid-cols-2 gap-12 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-10">

                {/* LEFT CONTENT */}
                <div>
                    <p className="contact-animate text-cyan-600 font-semibold tracking-widest uppercase mb-4">
                        Contact Us
                    </p>

                    <h1 className="contact-animate text-5xl uppercase  font-extrabold bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text text-transparent ">Contact Ecart</h1>

                    <p className="contact-animate mt-6 text-gray-600 text-lg leading-relaxed">
                        Have a question about our products, orders, or anything else?
                        Our team is always ready to help you.
                    </p>

                    <div className="contact-animate mt-8 space-y-4 text-gray-700">
                        <p>📍 Ranchi, Jharkhand</p>
                        <p>📧 support@ecart.com</p>
                        <p>📞 +91 91536 16643</p>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="contact-animate w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="contact-animate w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="contact-animate w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    />

                    <button
                        type="submit"
                        id='submitBtn'
                        className=" w-full py-4 rounded-xl bg-cyan-500 text-white font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
