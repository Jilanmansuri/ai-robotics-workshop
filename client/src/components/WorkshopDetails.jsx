import React from 'react';
import { workshopDetails } from '../data/workshopDetails';

const WorkshopDetails = () => {
  return (
    <section id="details" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshop <span className="gradient-text">At A Glance</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Quickly view key details about the upcoming summer batch. Everything you need to know to get started.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {workshopDetails.map((detail) => {
            const IconComponent = detail.icon;
            return (
              <div
                key={detail.id}
                className="group relative bg-white/70 backdrop-blur-md border border-slate-200/60 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center justify-between"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10"></div>
                
                {/* Icon Container */}
                <div className={`p-4 rounded-2xl bg-slate-100/80 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5 ${detail.color}`}>
                  <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="space-y-2 flex-grow">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    {detail.label}
                  </p>
                  <p className="text-xl font-bold text-slate-800 font-display">
                    {detail.value}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {detail.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkshopDetails;
