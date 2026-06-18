import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { learningOutcomes } from '../data/learningOutcomes';

const LearningOutcomes = () => {
  return (
    <section id="outcomes" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background circles */}
      <div className="absolute top-1/2 left-[-10%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Your Child <span className="gradient-text">Will Learn</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Our curated, project-oriented syllabus focuses on computational thinking and hands-on robotics skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningOutcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            
            // For the 5th outcome, let it span 2 columns on wide screens to balance the grid!
            const isLast = index === learningOutcomes.length - 1;
            
            return (
              <div
                key={outcome.id}
                className={`group relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Icon Container with subtle background styling */}
                  <div className={`inline-flex p-4 rounded-2xl mb-6 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${outcome.color}`}>
                    <IconComponent className={`h-6 w-6 ${outcome.iconColor}`} />
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {outcome.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {outcome.description}
                  </p>
                </div>

                {/* Outcome checklist item */}
                <div className="flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Capstone Project Skill</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LearningOutcomes;
