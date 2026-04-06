"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, ShieldCheck, Zap, ArrowRight, Eye, Smartphone, CheckCircle, AlertCircle, Search, Skull, Activity, Clock, EyeOff, Wind, Baby, Dog, Leaf, AlertTriangle, Factory, Pill, Flame, Crosshair, X } from "lucide-react";
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
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-12 text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 sm:px-12 py-4 z-50 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-white/5">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-white tracking-wide hover:opacity-80 transition-opacity">
          <span className="w-3 h-3 rounded-full bg-accent-green animate-pulse"></span>
          LabelSensei AI
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#sample" className="hover:text-primary transition-colors">In Action</a>
          <a href="#engine" className="hover:text-primary transition-colors">Engine</a>
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
            Protecting your Health, <br /> <span className="text-primary italic">One scan</span> at a time.
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4 tracking-wide">
            Ask the Sensei. Know what&apos;s inside.
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            With LabelSensei, you don&apos;t have to guess what&apos;s inside your food or personal care products or Prepared meals. Simply send a photo, and get a clear, honest breakdown of ingredients—so you know exactly about the product.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/919325835971" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 text-lg w-full sm:w-auto justify-center">
              <MessageCircle className="w-6 h-6" />
              👉 Start your first inspection now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. How it Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zero Friction. Instant Truth.</h2>
            <p className="text-slate-400 text-lg">Know the risks. Choose better.</p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "1. Snap", desc: "Take a clear photo of any product label", icon: <Smartphone className="w-8 h-8 text-primary" /> },
              { title: "2. Send", desc: "Message the image to the LabelSensei WhatsApp bot", icon: <ArrowRight className="w-8 h-8 text-primary" /> },
              { title: "3. See", desc: "Receive a simple, easy-to-understand product analysis", icon: <Eye className="w-8 h-8 text-accent-green" /> }
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

      {/* 3. Live Sample WhatsApp Mockup */}
      <section id="sample" className="py-24 px-6 bg-slate-900/80 border-b border-slate-800/50 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">No jargon. No confusion.<br />Just clarity.</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
              From hidden additives to harmful chemicals, LabelSensei analyzes product labels and delivers a straightforward health verdict within seconds.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 shrink-0">
                  <span className="text-accent-red font-bold text-sm sm:text-base">1-3</span>
                </div>
                <span className="text-slate-300">Alert</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-500/20 flex items-center justify-center border border-gray-500/30 shrink-0">
                  <span className="text-gray-400 font-bold text-sm sm:text-base">4-7</span>
                </div>
                <span className="text-slate-300">Caution</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                  <span className="text-accent-green font-bold text-sm sm:text-base">8-10</span>
                </div>
                <span className="text-slate-300">Safe</span>
              </div>
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
                <div className="text-white font-semibold">LabelSensei</div>
                <p className="text-xs text-slate-400">bot • Online</p>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] rounded-l-2xl rounded-br-2xl p-1 shadow-sm relative">
                  <div className="w-64 sm:w-72 h-80 sm:h-96 rounded-[12px] overflow-hidden border border-[#005c4b] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/potato_chips.jpeg" alt="Potato Chips Ingredient List" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-r-2xl rounded-bl-2xl p-4 max-w-[95%] text-[15px] leading-relaxed relative shadow-sm border border-white/5 font-sans">
                  <p className="mb-2"><strong className="text-white">Product:</strong> Potato Chips</p>
                  <p className="mb-2"><strong className="text-white">Rating:</strong> <span className="text-accent-red font-bold underline">3/10</span> (Safety/Nutrition)</p>
                  <p className="mb-3"><strong className="text-white">Profile:</strong> <span className="text-slate-300">VEGAN</span></p>
                  <p className="mb-2"><strong className="text-white">Key Factors:</strong> This product is high in total fats (33.4g/100g), including significant saturated (12.6g/100g) and trans fats (0.1g/100g). It contains several ultra-processed ingredients such as maltodextrin, refined wheat flour (Maida), nature identical flavouring substances, and flavour enhancers (627, 631). Sodium content is...</p>
                  <span className="text-[10px] text-white/40 absolute bottom-1 right-2">Just now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Intelligence Engine */}
      <section id="engine" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">LabelSensei Intelligence Engine</h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We don&apos;t trust marketing claims. We decode the chemical reality. Our intelligence engine exposes precisely what corporations try to hide in the fine print across all your daily products.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Identifying Hidden Sugars & Synthetic Additives', desc: 'Spotting sweeteners and artificial dyes disguised under technical or "healthy" names.', icon: Search },
              { title: 'Flagging Ultra-Processed & Low-Quality Fillers', desc: 'Detecting lab-made ingredients and "vague blends" used to bulk up food and supplements.', icon: Factory },
              { title: 'Detecting Hormone Disruptors & Persistent Toxins', desc: 'Identifying chemicals (like Phthalates and Parabens) that interfere with your body\'s natural balance.', icon: Activity },
              { title: 'Identifying Harsh Skin Irritants & Fragrance Loopholes', desc: 'Spotting sulfates and hidden allergens masked by vague terms like "Fragrance" or "Parfum."', icon: Flame },
              { title: 'Detecting Respiratory Triggers & Lung Irritants', desc: 'Flagging harsh fumes, VOCs, and chemical triggers in household cleaners and aerosols.', icon: Wind },
              { title: 'Flagging "Greenwashing" & Marketing Deception', desc: 'Identifying synthetic chemicals in products falsely branded as "Natural," "Eco-Friendly," or "Pure."', icon: Leaf },
              { title: 'Detecting Hidden Allergen & Contamination Risks', desc: 'Spotting cross-contamination warnings and toxic byproducts buried in the manufacturing fine print.', icon: AlertTriangle },
              { title: 'Identifying High-Sensitivity Risks in Baby & Pet Care', desc: 'Flagging harsh chemicals in products marketed as "Gentle" or "Safe" for your most vulnerable loved ones.', icon: Baby }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} transition={{ duration: 0.3 }}
                  className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/40 hover:border-primary/30 transition-all rounded-2xl p-6 group flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Feature Grid */}
      <section id="features" className="py-24 px-6 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why it matters:</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Because every ingredient impacts your health—and you deserve to know the truth before you use it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Blunt Honesty", desc: "No marketing fluff. Just the chemical facts.", icon: Zap },
              { title: "Universal Assessment", desc: "One AI to decode food, personal care, baby products, household cleaners, and pet supplies.", icon: ShieldCheck },
              { title: "Zero Friction", desc: "No app to download. No account to create. Just WhatsApp.", icon: Smartphone },
              { title: "Visual Intelligence", desc: "Reads the fine print so you don't have to.", icon: Eye }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <div key={i} className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/40 hover:border-primary/30 transition-all rounded-2xl p-6 group flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Footer / Section 7 */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">

          <div className="inline-flex items-start md:items-center gap-3 mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5 md:mt-0" />
            <p className="text-slate-400 text-sm max-w-2xl text-left md:text-center">
              <strong>Disclaimer:</strong> LabelSensei is an AI advisor designed to decode ingredient lists. While highly capable, AI can occasionally make mistakes. Always verify critical health information or severe allergies yourself before consumption.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-slate-500 text-sm">Your photos are processed for analysis and <span className="text-slate-300">never shared</span>.</p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="https://wa.me/919325835971" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">WhatsApp Bot</a>
            <button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors">Terms of Service</button>
          </div>

          <div className="mt-12 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} LabelSensei. A product of Health Upstream. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div
            className="bg-slate-900 border border-slate-700/50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors"
              onClick={() => setActiveModal(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === "privacy" ? (
              <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Privacy Policy</h2>
                <p>Last updated: April 2026</p>
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">1. Information Collection</h3>
                <p>LabelSensei requires an image of a product label or ingredient list, submitted via our WhatsApp bot, to function. We do not require account creation, names, or email addresses.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">2. Processing of Images</h3>
                <p>Images uploaded to the bot are processed globally by our AI exclusively for the purpose of analyzing the ingredients. These images are temporary and are strictly not shared, sold, or used to build personalized advertising profiles.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">3. Phone Numbers</h3>
                <p>By interacting with the LabelSensei WhatsApp bot, your phone number may be visible to our system to facilitate the chat session. We will absolutely never sell your phone number to third parties or spam you with unauthorized promotional broadcasts.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">4. Third Parties</h3>
                <p>We rely on top-tier LLM providers to process the image text. These enterprise APIs do not train on user data. We also rely on WhatsApp/Meta for message transmission; please refer to Meta's privacy policy regarding messaging.</p>
              </div>
            ) : (
              <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Terms of Service</h2>
                <p>Last updated: April 2026</p>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl my-6">
                  <p className="text-orange-200"><strong>CRITICAL DISCLAIMER:</strong> LabelSensei is an AI-powered educational tool. It is NOT a substitute for professional medical advice, diagnosis, or a certified nutritionist. The AI can and occasionally will make mistakes, omit critical data, or hallucinate findings.</p>
                </div>
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">1. Assumption of Risk</h3>
                <p>You assume full responsibility for your use of the information provided by LabelSensei. Do not rely exclusively on this service if you suffer from severe allergies, celiac disease, or any medical condition. Always verify the physical package yourself.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">2. "As-Is" Service</h3>
                <p>LabelSensei is provided on an "as is" and "as available" basis without any warranties of any kind. We do not guarantee continuous, uninterrupted, or perfectly accurate service.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">3. Limitation of Liability</h3>
                <p>Under no circumstances, including negligence, shall the creators, developers, or affiliates of LabelSensei be liable for any direct, indirect, incidental, special, or consequential damages (including health issues or allergic reactions) that result from the use of, or the inability to use, our service.</p>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">4. Acceptable Use</h3>
                <p>You agree not to spam the bot, attempt to reverse-engineer the service, or use it for illegal purposes.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
