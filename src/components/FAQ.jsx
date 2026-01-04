import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform allows users to discover food reviews, rate restaurants, and save their favorite food items. Users can also manage their own reviews from the dashboard."
  },
  {
    question: "Do I need an account to use this website?",
    answer:
      "You can browse public reviews without an account. However, to add reviews, manage favorites, or access your dashboard, you must create an account."
  },
  {
    question: "How do I add or edit my profile information?",
    answer:
      "After logging in, go to your Profile page. You can update your name and profile photo anytime. Other information like bio or location can be added later."
  },
  {
    question: "Can I edit or delete my reviews?",
    answer:
      "Yes. From your dashboard, you can view all reviews you have added and edit or delete them whenever you want."
  },
  {
    question: "What does the Favorites feature do?",
    answer:
      "Favorites allow you to save reviews you like the most. These are stored in your account and can be accessed anytime from your dashboard."
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Authentication is handled securely using Firebase, and all user-related data is protected through backend validation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-base-100  py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
            Everything you need to know about using our platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-base-300 transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium text-base-content">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 text-orange-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
