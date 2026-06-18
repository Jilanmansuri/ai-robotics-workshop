import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitEnquiry } from '../services/api';
import LoadingSpinner from './LoadingSpinner';
import Toast from './Toast';
import SuccessModal from './SuccessModal';
import { Sparkles, Calendar, Tag, ShieldCheck, Mail, Phone, User } from 'lucide-react';

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setToast(null);
    try {
      const response = await submitEnquiry(data);
      if (response.success) {
        setRegisteredData(data);
        setIsModalOpen(true);
        setToast({
          type: 'success',
          message: response.message || 'Registration Successful!'
        });
        reset(); // reset form fields
      } else {
        setToast({
          type: 'error',
          message: response.message || 'Registration failed.'
        });
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: error.message || 'Validation Failed or Server Error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Reserve a Spot for <span className="gradient-text">Your Child</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Complete the form below to enroll. Hurry! Early bird registrations get full access to course toolboxes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Info Side Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800/80">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
            
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-secondary-light">
                <Sparkles className="h-4 w-4 text-glow" />
                <span className="text-xs font-bold uppercase tracking-wider">RoboCamp Exclusive</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Empower Them with Practical Logic
              </h3>

              <div className="space-y-5 text-sm sm:text-base text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl text-primary-light">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span>Batch starts on <strong>15 July 2026</strong></span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl text-secondary-light">
                    <Tag className="h-5 w-5" />
                  </div>
                  <span>Special discounted fee: <strong>₹2,999</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl text-green-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span>Includes live sessions and verified certificate</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 relative z-10 text-xs text-slate-400 leading-normal">
              Note: This class has limited capacity of 25 participants to guarantee personalized instructor support for every student.
            </div>
          </div>

          {/* Actual Form Panel */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-[2.5rem] p-8 sm:p-10 shadow-sm flex flex-col justify-center transition-colors duration-300">
                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Student Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register('name', {
                      required: 'Student Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      maxLength: { value: 50, message: 'Name must not exceed 50 characters' },
                      pattern: {
                        value: /^[a-zA-Z\s\-']+$/,
                        message: 'Name can only contain letters, spaces, hyphens, and apostrophes'
                      }
                    })}
                    placeholder="Enter full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all text-slate-800 dark:text-slate-100 focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.name ? 'border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-900/30' : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="text-xs text-rose-500 font-semibold" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please fill a valid email address'
                      }
                    })}
                    placeholder="parent@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all text-slate-800 dark:text-slate-100 focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.email ? 'border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-900/30' : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="text-xs text-rose-500 font-semibold" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Phone number must be exactly 10 digits'
                      }
                    })}
                    placeholder="Enter 10-digit number"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-light/50 transition-all text-slate-800 dark:text-slate-100 focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.phone ? 'border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-900/30' : 'border-slate-200 dark:border-slate-800 focus:border-primary dark:focus:border-primary-light'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-rose-500 font-semibold" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-bg text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-primary/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Processing Registration...</span>
                  </>
                ) : (
                  <span>Register & Reserve Spot</span>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Floating toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Success details Celebration Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={registeredData}
      />
    </section>
  );
};

export default RegistrationForm;
