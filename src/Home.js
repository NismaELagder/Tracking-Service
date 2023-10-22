import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [trackNumber, setTrackNumber] = useState("");
  return (
    <>
      <h1 className="text-5xl text-center">
        {t("Track Your Shipment")}
      </h1>
      <div className="relative mx-auto w-10/12 lg:w-1/3 my-6">
        <input
          type="text"
          onChange={(e) => setTrackNumber(e.target.value)}
          className="border-slate-200  border-2 rounded-md w-full h-10 pl-10 "
        />
        <Link
          to={`/${trackNumber}`}
          className="absolute left-0 p-3 bg-red-600 rounded-l-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="bg-red-600"
          >
            <path
              fill="currentColor"
              className="text-white m-4"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Home;
