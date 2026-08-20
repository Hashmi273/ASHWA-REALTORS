import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: 'Residential Advisory',
    message: '',
    consent: false,
    consentGivenAt: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to communication terms to submit an enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Capture consent timestamp for DLT/TRAI compliance record-keeping
    const submissionPayload = {
      ...formData,
      consentGivenAt: new Date().toISOString(),
    };

    console.log('Submitted Enquiry Payload (DLT/TRAI Compliant):', submissionPayload);

    // Simulate server dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-20 bg-brand-offwhite min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-navy-primary text-white py-16 md:py-24 relative border-b border-gold-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-gold-primary"></span>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-primary">
              Contact Advisory Desk
            </span>
            <span className="h-[1px] w-6 bg-gold-primary"></span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-grey text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Let's discuss your property goals. Connect with our dedicated advisory team for bespoke consultation and confidential assistance.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details & Map Placeholder */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 rounded-sm border border-slate-light shadow-luxury space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy-primary border-b border-gold-primary/30 pb-4">
                  Advisory Headquarters
                </h2>

                <ul className="space-y-5 text-sm font-sans text-slate-subtle">
                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-primary/5 flex items-center justify-center text-gold-primary flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-primary text-xs uppercase tracking-wider mb-1">
                        Office Location
                      </h3>
                      <p className="leading-relaxed">
                        Flat No. 902, Bronx Rosa Manhattan,<br />
                        Thane Ghodbunder Road, Kasarvadavali,<br />
                        Thane, Maharashtra – 400615
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-primary/5 flex items-center justify-center text-gold-primary flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-primary text-xs uppercase tracking-wider mb-1">
                        Direct Lines
                      </h3>
                      <p>
                        <a href="tel:+919820927491" className="hover:text-gold-primary transition-colors">
                          +91 98209 27491
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-primary/5 flex items-center justify-center text-gold-primary flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-primary text-xs uppercase tracking-wider mb-1">
                        Email Inquiry
                      </h3>
                      <p>
                        advisory@ashwarealtors.com
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-sm bg-navy-primary/5 flex items-center justify-center text-gold-primary flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-primary text-xs uppercase tracking-wider mb-1">
                        Business Hours
                      </h3>
                      <p>
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Social Connect */}
                <div className="pt-4 border-t border-slate-light">
                  <h3 className="font-semibold text-navy-primary text-xs uppercase tracking-wider mb-3">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-3">
                    <a href="#linkedin" className="w-9 h-9 rounded-sm bg-navy-primary text-white flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#instagram" className="w-9 h-9 rounded-sm bg-navy-primary text-white flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#twitter" className="w-9 h-9 rounded-sm bg-navy-primary text-white flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#facebook" className="w-9 h-9 rounded-sm bg-navy-primary text-white flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Location Embed */}
              <div className="bg-navy-primary rounded-sm border border-gold-primary/30 overflow-hidden shadow-luxury">
                <iframe
                  title="ASHWA REALTORS Office Location"
                  src="https://maps.google.com/maps?q=Bronx+Rosa+Manhattan+Thane+Ghodbunder+Road+Kasarvadavali+Thane+400615&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

            </div>

            {/* RIGHT COLUMN: Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-sm border border-slate-light shadow-luxury">
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-primary mb-2">
                  Request Property Consultation
                </h2>
                <p className="text-xs sm:text-sm text-slate-subtle mb-8 font-sans">
                  Fill in your details below and a senior property advisor will get in touch.
                </p>

                {isSubmitted ? (
                  <div className="bg-navy-primary text-white p-8 rounded-sm border border-gold-primary/40 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-gold-primary/20 text-gold-primary mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Enquiry Received
                    </h3>
                    <p className="text-slate-grey text-sm font-sans max-w-md mx-auto leading-relaxed">
                      Thank you! Our advisory team will reach out within 24 hours to discuss your property requirement.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => setIsSubmitted(false)} variant="gold" size="sm">
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Vikramaditya Singhania"
                        className={`w-full px-4 py-3 rounded-sm border text-sm text-navy-primary bg-brand-offwhite focus:bg-white transition-colors ${
                          errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-light focus:border-gold-primary'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-navy-primary mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-sm border text-sm text-navy-primary bg-brand-offwhite focus:bg-white transition-colors ${
                            errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-light focus:border-gold-primary'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@domain.com"
                          className={`w-full px-4 py-3 rounded-sm border text-sm text-navy-primary bg-brand-offwhite focus:bg-white transition-colors ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-light focus:border-gold-primary'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Property Interest Dropdown */}
                    <div>
                      <label htmlFor="propertyInterest" className="block text-xs font-semibold uppercase tracking-wider text-navy-primary mb-2">
                        Property Advisory Area
                      </label>
                      <select
                        id="propertyInterest"
                        name="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-slate-light text-sm text-navy-primary bg-brand-offwhite focus:bg-white focus:border-gold-primary transition-colors"
                      >
                        <option value="Residential Advisory">Residential Advisory (Luxury Apartments & Villas)</option>
                        <option value="Commercial Advisory">Commercial Advisory (Leasing & Workspaces)</option>
                        <option value="Investment Consultation">Investment Consultation & High Yield Portfolio</option>
                        <option value="Legal & Documentation">Legal & Title Verification Assistance</option>
                        <option value="Other Advisory">Other Real Estate Requirement</option>
                      </select>
                    </div>

                    {/* Message / Requirement */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy-primary mb-2">
                        Property Requirement Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mention preferred location, budget bracket, carpet area requirement..."
                        className="w-full px-4 py-3 rounded-sm border border-slate-light text-sm text-navy-primary bg-brand-offwhite focus:bg-white focus:border-gold-primary transition-colors"
                      ></textarea>
                    </div>

                    {/* Revisions #3: DLT/TRAI Compliant Opt-In Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 rounded border-slate-light text-gold-primary focus:ring-gold-primary cursor-pointer"
                        />
                        <span className="text-xs text-slate-subtle leading-relaxed">
                          I consent to ASHWA REALTORS contacting me via Call, SMS, WhatsApp, and Email regarding property advisory services and updates. I understand I can withdraw consent anytime by writing to advisory@ashwarealtors.com or replying STOP. *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Legal Inline Links */}
                    <p className="text-[11px] text-slate-grey">
                      By submitting, you agree to our{' '}
                      <Link to="/terms" className="text-gold-primary underline hover:text-gold-dark">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-gold-primary underline hover:text-gold-dark">
                        Privacy Policy
                      </Link>.
                    </p>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                        icon={Send}
                      >
                        {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
