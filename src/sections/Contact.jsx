import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                formRef.current.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "kushmody0710@gmail.com",
            link: "mailto:kushmody0710@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 7990857744",
            link: "tel:+917990857744"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Gujarat, India",
            link: "https://maps.google.com"
        }
    ];

    return (
        <div className="py-20 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden" id="contact">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c7ff00]/5 to-transparent pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionWrapper className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black font-[Outfit] uppercase mb-6 text-white text-center md:text-left">
                        Get <span className="text-[#c7ff00]">In Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-[Manrope] text-center md:text-left">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </SectionWrapper>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <SectionWrapper delay={0.2} className="space-y-8 order-2 lg:order-1">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 font-[Outfit]">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center p-6 rounded-2xl bg-[#141414]/50 backdrop-blur-sm border border-white/5 hover:border-[#c7ff00]/50 transition-all duration-300 group hover:translate-x-2"
                                    >
                                        <div className="mr-6 bg-white/5 p-4 rounded-xl group-hover:bg-[#c7ff00]/20 transition-colors">
                                            <item.icon size={24} className="text-[#c7ff00]" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400 mb-1 font-[Manrope]">
                                                {item.title}
                                            </div>
                                            <div className="text-lg font-bold text-white font-[Outfit]">
                                                {item.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c7ff00]/10 rounded-full blur-[50px] group-hover:bg-[#c7ff00]/20 transition-all duration-500" />
                            <h3 className="text-2xl font-bold mb-4 font-[Outfit] text-white relative z-10">
                                Let's Collaborate
                            </h3>
                            <p className="opacity-70 leading-relaxed text-gray-300 font-[Manrope] relative z-10">
                                I'm currently available for freelance work and open to full-time opportunities.
                                If you have a project that needs some creative touch, let's connect!
                            </p>
                        </div>
                    </SectionWrapper>

                    {/* Contact Form */}
                    <SectionWrapper delay={0.4} className="order-1 lg:order-2">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-[#141414]/30 backdrop-blur-md p-8 rounded-3xl border border-white/5 space-y-6 shadow-2xl relative"
                        >
                            {status && (
                                <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center rounded-3xl backdrop-blur-xl transition-all duration-500 ${status === 'success' ? 'bg-[#c7ff00]/10' : 'bg-red-900/10'}`}>
                                    <div className={`p-6 rounded-full mb-4 ${status === 'success' ? 'bg-[#c7ff00] text-black' : 'bg-red-500 text-white'}`}>
                                        {status === 'success' ? <CheckCircle size={40} /> : <XCircle size={40} />}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white font-[Outfit] mb-2">
                                        {status === 'success' ? 'Message Sent!' : 'Error Sending'}
                                    </h4>
                                    <p className="text-gray-300">
                                        {status === 'success' ? "I'll get back to you soon." : "Please try again later."}
                                    </p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 font-[Manrope] uppercase tracking-wider ml-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#c7ff00] focus:ring-1 focus:ring-[#c7ff00]/50 text-white outline-none transition-all placeholder:text-gray-700 font-[Manrope]"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 font-[Manrope] uppercase tracking-wider ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#c7ff00] focus:ring-1 focus:ring-[#c7ff00]/50 text-white outline-none transition-all placeholder:text-gray-700 font-[Manrope]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 font-[Manrope] uppercase tracking-wider ml-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#c7ff00] focus:ring-1 focus:ring-[#c7ff00]/50 text-white outline-none transition-all placeholder:text-gray-700 font-[Manrope]"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 font-[Manrope] uppercase tracking-wider ml-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-4 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-[#c7ff00] focus:ring-1 focus:ring-[#c7ff00]/50 text-white outline-none transition-all resize-none placeholder:text-gray-700 font-[Manrope]"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-[#c7ff00] text-black font-black text-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center uppercase tracking-widest shadow-[0_0_20px_rgba(199,255,0,0.2)] hover:shadow-[0_0_30px_rgba(199,255,0,0.4)]"
                            >
                                {loading ? (
                                    <Loader2 size={24} className="animate-spin" />
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </SectionWrapper>
                </div>
            </div>
        </div>
    );
};

export default Contact;
