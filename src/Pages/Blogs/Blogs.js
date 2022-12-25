import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <img
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"
            alt=""
          ></img>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Sports
          </Link>
          <Link
            href="#"
            className="text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p href="#" className="text-sm pb-3">
            By
            <Link href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </Link>
            , Published on October 22nd, 2019
          </p>
          <Link href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
