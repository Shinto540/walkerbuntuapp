import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Footer from "../home/Footer";
import Link from "next/link";
import PageHeader from "../PageHeader";

const contacts = () => {
  return (
    <div className="">
      <PageHeader pageTitle={"Contact us"} />
      <div>
        <div>
          <section className="bg-gray-300 flex justify-center items-center h-screen">
            <div className="bg-white p-10 rounded-lg shadow-md italic font-mono">
              <h1 className="text-3xl font-bold not-italic font-sans- ">
                CONTACT DETAILS
              </h1>

              <hr className="" />
              <ul>
                <li>
                  <Link href="location:makumbusho bus stand">
                    <a className="text-m">
                      <FaLocationArrow className="text-xl cursor-pointer" />
                      Makumbusho Stand, Kijitonyama <br />
                      Dar es Salaam, Tanzania
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="callto:+255 754 323 365">
                    <a className="text-m">
                      <FaPhone className="text-xl cursor-pointer" />
                      +255 754 323 365
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:adamandrea43@yahoo.com">
                    <a className="text-m">
                      <FaGoogle className="text-xl cursor-pointer" />
                      adamandrea43@yahoo.com
                    </a>
                  </Link>
                </li>
              </ul>
              <div>
                <div className="p-5">
                  <ul>
                    <h2 className="text-bold font-bold text-2xl not-italic">
                      SEND MESSAGE
                    </h2>
                    <hr />
                    <br />
                    <li className="">
                      <form action="#">
                        <label htmlFor="name"></label>
                        <input
                          className="form-control
        block
        w-full
        px-5
        py-2.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name here ..."
                        />
                        <br />
                        <label htmlFor="email"></label>
                        <input
                          className="form-control
        block
        w-50
        px-5
        py-2.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Your email here ..."
                        />
                        <br />
                        <label htmlFor="email"></label>
                        <input
                          className="form-control
        block
        w-full
        px-5
        py-10
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="text"
                          id="comment"
                          name="comment"
                          placeholder="Your comment here ..."
                        />
                        <br />

                        <button
                          className="bg-blue-500 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                          type="submit"
                        >
                          Submit Message
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/dir/Makumbusho+Bus+terminal,+Dar+es+Salaam/Makumbusho+Bus+Stand,+Dar+es+Salaam/@-6.7880366,39.2323641,14.19z/data=!4m14!4m13!1m5!1m1!1s0x185c4ddc42d5bdd1:0x66de0ffea4b54152!2m2!1d39.2468501!2d-6.7781985!1m5!1m1!1s0x185c4c22a579bbf1:0x348e0b7db2debedd!2m2!1d39.2471656!2d-6.7783661!3e0?hl=en"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                // aria-aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default contacts;
