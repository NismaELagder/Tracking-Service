import { useContext, useEffect } from "react";
import { i18n, useTranslation } from "react-i18next";
import trackCtx from "../store/trackContext";
import Trackingmeter from "./trackingmeter";
const TrackingSummary = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const { data: track } = useContext(trackCtx);
  const lastUpdatedDate = new Date(
    track?.CurrentStatus?.timestamp
  ).toLocaleString("en-US", {
    timeStyle: "medium",
    dateStyle: "medium",
  });
  const promisedDate =
    new Date(track?.promisedDate).toLocaleString() ==
    "Invalid Date"
      ? ""
      : new Date(
          track.promisedDate.toLocaleString("en-US", {
            timeStyle: "medium",
            dateStyle: "long",
          })
        );
  const statusClass =
    track?.CurrentStatus.state == "IN_TRANSIT" ||
    track?.CurrentStatus?.state == "OUT_FOR_DELIVERY"
      ? "text-yellow-400"
      : track?.CurrentStatus?.state == "CANCELLED"
      ? "text-red-700"
      : "text-green-600";

  return (
    <div>
      {track && (
        <>
          <div className="w-10/12 m-auto border-slate-300 border-solid border my-8 rounded-sm lg:text-md md:text-sm text-[.5em]">
            <div className="flex justify-between px-12 border-b border-slate-300 border-solid py-4">
              <div className="flex-col justify-center">
                <p className="text-slate-400 ">
                  {t("Tracking Number")}{" "}
                  {track.TrackingNumber}
                  <span
                    className={
                      " font-bold block " + statusClass
                    }
                  >
                    {t(`${track.CurrentStatus.state}`)}
                    {/* {track.CurrentStatus.state
                      .split("_")
                      .join(" ")
                      .toLowerCase()} */}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-slate-400">
                  {t("Last Update")}
                  <span className="text-black font-bold block">
                    {lastUpdatedDate}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-slate-400">
                  {t("Provider")}
                  <span className="text-black font-bold block">
                    {track.provider}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-slate-400">
                  {t("Promised Date")}
                  <span className="text-black font-bold block">
                    {promisedDate}
                  </span>
                </p>
              </div>
            </div>
            <Trackingmeter />
          </div>
        </>
      )}
    </div>
  );
};

export default TrackingSummary;
