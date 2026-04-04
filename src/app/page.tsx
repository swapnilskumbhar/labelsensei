"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, ShieldCheck, Zap, ArrowRight, Eye, Smartphone, Apple, Droplet, CheckCircle } from "lucide-react";
import React, { useState } from "react";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"food" | "hygiene">("food");

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-12 text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 sm:px-12 py-4 z-50 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl text-white tracking-wide">
          <span className="w-3 h-3 rounded-full bg-accent-green animate-pulse"></span>
          LabelSensei AI
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#logic" className="hover:text-primary transition-colors">Logic</a>
          <a href="#sample" className="hover:text-primary transition-colors">Live Sample</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
        </div>
      </nav>
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative px-6 py-20 text-center flex flex-col items-center justify-center min-h-[90vh] pt-32">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8 text-sm text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            LabelSensei AI
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white text-balance leading-tight">
            Protecting you, <br/> <span className="text-primary italic">one scan</span> at a time.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Send a photo of any grocery, personal care ingredient, or prepared meal to LabelSensei on WhatsApp. Get a blunt health verdict in seconds.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/919325835971" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 text-lg w-full sm:w-auto justify-center">
              <MessageCircle className="w-6 h-6" />
              Start Your First Inspection
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. The 3-Step Master (How It Works) */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The 3-Step Master</h2>
            <p className="text-slate-400 text-lg">Know the risks. Choose better.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "1. Snap", desc: "Take a clear photo of any product label or ingredients list.", icon: <Smartphone className="w-8 h-8 text-primary" /> },
              { title: "2. Send", desc: "Message the image to the LabelSensei WhatsApp bot.", icon: <ArrowRight className="w-8 h-8 text-primary" /> },
              { title: "3. See", desc: "Receive an instant Rating (1-10) and a Sensei's Verdict.", icon: <Eye className="w-8 h-8 text-accent-green" /> }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-slate-800/40 border border-slate-700/50 hidden:opacity-0 p-8 rounded-2xl hover:bg-slate-800/60 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-slate-900/80 flex items-center justify-center mb-6 shadow-inner border border-slate-700/50">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Contextual Logic */}
      <section id="logic" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dual Intelligence Logic</h2>
            <p className="text-slate-400 text-lg">Tailored analysis for what goes in you, and what goes on you.</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 p-1 rounded-full border border-slate-700/50 inline-flex">
              <button 
                onClick={() => setActiveTab("food")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === "food" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
              >
                <Apple className="w-5 h-5" /> Food & Consumables
              </button>
              <button 
                onClick={() => setActiveTab("hygiene")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === "hygiene" ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
              >
                <Droplet className="w-5 h-5" /> Personal Care
              </button>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto overflow-hidden relative"
          >
            {activeTab === "food" ? (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Food Analysis Logic</h3>
                <ul className="space-y-4">
                  {[
                    "Detection of hidden sugars & alternative sweeteners",
                    "Identification of Ultra-Processed Foods (UPFs)",
                    "Flagging harmful additives, preservatives, & artificial colors",
                    "Macro-level nutritional red flags"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Hygiene Analysis Logic</h3>
                <ul className="space-y-4">
                  {[
                    "Detection of endocrine disruptors (e.g., Phthalates)",
                    "Flagging harsh sulfates & chemical irritants",
                    "Identification of Parabens and controversial preservatives",
                    "Analysis of 'Fragrance' loopholes & allergens"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 4. Live Sample WhatsApp Mockup */}
      <section id="sample" className="py-24 px-6 bg-slate-900/80 border-t border-slate-800/50 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Blunt Honesty.<br/>Instantly delivered.</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
              No marketing fluff. Just the chemical facts. We break down complex ingredient lists into an easy-to-understand verdict.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                <span className="text-accent-red font-bold">1-3</span>
              </div>
              <span className="text-slate-300">Alert</span>
              
              <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center border border-gray-500/30 ml-4">
                <span className="text-gray-400 font-bold">4-7</span>
              </div>
              <span className="text-slate-300">Caution</span>
              
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 ml-4">
                <span className="text-accent-green font-bold">8-10</span>
              </div>
              <span className="text-slate-300">Safe</span>
            </div>
          </motion.div>

          {/* WhatsApp Bubble Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b141a] rounded-[2.5rem] p-4 sm:p-6 shadow-2xl border-[8px] border-slate-800 max-w-md mx-auto relative"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">LabelSensei</h4>
                <p className="text-xs text-slate-400">bot • Online</p>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white rounded-l-2xl rounded-br-2xl p-3 max-w-[85%] text-sm relative">
                  <div className="flex items-center gap-2 mb-1 opacity-70">
                    <Smartphone className="w-4 h-4"/>
                    <span>Photo</span>
                  </div>
                  <div className="w-full h-32 bg-black/20 rounded-lg mb-1 flex items-center justify-center border border-white/10">
                    <span className="text-xs text-white/50">Ingredient List Image</span>
                  </div>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-r-2xl rounded-bl-2xl p-4 max-w-[95%] text-[15px] leading-relaxed relative shadow-sm border border-white/5 font-sans">
                  <p className="mb-2"><strong className="text-white">Product:</strong> Popular Brand Shampoo</p>
                  <p className="mb-2"><strong className="text-white">Rating:</strong> <span className="text-accent-red font-bold">3/10</span> (Chemical Safety)</p>
                  <p className="mb-3"><strong className="text-white">Verdict:</strong> Contains potential endocrine disruptors and harsh skin irritants. Avoid daily use.</p>
                  <div className="h-px bg-white/10 w-full mb-3"></div>
                  <p className="mb-2"><strong className="text-white">Analysis:</strong></p>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-accent-red mt-0.5">•</span> <span><strong>Sodium Laureth Sulfate:</strong> High-risk surfactant.</span></li>
                    <li className="flex gap-2"><span className="text-accent-red mt-0.5">•</span> <span><strong>Fragrance (Parfum):</strong> Unknown allergen source.</span></li>
                    <li className="flex gap-2"><span className="text-accent-red mt-0.5">•</span> <span><strong>Methylparaben:</strong> Potential endocrine disruptor.</span></li>
                  </ul>
                  <span className="text-[10px] text-white/40 absolute bottom-1 right-2">Just now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Feature Grid */}
      <section id="features" className="py-24 px-6 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why LabelSensei?</h2>
            <p className="text-slate-400 text-lg">Your pocket health expert.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Blunt Honesty", desc: "No marketing fluff. Just the chemical facts.", icon: <Zap className="w-6 h-6 text-primary" /> },
              { title: "Dual Expertise", desc: "Expert logic for both internal nutrition and external hygiene.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
              { title: "Zero Friction", desc: "No app to download. No account to create. Just WhatsApp.", icon: <Smartphone className="w-6 h-6 text-primary" /> },
              { title: "Visual Intelligence", desc: "Reads the fine print so you don't have to.", icon: <Eye className="w-6 h-6 text-primary" /> }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-800/30 border border-slate-700/40 hover:bg-slate-800/50 transition-all flex gap-6 items-start">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/50 shrink-0 shadow-inner">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-slate-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Section 7 */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 mb-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <ShieldCheck className="w-6 h-6 text-orange-400" />
            <p className="text-orange-200/90 text-sm max-w-2xl">
              <strong>Hard Rule:</strong> LabelSensei is an AI advisor. It is not a medical professional. I do not rate medical products or infant formula. Please consult a professional.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-slate-500 text-sm">Your photos are processed for analysis and <span className="text-slate-300">never shared</span>.</p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="https://wa.me/919325835971" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">WhatsApp Bot</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          
          <div className="mt-12 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} LabelSensei AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
