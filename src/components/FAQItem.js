import { ChevronDown, MessageCircleQuestion, FileText } from "lucide-react";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-gray-200 rounded-xl p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircleQuestion className="text-green-600" />
          <h3 className="text-lg font-semibold text-green-800">{question}</h3>
        </div>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="flex items-start gap-2 mt-3 text-gray-600 text-sm leading-relaxed">
          <FileText className="mt-1 text-green-400" />
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
