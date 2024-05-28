import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-black ">
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
      </div>
    </>
    // <div>
    //   <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
    //     <Link to="/">
    //       <a> Home</a>
    //     </Link>
    //     <Link to="about">
    //       <a>About</a>
    //     </Link>
    //   </ul>
    // </div>
  );
}
