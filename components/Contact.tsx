import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// API Base URL - adjust based on your environment
import { API_BASE_URL } from '../config';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setSubmitState({ loading: true, success: false, error: null });
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name: formState.name.trim(),
          email: formState.email.trim(),
          subject: formState.subject.trim(),
          message: formState.message.trim()
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Success - clear form and show success message
        setSubmitState({ loading: false, success: true, error: null });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        // API returned an error
        setSubmitState({ 
          loading: false, 
          success: false, 
          error: data.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Contact form submission error:', error);
      setSubmitState({ 
        loading: false, 
        success: false, 
        error: 'Network error. Please check your connection and try again.' 
      });
    }
  };

  const resetForm = () => {
    setSubmitState({ loading: false, success: false, error: null });
  };

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about GoGoTrip? We're here to help you plan your next perfect adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm mb-4">Our support team usually responds within 24 hours.</p>
              <a href="mailto:gogotrip.ai@gmail.com" className="text-blue-600 font-semibold hover:underline">
                gogotrip.ai@gmail.com
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
              {submitState.success ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Thanks for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {submitState.error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-700 font-medium">Submission Failed</p>
                        <p className="text-red-600 text-sm">{submitState.error}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        disabled={submitState.loading}
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        disabled={submitState.loading}
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      disabled={submitState.loading}
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={6}
                      required
                      disabled={submitState.loading}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitState.loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                  >
                    {submitState.loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
