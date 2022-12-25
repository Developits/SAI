import React from "react";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const navigate = useNavigate();
  const handalCountryInfo = () => {
    navigate("/italy");
  };
  return (
    <div className=" min-h-screen my-6">
      <h1 className="text-center text-4xl">Which country do you want to go?</h1>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/fi-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Finlend</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/gm-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Germany</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              onClick={handalCountryInfo}
              src="https://www.worldometers.info/img/flags/it-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Italy</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ja-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Japan</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ks-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">South Korea</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/nl-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Netherlands</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ro-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Romania</p>
          </figure>
        </div>
        <div className="p-10">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/rs-flag.gif"
              alt=""
            />
            <p className="text-center text-xl font-bold">Rasia</p>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Countries;
