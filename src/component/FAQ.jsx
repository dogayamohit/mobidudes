import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { getFaqs } from "../api/home";

const STATIC_FAQS = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Just reach out to us via our contact form, email, or phone, and we’ll schedule a free consultation.",
  },
  {
    id: 2,
    question: "What industries do you work with?",
    answer:
      "We work with e-commerce, healthcare, education, fintech, real estate, logistics, and more.",
  },
  {
    id: 3,
    question: "Do you build apps for both Android and iOS?",
    answer:
      "Yes, we develop native and cross-platform apps using modern frameworks.",
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(STATIC_FAQS);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();

        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        }
      } catch (error) {
        console.error("FAQ API failed, using static FAQs");
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-right">
            <div className="faq-sidebar">
                <h2 className="section-title-italic mb-0">Questions we get asked</h2>
              {/* <h3>Questions we get asked</h3> */}
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-left">
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={faq.id}
                >
                  <Accordion.Header>
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
