import React from "react";
import { Link } from "react-router-dom";
import university from "../../assets/university.jpg";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="w-1/2 p-6">
          <img src={university} alt="" />
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-5xl font-bold"> What is your dream?</h1>
          <p className="py-6">
            We wanted to go abroad for hihmer studies but we did not get valid
            information about that. So, we create this website as if you can get
            all the nessesary information you need, you will get in one bucket.
          </p>
          <Link to="/countries">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
