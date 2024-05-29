import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import Card from "./Card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Cards from "./Cards";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <section className="bg-cover bg-center h-[800px] bg-repeat animate-ltr-linear-infinite bg-hero-pattern  ">
        <div className="container flex justify-between text-white p-4 text-center items-center ">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <div>
            <ul className="flex gap-4">
              <Link>services</Link>
              <Link>about us</Link>
              <Link>contact us</Link>
            </ul>
          </div>
          <div className="border border-white py-2 px-4 rounded-3xl">
            <button type="submit">Login</button>
          </div>
        </div>
        <div className="mt-40">
          <h1 className="text-6xl w-[800PX] text-center justify-center mx-auto text-white">
            Accelerating healthcare with genetic
          </h1>
          <div className="border-white border w-96 mt-8 mx-auto"></div>
          <p className="text-white text-center mt-4">
            Get personalized reports in just minutes
          </p>
        </div>
        <div className="bg-white w-16 h-16  mx-auto mt-16  rounded-full">
          <div className="text-center mx-auto  justify-center flex p-6">
            <FaArrowDown height={200} />
          </div>
        </div>
      </section>

      <section className="bg-white absolute   -mt-28 rounded-full w-full">
        <div className="container mt-14 ">
          <div className="p-8 flex">
            <div className="w-2/5">
              <h2 className="text-5xl w-[500px]">
                Unlock your genetic potential
              </h2>
            </div>
            <p className="w-3/5 text-xl px-6">
              Mutanex aims to revolutionize healthcare by shifting treatment
              from traditional generalized medicine to modern personalized
              medicine. Our goal is to commercialize precision medicine for
              everyone at ultra-fast and affordable rates through the use of AI
              systems. Our mission is to establish a completely virtual
              precision medicine hospital accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-52">
        <div className="container">
          <div className="flex justify-center gap-20">
            <Card
              imageSrc={"/image 1.png"}
              title={"Know your genes in just few minutes"}
              description={
                "Our platform has the first in the world model for prediction of Pathogenicity without Genetic Analysis by featuring our AI symptoms, demography and familial history association models, ensuring a seamless experience for both healthcare providers and patients. This is nearly 1000 times faster than the manual process"
              }
            />
            <Card
              imageSrc={"/image 2.png"}
              title={"Elevating your health without breaking the bank."}
              description={
                "What sets Mutanex apart is its ability to create personalized treatment regimens tailored to each patient according to their genetic makeup, all through the assistance of an automated AI system. Our automation has significantly reduced the cost of creating precision profiles by up to 10 folds"
              }
            />
          </div>
          <div className="mt-10 border border-black"></div>
        </div>
      </section>

      <section className="mt-8 ">
        <div className="container">
          <h1 className="text-4xl w-[550px]">
            See what we are trying to do and how it works
          </h1>
          <div>
            <div className="flex gap-16  mt-12">
              <div className="w-2/5 px-8">
                <h3 className="text-2xl">01</h3>
                <h3 className="text-2xl font-bold mt-2">
                  Data Collection & input
                </h3>
                <p className="mt-2 w-[400px]">
                  Users input their genetic data or symptoms into the Mutanex
                  platform. Healthcare providers can also upload patient genetic
                  data for analysis.
                </p>
              </div>
              <div className="w-[500px] ">
                <img src="/image 3.png" alt="" />
              </div>
            </div>
            <div className="flex justify-end gap-16 mt-32 ">
              <div className="w-[500px]   ">
                <img src="/image 4.png" alt="" />
              </div>
              <div className="w-1/3 px-8 mr-20">
                <h3 className="text-2xl">02</h3>
                <h3 className="text-2xl font-bold mt-2">Genetic analysis </h3>
                <p className="mt-2 w-[400px]">
                  Mutanex utilizes advanced AI algorithms to analyze the genetic
                  data. This includes quality checks, sequence testing,
                  alignment, indexing, annotation, variant calling &
                  pathogenicity detection.
                </p>
              </div>
              <div className="absolute end-56 w-20 -mt-36">
                <img src="Vector 20.png" alt="" />
              </div>
            </div>
            <div className="flex justify-end gap-16 mt-32">
              <div className="absolute start-48 w-24 -mt-36">
                <img src="Rectangle 130.png" alt="" />
              </div>
              <div className="w-2/5 px-8 mr-20">
                <h3 className="text-2xl">03</h3>
                <h3 className="text-2xl font-bold mt-2">
                  AI profiling & review
                </h3>
                <p className="mt-2 w-[430px]">
                  Mutanex uses advanced genetic sequencing technology and
                  artificial intelligence to identify potential mutations in
                  your genes. The results are verified by a physician, ensuring
                  accuracy and reliability.
                </p>
              </div>

              <div className="w-[500px] ">
                <img src="/image 5.png" alt="" />
              </div>
            </div>
            <div className="flex justify-start gap-16 mt-32">
              <div className="w-[500px] ">
                <img src="/image 6.png" alt="" />
              </div>

              <div className="w-2/5 px-8 mr-20">
                <h3 className="text-2xl">04</h3>
                <h3 className="text-2xl font-bold mt-2">
                  Precision dosage modification
                </h3>
                <p className="mt-2 w-[500px]">
                  We also facilitates dosage modification profiling by tracking
                  patient progress and adjusting treatments for optimal outcomes
                  through a user-friendly interface where healthcare providers
                  can input simple textual symptoms or monitor progress over
                  time.
                </p>
              </div>
              <div className="absolute w-[100px] end-36  -mt-28">
                <img src="Vector 25.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container ">
          <div className="flex justify-start text-center items-center ml-36 mt-20 ">
            <h3 className="text-4xl">Transform your health</h3>
            <BsDot size={80} color="#3F3172" />
          </div>
          <div className="flex justify-start text-center items-center ml-96  ">
            <BsDot size={80} color="#3F3172" />
            <h3 className="text-4xl">with expert advice from mutanex</h3>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="container">
          <div className="float-left  mt-20 ">
            <div className="flex">
              <div className="w-[550px]">
                <h3 className="text-4xl  relative">
                  Finding new ways to improve the health and well-being of
                  people everywhere
                </h3>
              </div>
              <div className="absolute mt-6 end-0 w-[800px] border h-0  border-black"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container ">
        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container">
            <div className=" embla__slide flex">
              <section className="container">
                <div className="mt-24">
                  <div className="flex mx-auto gap-8 w-4/5 mb-28">
                    <div>
                      <h1 className="text-3xl w-80 mt-20">
                        Precision Medicine Profiling
                      </h1>
                      <p className="w-[450px] mt-4">
                        Mutanex uses advanced genetic sequencing technology and
                        artificial intelligence to identify potential mutations
                        in your genes, enabling early intervention and
                        prevention.
                      </p>
                      <button
                        type="button"
                        className="p-3 mt-6 text-[#3F3172] border border-[#3F3172] rounded-full font-bold"
                      >
                        Get Started
                      </button>
                    </div>
                    <div className="w-[500px]">
                      <img src="/card 2.png" alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="embla__slide">
              <section className="container">
                <div className="mt-24">
                  <div className="flex mx-auto gap-8 w-4/5 mb-28">
                    <div>
                      <h1 className="text-3xl w-80 mt-20">
                        Precision Medicine Profiling
                      </h1>
                      <p className="w-[450px] mt-4">
                        Mutanex uses advanced genetic sequencing technology and
                        artificial intelligence to identify potential mutations
                        in your genes, enabling early intervention and
                        prevention.
                      </p>
                      <button
                        type="button"
                        className="p-3 mt-6 text-[#3F3172] border border-[#3F3172] rounded-full font-bold"
                      >
                        Get Started
                      </button>
                    </div>
                    <div className="w-[500px]">
                      <img src="/card 2.png" alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="embla__slide">
              <section className="container">
                <div className="mt-24">
                  <div className="flex mx-auto gap-8 w-4/5 mb-28">
                    <div>
                      <h1 className="text-3xl w-80 mt-20">
                        Precision Medicine Profiling
                      </h1>
                      <p className="w-[450px] mt-4">
                        Mutanex uses advanced genetic sequencing technology and
                        artificial intelligence to identify potential mutations
                        in your genes, enabling early intervention and
                        prevention.
                      </p>
                      <button
                        type="button"
                        className="p-3 mt-6 text-[#3F3172] border border-[#3F3172] rounded-full font-bold"
                      >
                        Get Started
                      </button>
                    </div>
                    <div className="w-[500px]">
                      <img src="/card 2.png" alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="border border-black absolute w-[800px] mt-9"></div>
        <div className="container">
          <div className="flex justify-end">
            <h2 className="text-4xl w-[550px] ">
              See what we are trying to do and how it works
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex gap-12 mt-16">
            <Cards
              imageUrl="/card-img-1.png"
              title="For Patients"
              description="At Mutanex, we empower healthcare providers like hospitals and clinics with advanced tools to streamline precision medicine treatment protocols and drug modifications for the patients. It helps them to get precision treatment insights."
              buttonText="Get Started"
            />
            <Cards
              imageUrl="/card-img-2.png"
              title="For Laboratories"
              description="For individuals with cancer, genetic and rare disorders, we helps you get personalized medical advice based on your Genetic Profiles. Also get a Predicted analysis of your condition just by using your clinical info with our Machine Learning Models for Free."
              buttonText="Get Started"
            />
            <Cards
              imageUrl="/card-img-3.png"
              title="For Laboratories"
              description="Mutanex revolutionizes diagnostic by significantly reducing the time and cost associated with genetic analysis. Our platform automates the analysis process, reducing the turnaround time for generating genetic reports from weeks to mere minutes."
              buttonText="Get Started"
            />
          </div>
        </div>
      </section>

      <section className="bg-[url('/Gradient.png')]">
        <div className="container">
          <div className="flex justify-between py-20">
            <div>
              <h2 className="text-3xl">Unveil your genetic blueprint</h2>
              <p className="mt-6 w-[800px] text-2xl">
                Experience the future of medical insights by downloading our
                sample report, a comprehensive 30-page document that delves deep
                into your genetic makeup and provides you with a personalized
                treatment profile.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[250px]">
                <img src="/sample.png" alt="" />
              </div>
              <div>
                <button className="flex btn w-full btn-primary p-3 mt-6 text-[#3F3172] border border-[#3F3172] rounded-full font-bold btn btn-wide text-center items-center gap-2  ">
                  Download sample report
                  <AiOutlineDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container">
          <h1 className="text-3xl w-96">Frequently asked questions (FAQs)</h1>
          <p className="mt-4">
            Please reach us at if you cannot find an answer to your question.
          </p>
          <div className="mt-4 border border-black"></div>

          <div className="w-4/5 mx-auto">
            <div className="flex text-center items-center justify-between mt-8 px-4">
              <h1>Why Should I use Mutanex?</h1>
              <IoIosArrowDown />
            </div>
            <div className="mt-4 border border-black"></div>
          </div>
          <div className="w-4/5 mx-auto">
            <div className="flex text-center items-center justify-between mt-8 px-4">
              <h1>What are Mutanex’s operating hours?</h1>
              <IoIosArrowDown />
            </div>
            <div className="mt-4 border border-black"></div>
          </div>
          <div className="w-4/5 mx-auto">
            <div className="flex text-center items-center justify-between mt-8 px-4">
              <h1>How secure is my genetic information on Mutanex?</h1>
              <IoIosArrowDown />
            </div>
            <div className="mt-4 border border-black"></div>
          </div>
          <div className="w-4/5 mx-auto">
            <div className="flex text-center items-center justify-between mt-8 px-4">
              <h1>How do I access my Mutanex report?</h1>
              <IoIosArrowDown />
            </div>
            <div className="mt-4 border border-black"></div>
          </div>
        </div>
      </section>

      <section className="mt-28 bg-[#3F3073] text-white">
        <div className="container pt-20">
          <div>
            <img src="/logo.png" alt="" />
            <p className="text-xs mt-1">A step towards precision</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold">Subscribe</h4>
            <p className="mt-4">
              Get 10% off on your first purchase when you sign up for our
              newsletter.
            </p>
            <div className="">
              <input
                className="bg-[#56439A] p-2 rounded-full w-96 mt-4 mr-4"
                type="email"
                placeholder="Email address"
              />
              <button className="btn btn-primary p-3 h-auto w-20 text-white border border-whtext-white rounded-full font-bold">
                Login
              </button>
            </div>
            <div className="bg-[#534480] rounded-xl p-6 w-3/5 mt-20">
              <div className="flex">
                <div>
                  <img className="mr-10" src="comma.png" alt="" />
                </div>
                <div>
                  At Mutanex, our aim is to promote affordable, accurate, and
                  rapid healthcare through AI-driven Genetic Analysis and
                  Precision Medicine Services.
                </div>
              </div>
              <p className="mt-6 flex justify-end">- Saiful Khan (Founder)</p>
            </div>
            <div className="mt-10 border border-white w-full"></div>
            <p className="mt-6">Copyright 2024 Mutanex - All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}
