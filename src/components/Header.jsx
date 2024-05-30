import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className=" h-16 flex justify-between text-white p-4  top-0 inset-0 z-10 fixed bg-opacity-80 container bg-transparent ">
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
        <div className="border  border-white py-2 px-4 rounded-3xl h-10 text-center  items-center">
          <button type="submit">Login</button>
        </div>
      </div>
    </>
  );
}
