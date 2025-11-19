
import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');
    const [showToast, setShowToast] = useState(false);
    const myEmail = "nemesis@dev.null";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus('Message Sent!');
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setStatus(''), 2000);
        }, 1500);
    };
    
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(myEmail);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    }

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-cyan-400">
                    <span className="font-mono">&lt;</span>Get In Touch<span className="font-mono"> /&gt;</span>
                </h2>
                <div className="max-w-3xl mx-auto glassmorphism p-8 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" name="name" required className="w-full bg-gray-800 border-2 border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:border-cyan-400 transition-colors" />
                            <input type="email" placeholder="Your Email" name="email" required className="w-full bg-gray-800 border-2 border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:border-cyan-400 transition-colors" />
                        </div>
                        <textarea placeholder="Your Message" name="message" rows={5} required className="w-full bg-gray-800 border-2 border-gray-700 rounded-md py-3 px-4 mb-6 focus:outline-none focus:border-cyan-400 transition-colors"></textarea>
                        <div className="text-center">
                            <button type="submit" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-cyan-500 border-2 border-cyan-500 rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:border-cyan-400 disabled:opacity-50 hover-btn-glow" disabled={status.includes('Sending')}>
                                {status || 'Send Message'}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-12">
                        <p className="mb-4">Or reach out directly:</p>
                        <button onClick={copyEmailToClipboard} className="font-mono text-cyan-400 transition-all duration-300 hover-text-glow">{myEmail}</button>
                        <div className="flex justify-center gap-6 mt-6">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover-text-glow"><GithubIcon className="w-8 h-8" /></a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover-text-glow"><LinkedinIcon className="w-8 h-8" /></a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover-text-glow"><TwitterIcon className="w-8 h-8" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
                <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
                    Email copied to clipboard!
                </div>
            )}
        </section>
    );
};

export default Contact;
