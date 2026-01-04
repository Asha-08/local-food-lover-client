const About = () => {
  return (
    <section className="w-full bg-base-100 dark:bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
              alt="Food experience"
              className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
              About Our Food Review Platform
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our platform is built for people who love discovering food and
              sharing real dining experiences. We focus on transparency,
              simplicity, and user-friendly design so anyone can explore food
              reviews with confidence.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              From browsing honest reviews to saving favorites and managing
              everything through a personal dashboard, we aim to make food
              discovery easier and more enjoyable.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✔ Real user-based food reviews</li>
              <li>✔ Clean and modern dashboard</li>
              <li>✔ Secure login and data handling</li>
              <li>✔ Fully responsive for all devices</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
