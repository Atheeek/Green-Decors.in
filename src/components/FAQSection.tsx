import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of interior projects do you handle?",
    answer:
      "We handle residential, commercial, and custom interior design projects — from homes and villas to offices, showrooms, and retail spaces. Whether it’s a single-room makeover or a complete end-to-end design solution, we bring your vision to life with creativity and precision.",
  },
  {
    question: "How much does interior design cost in Mangalore or Puttur?",
    answer:
      "The cost depends on the scope, materials, and design preferences, but on average, projects start from ₹1,000 per sq. ft. for turnkey interiors. We offer flexible packages to suit different budgets while ensuring uncompromised quality.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our process is transparent and collaborative: Consultation & Concept → 3D Design & Planning → Material Selection → Execution & Handover. We keep you updated every step of the way.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Depending on project size and scope, most residential interiors are completed within 6–10 weeks. We maintain strict timelines while ensuring exceptional craftsmanship.",
  },
  {
    question: "Do you use sustainable or eco-friendly materials?",
    answer:
      "Yes! We prioritize eco-conscious materials and low-VOC paints wherever possible. Our designs focus on sustainability without compromising on style or comfort.",
  },
  {
    question: "How do you ensure quality during execution?",
    answer:
      "Every project is supervised by experienced designers and site managers. We perform multiple quality checks during fabrication, installation, and finishing to ensure flawless results.",
  },
  {
    question: "How can I book a consultation with Green Decors India?",
    answer:
      "Simply click the ‘Contact Us’ button on our website or reach out via WhatsApp or phone. Our team will schedule a free consultation at your convenience.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-[500] font-inter-display text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-all"
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: openIndex === index ? 500 : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="px-6 pb-5 text-gray-600 text-sm leading-relaxed overflow-hidden"
              >
                {faq.answer}
              </motion.div>
              
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
