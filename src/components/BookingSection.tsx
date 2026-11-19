import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface BookingSectionProps {
  serviceOptions: string[];
  preselectedService: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
}

const TIME_SLOTS = [
  '10:00 AM – 11:30 AM',
  '11:30 AM – 01:00 PM',
  '02:00 PM – 03:30 PM',
  '03:30 PM – 05:00 PM',
  '05:00 PM – 06:30 PM',
  '06:30 PM – 08:00 PM',
];

export function BookingSection({
  serviceOptions,
  preselectedService,
}: BookingSectionProps) {
  const todayIso = useMemo(() => new Date().toISOString().split('T')[0], []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || serviceOptions[0] || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [requirements, setRequirements] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = name.trim();
    const digitsOnly = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit WhatsApp number.';
    }
    if (!service) {
      nextErrors.service = 'Please select a service or package.';
    }
    if (!date) {
      nextErrors.date = 'Please choose your preferred date.';
    }
    if (!time) {
      nextErrors.time = 'Please choose a preferred time window.';
    }
    return nextErrors;
  };

  const formattedMessage = useMemo(() => {
    return [
      'Hello Rupantar Beauty Salon!',
      'I would like to book an appointment.',
      '',
      `Name: ${name.trim() || '[Your Name]'}`,
      `Phone: ${phone.trim() || '[Your WhatsApp Number]'}`,
      `Service: ${service || '[Selected Service]'}`,
      `Date: ${date || '[Preferred Date]'}`,
      `Time: ${time || '[Preferred Time]'}`,
      `Additional Details: ${requirements.trim() || 'None'}`,
      '',
      'Please confirm my appointment.',
    ].join('\n');
  }, [name, phone, service, date, time, requirements]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const waUrl = `https://wa.me/${SALON_INFO.whatsappDigits}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    setSubmittedUrl(waUrl);

    const popup = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!popup) {
      window.location.href = waUrl;
    }
  };

  return (
    <section
      id="booking"
      className="relative py-16 sm:py-24 bg-[#F7F1E8] overflow-hidden"
    >
      {/* Subtle Ambient Rose-Champagne Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[780px] h-[440px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(215, 169, 166, 0.45) 0%, rgba(198, 163, 106, 0.16) 55%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
            Online Appointment Request
          </p>
          <h2
            className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Reserve Your <em className="italic font-normal text-[#652B3A]">Salon Visit</em>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#242020]/75">
            Fill in your preferred treatment and schedule below. Submitting opens WhatsApp ({SALON_INFO.phoneDisplay}) with your formatted booking request — your appointment is confirmed once our salon team replies.
          </p>
        </div>

        {/* Frosted Liquid-Glass Booking Card */}
        <div className="liquid-glass-strong rounded-[2rem] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Form Column */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-7 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                  >
                    Customer Name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] placeholder:text-[#242020]/40 focus:outline-2 focus:outline-[#652B3A]"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#652B3A] font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    inputMode="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] tabular-nums placeholder:text-[#242020]/40 focus:outline-2 focus:outline-[#652B3A]"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-[#652B3A] font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                >
                  Select Service or Package
                </label>
                <select
                  id="booking-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                  }}
                  className="w-full px-4 py-3 min-h-[46px] rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] focus:outline-2 focus:outline-[#652B3A]"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-[#652B3A] font-medium">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayIso}
                    required
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                    }}
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] tabular-nums focus:outline-2 focus:outline-[#652B3A]"
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-[#652B3A] font-medium">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] focus:outline-2 focus:outline-[#652B3A]"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/80 mb-2"
                >
                  Additional Requirements (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Share hair length, skin sensitivity, bridal event date, or preferred stylist notes..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9]/90 border border-[#C6A36A]/35 text-sm text-[#242020] placeholder:text-[#242020]/40 focus:outline-2 focus:outline-[#652B3A]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-7 min-h-[50px] rounded-full bg-[#652B3A] text-[#FFFDF9] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#51202D] hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Send Appointment Request via WhatsApp</span>
              </button>

              <p className="text-xs text-[#242020]/65 leading-relaxed">
                Note: This sends a WhatsApp booking request to {SALON_INFO.phoneDisplay}. Your slot is not confirmed until Rupantar Beauty Salon replies on WhatsApp.
              </p>

              {submittedUrl && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-[#FFFDF9] border border-[#652B3A]/25 flex items-start gap-3 text-xs text-[#242020]"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#652B3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#652B3A]">
                      WhatsApp Request Prepared
                    </p>
                    <p className="mt-0.5 text-[#242020]/75">
                      If WhatsApp did not open automatically,{' '}
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium text-[#652B3A]"
                      >
                        tap here to launch your WhatsApp booking message
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}
            </form>

            {/* Live Message Preview Column */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#FFFDF9]/75 border border-[#C6A36A]/25 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#652B3A] font-semibold">
                  WhatsApp Message Preview
                </p>
                <p className="text-xs text-[#242020]/60 mt-1">
                  Recipient: {SALON_INFO.brandFull} ({SALON_INFO.phoneDisplay})
                </p>

                <pre className="mt-4 p-4 rounded-xl bg-[#F7F1E8] border border-[#242020]/10 text-xs leading-relaxed text-[#242020]/85 whitespace-pre-wrap font-sans">
                  {formattedMessage}
                </pre>
              </div>

              <div className="mt-6 pt-5 border-t border-[#242020]/10 text-xs text-[#242020]/70 space-y-1.5">
                <p className="font-medium text-[#242020]">
                  Need immediate assistance?
                </p>
                <p>
                  Call{' '}
                  <a
                    href={SALON_INFO.phoneHref}
                    className="text-[#652B3A] font-medium underline tabular-nums"
                  >
                    {SALON_INFO.phoneDisplay}
                  </a>{' '}
                  or visit us at Bankashi, Bhadrak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
