import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <section className="mt-20">
        <div className="container">
          <h1 className="text-3xl w-96">Frequently asked questions (FAQs)</h1>
          <p className="mt-4">
            Please reach us at if you cannot find an answer to your question.
          </p>
          <div className="mt-4 border border-black"></div>

          <div className="w-4/5 mx-auto">
            <div className="w-full my-4">
              <div
                className="flex text-center items-center justify-between mt-8 px-4 cursor-pointer"
                onClick={() => toggleDropdown(0)}
              >
                <h1>Why Should I use Mutanex?</h1>
                {openIndex === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {openIndex === 0 && (
                <div className="mt-4 border border-black p-4">
                  <p>asdada adasdada</p>
                </div>
              )}
              <div className="mt-4 border border-black"></div>
            </div>

            <div className="w-full my-4">
              <div
                className="flex text-center items-center justify-between mt-8 px-4 cursor-pointer"
                onClick={() => toggleDropdown(1)}
              >
                <h1>What are Mutanex’s operating hours?</h1>
                {openIndex === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {openIndex === 1 && (
                <div className="mt-4 border border-black p-4">
                  <p>asdada adasdada</p>
                </div>
              )}
              <div className="mt-4 border border-black"></div>
            </div>

            <div className="w-full my-4">
              <div
                className="flex text-center items-center justify-between mt-8 px-4 cursor-pointer"
                onClick={() => toggleDropdown(2)}
              >
                <h1>How secure is my genetic information on Mutanex?</h1>
                {openIndex === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {openIndex === 2 && (
                <div className="mt-4 border border-black p-4">
                  <p>asdada adasdada</p>
                </div>
              )}
              <div className="mt-4 border border-black"></div>
            </div>

            <div className="w-full my-4">
              <div
                className="flex text-center items-center justify-between mt-8 px-4 cursor-pointer"
                onClick={() => toggleDropdown(3)}
              >
                <h1>How do I access my Mutanex report?</h1>
                {openIndex === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {openIndex === 3 && (
                <div className="mt-4 border border-black p-4">
                  <p>asdada adasdada</p>
                </div>
              )}
              <div className="mt-4 border border-black"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
