// Newsletter section
function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our newsletter and get exclusive deals, early access to
            sales, and student tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#32CD32] text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#32CD32] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#3DE03D] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
