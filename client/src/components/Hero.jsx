import React from 'react';
import { ArrowRight, Sparkles, Trophy } from 'lucide-react';
import robotImage from '../assets/hero_robot.png';
import { smoothScrollTo } from '../utils/scroll';

const Hero = () => {
  const handleScrollToRegister = (e) => {
    e.preventDefault();
    smoothScrollTo('#register');
  };

  const handleScrollToOutcomes = (e) => {
    e.preventDefault();
    smoothScrollTo('#outcomes');
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl animate-float-reverse"></div>

      {/* Mesh grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism dark:glassmorphism-dark text-primary dark:text-primary-light border-primary/20 dark:border-primary/30 shadow-sm animate-bounce">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Presented by RoboCamp</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              AI & Robotics <br />
              <span className="gradient-text text-glow">Summer Workshop</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empower your kids (Ages 8–14) with practical logic building, basic artificial intelligence, automation, and virtual robotics modeling. Watch them build their own smart systems in just 4 weeks!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#register"
                onClick={handleScrollToRegister}
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#outcomes"
                onClick={handleScrollToOutcomes}
                className="glassmorphism dark:glassmorphism-dark text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800 hover:border-primary dark:hover:border-primary-light hover:text-primary dark:hover:text-primary-light px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                Explore Syllabus
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-6 border-t border-slate-200/60 dark:border-slate-800">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">4 Weeks</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Immersive Course</p>
              </div>
              <div className="border-x border-slate-200 dark:border-slate-800">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Live & Online</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">₹2,999</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">All Inclusive</p>
              </div>
            </div>

          </div>

          {/* Graphical Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing ring under image */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 blur-2xl animate-pulse"></div>

            {/* Glassmorphic image frame */}
            <div className="relative glassmorphism dark:glassmorphism-dark p-4 sm:p-5 rounded-[2.5rem] shadow-2xl border-white/40 dark:border-slate-800 max-w-[340px] sm:max-w-[380px] animate-float">
              <img
                src={robotImage}
                alt="Kid Friendly Coding Robot"
                className="rounded-[2rem] w-full object-cover object-center shadow-lg"
              />

              {/* Badges on Hero Image */}
              <div className="absolute -left-6 top-1/3 glassmorphism dark:glassmorphism-dark px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg border-white/50 dark:border-slate-800 animate-bounce">
                <div className="bg-green-500 p-1.5 rounded-lg text-white">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">Certification</p>
                  <p className="text-xs font-extrabold text-slate-800 dark:text-slate-100">100% Verified</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-10 glassmorphism dark:glassmorphism-dark px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg border-white/50 dark:border-slate-800 animate-float-reverse">
                <div className="bg-amber-500 p-1.5 rounded-lg text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">Ages Group</p>
                  <p className="text-xs font-extrabold text-slate-800 dark:text-slate-100">8–14 Years</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
