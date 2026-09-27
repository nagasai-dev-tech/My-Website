import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SeoMeta } from '../components/SeoMeta';
import { Mail, ArrowRight, CheckCircle2, Copy, Check, MessageSquare, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '../components/SocialIcons';

const EMAILJS_SERVICE_ID  = 'service_c8zaplw';
const EMAILJS_TEMPLATE_ID = 'template_7p9yi8p';
const EMAILJS_PUBLIC_KEY  = 'qp1-un4zuBkO513t2';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService === 'seo' ? 'SEO & Digital Marketing' : preselectedService === 'data' ? 'Data Analytics' : preselectedService === 'development' ? 'Full-Stack Development' : '',
    budget: '',
    details: searchParams.get('case') ? `Inquiry regarding use-case: ${searchParams.get('case')}` : searchParams.get('project') ? `Inquiry regarding project: ${searchParams.get('project')}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const budgetOptions = [
    '< $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Consultation / Audit Only'
  ];

  const serviceOptions = [
    'Full-Stack Development',
    'SEO & Digital Marketing',
    'Data Analytics & BI',
    'Custom Web Application',
    'Multi-Disciplinary / Other'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@nagasai.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email address';
    if (!formData.service) newErrors.service = 'Please select a primary service';
    if (!formData.details.trim() || formData.details.length < 10) newErrors.details = 'Please provide a brief description of your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSendError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          company:      formData.company || 'Not provided',
          service:      formData.service,
          budget:       formData.budget  || 'Not specified',
          message:      formData.details,
          subject:      `New Contact Inquiry — ${formData.service} from ${formData.name}`,
          to_email:     'petnikotinagasai@gmail.com',
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoMeta
        title="Contact Nagasai — Start a Project Conversation"
        description="Tell me what you're building, what problem you're trying to solve, or where you're currently stuck. Direct freelance inquiry."
      />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
              Have a Project in Mind?
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Tell me what you're building, what problem you're trying to solve, or where you're currently stuck. I respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all ${
                            errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-600'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all ${
                            errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-600'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company & Primary Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Company / Organization (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Studio"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Primary Service Needed *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all ${
                            errors.service ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-600'
                          }`}
                        >
                          <option value="">Select a service category...</option>
                          {serviceOptions.map((s, idx) => (
                            <option key={idx} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                      </div>
                    </div>

                    {/* Budget Range selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Estimated Budget Range (USD)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                              formData.budget === b
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Project Details & Objectives *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about what you need built, your desired timeline, key features, or where you're currently stuck..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all ${
                          errors.details ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-blue-600'
                        }`}
                      />
                      {errors.details && <p className="text-xs text-red-500 mt-1">{errors.details}</p>}
                    </div>

                    {/* Submit CTA */}
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Start a Conversation</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      {sendError && (
                        <p className="text-xs text-red-500 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Something went wrong. Please email directly at petnikotinagasai@gmail.com
                        </p>
                      )}
                    </div>

                  </form>
                ) : (
                  /* Form Submission Confirmation State */
                  <div className="py-12 px-6 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. I have received your project details regarding <span className="font-semibold text-slate-900">{formData.service || 'your requirement'}</span>. I will review your notes and respond directly via email within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: '',
                          budget: '',
                          details: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

            {/* Sidebar Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Email Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Direct Channel
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Prefer direct email?
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  You can reach me directly. Feel free to attach specifications, RFPs, or design documents.
                </p>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                  <span className="truncate">hello@nagasai.dev</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-white transition-colors shrink-0 ml-2"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Working Guarantees */}
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Engagement Standards
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">24-Hour Response</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Prompt initial feedback and schedule availability for a discovery call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">No Sales Pressure</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Honest technical advice. If I believe another approach or tool is better for you, I will say so.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Execution</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      You collaborate directly with the engineer building your product, not an account executive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Professional Profiles
                </div>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-blue-600" />
                      LinkedIn Profile
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-slate-900" />
                      GitHub Repositories
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <InstagramIcon className="w-4 h-4 text-pink-600" />
                      Instagram
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}
