export default function Careers() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="custom-width">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Join the <span className="text-amber-600">furniqo</span> Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We&apos;re on a mission to create furniture that inspires and lasts.
            If you&apos;re passionate about design, innovation, and quality,
            you&apos;ll feel right at home here.
          </p>
        </div>

        {/* Company Culture */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-amber-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">💡 Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and new ideas to design modern, functional
              furniture for every space.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🤝 Collaboration</h3>
            <p className="text-gray-600">
              Our team works together across design, production, and customer
              service to achieve excellence.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🌱 Growth</h3>
            <p className="text-gray-600">
              We support personal and professional growth with training,
              mentorship, and opportunities.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-600 mt-1">Full-time · Dhaka, Bangladesh</p>
            <p className="text-gray-600 mt-3">
              Help us build a seamless shopping experience using React, Next.js,
              and TailwindCSS.
            </p>
            <a
              href="mailto:hr@furniqo.com"
              className="inline-block mt-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Job 2 */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">
              Customer Support Specialist
            </h3>
            <p className="text-gray-600 mt-1">Full-time · Remote</p>
            <p className="text-gray-600 mt-3">
              Assist our customers with inquiries, orders, and after-sales
              support with a friendly approach.
            </p>
            <a
              href="mailto:hr@furniqo.com"
              className="inline-block mt-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
