'use client';

import React from 'react';
import TelcoAITile from './components/TelcoAITile';
import { ArrowRight, ChevronRight, Activity, Globe, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-display overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-lg">Nexus<span className="text-purple-500">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all">
            Get Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                v4.0 Live Now
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Autonomous <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Network Intelligence
                </span>
              </h1>
              
              <p className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Predict, optimize, and heal your telecommunications infrastructure in real-time. 
                Reduce downtime by 40% with our self-learning AI core.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="h-12 px-8 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  Start Deployment
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  View Demo
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2 text-white/40">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Global Scale</span>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-sm">99.99% SLA</span>
                </div>
              </div>
            </div>

            {/* Right Content: The Component */}
            <div className="flex-1 flex justify-center lg:justify-end relative">
              {/* Decorative Glow behind component */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[80px] rounded-full -z-10" />
              
              <TelcoAITile />
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}