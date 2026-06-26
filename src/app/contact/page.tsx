import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Agriculture Department Punjab',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-3.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0">
                    <img src="/images/location.png" alt="Location" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Agriculture Department,<br />
                      21-Court Road,<br />
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0">
                    <img src="/images/phone.png" alt="Phone" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+92 3001405070</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0">
                    <img src="/images/email.png" alt="Email" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">Sharafatpbg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0">
                    <img src="/images/hours.png" alt="Office Hours" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-agri-green/30 focus:border-agri-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-agri-green/30 focus:border-agri-green"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-agri-green/30 focus:border-agri-green"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-agri-green/30 focus:border-agri-green resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-agri-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-agri-green-dark transition text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
