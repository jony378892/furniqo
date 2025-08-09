export default function CustomerService() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="custom-width">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Customer <span className="text-amber-600">Service</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We’re here to make your furniqo experience seamless. Browse our FAQs,
          or get in touch with our support team for quick assistance.
        </p>

        {/* FAQ Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium">1. How long will delivery take?</h3>
            <p className="text-gray-600">
              Our standard delivery time is 5–7 business days within Bangladesh.
              International shipping may vary depending on the destination.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium">2. Can I return my order?</h3>
            <p className="text-gray-600">
              Yes, you can return products within 14 days of delivery if they
              are in their original condition. Please check our return policy
              for more details.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium">3. How can I track my order?</h3>
            <p className="text-gray-600">
              Once your order is shipped, you’ll receive a tracking link via
              email or SMS.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium">4. Do you offer furniture assembly?</h3>
            <p className="text-gray-600">
              Yes, assembly services are available in selected areas. Please
              contact our team to confirm availability in your location.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is available 7 days a week to help with
            any questions, concerns, or issues.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium">📍 Visit Us</h3>
              <p className="text-gray-600">123 Modern St, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="font-medium">📧 Email</h3>
              <p className="text-gray-600">support@furniqo.com</p>
            </div>
            <div>
              <h3 className="font-medium">📞 Call</h3>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
