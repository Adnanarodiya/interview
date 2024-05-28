import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center h-[800px] bg-repeat animate-ltr-linear-infinite bg-hero-pattern  ">
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
      </div>
      <div className="bg-white absolute   -mt-28 rounded-full w-full">
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
      </div>
      <div className="mt-52">
        <div className="container">
          <div className="flex justify-center gap-20">
            <div
              className="w-2/5
            "
            >
              <div className="bg-red-700 ">
                <img src="/image1-1.png" alt="" />
              </div>
              <h3 className="text-4xl mt-4">
                Know your genes in just few minutes
              </h3>
              <p className="mt-4 text-xl">
                Our platform has the first in the world model for prediction of
                Pathogenicity without Genetic Analysis by featuring our AI
                symptoms, demography and familial history association models,
                ensuring a seamless experience for both healthcare providers and
                patients. This is nearly 1000 times faster than the manual
                process
              </p>
            </div>
            <div className="w-2/5">
              <div>
                <img src="/image2-2.png" alt="" />
              </div>
              <h3 className="text-4xl mt-4">
                Elevating your health without breaking the bank.
              </h3>
              <p className="mt-4 text-xl">
                What sets Mutanex apart is its ability to create personalized
                treatment regimens tailored to each patient according to their
                genetic makeup, all through the assistance of an automated AI
                system. Our automation has significantly reduced the cost of
                creating precision profiles by up to 10 folds
              </p>
            </div>
          </div>
          <div className="mt-10 border border-black"></div>
        </div>
      </div>
      <div className="mt-8 ">
        <div className="container">
          <h1 className="text-4xl w-[550px]">
            See what we are trying to do and how it works
          </h1>
          <div>
            <div className="flex gap-16  mt-8">
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
            <div className="flex float-right gap-16 mt-32">
              <div className="w-[500px] ">
                <img src="/image 4.png" alt="" />
              </div>
              <div className="w-2/5 px-8 mr-20">
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
            <div className="flex float-right gap-16 mt-32">
              <div className="absolute start-48 w-24 -mt-36">
                <img src="Rectangle 130.png" alt="" />
              </div>
              <div className="w-2/5 px-8 mr-20">
                <h3 className="text-2xl">03</h3>
                <h3 className="text-2xl font-bold mt-2">
                  AI profiling & review
                </h3>
                <p className="mt-2 w-[400px]">
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
            <div className="flex float-left gap-16 mt-32">
              <div className="w-[500px] ">
                <img src="/image 6.png" alt="" />
              </div>

              <div className="w-2/5 px-8 mr-20">
                <h3 className="text-2xl">04</h3>
                <h3 className="text-2xl font-bold mt-2">
                  Precision dosage modification
                </h3>
                <p className="mt-2 w-[400px]">
                  We also facilitates dosage modification profiling by tracking
                  patient progress and adjusting treatments for optimal outcomes
                  through a user-friendly interface where healthcare providers
                  can input simple textual symptoms or monitor progress over
                  time.
                </p>
              </div>
              <div className="absolute w-24 end-36  -mt-28">
                <img src="Vector 25.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="container">
          <div className="flex float-left ml-36   mt-20 ">
            <div className="flex justify-center text-center items-center">
              <h3 className="text-4xl">Transform your health</h3>
              <BsDot size={80} color="#3F3172" />
            </div>
          </div>
          <div className="flex float-left -ml-32 mt-36 ">
            <div className="flex justify-center text-center items-center">
              <BsDot size={80} color="#3F3172" />
              <h3 className="text-4xl">with expert advice from mutanex</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="container">
          <div className="flex float-left    mt-20 ">
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
      </div>
    </>
  );
}
