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
      <div className="grid grid-cols-4 gap-12 m-6">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/fi-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Finlend</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/gm-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Germany</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/it-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Italy</h2>
            <div className="card-actions justify-between">
              <button onClick={handalCountryInfo} className="btn btn-primary">
                Bachelor's
              </button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ja-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Japan</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ks-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">South Korea</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/nl-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Netherlands</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/ro-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Romania</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.worldometers.info/img/flags/rs-flag.gif"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Rasia</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Bachelor's</button>
              <button className="btn btn-primary">Master's</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
