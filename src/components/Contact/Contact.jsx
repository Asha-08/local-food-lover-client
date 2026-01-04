import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full bg-base-100 dark:bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We’d love to hear from you.
            Reach out anytime and we’ll get back as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-base-content">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  flavorhub@foodreview.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-base-content">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +880 1234 567 890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-base-content">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-lg p-8 bg-base-100 dark:bg-base-300">
            <form className="space-y-6">
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <button className="btn w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-red-500 hover:to-orange-500 border-0 transform hover:scale-105 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
