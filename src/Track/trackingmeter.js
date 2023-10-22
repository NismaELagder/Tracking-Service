import { useContext, useEffect, useState } from "react";
import trackCtx from "../store/trackContext";
import { useTranslation, i18n } from "react-i18next";
const Trackingmeter = () => {
  const { t, i18n } = useTranslation();
  const { data: track } = useContext(trackCtx);
  const [meterVal, setMeterVal] = useState(0);
  const trackState = track?.CurrentStatus?.state;
  const lastState =
    track?.TransitEvents[track?.TransitEvents?.length - 2]
      ?.state;
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  useEffect(() => {
    if (
      trackState == "DELIVERED" ||
      trackState == "DELIVERED_TO_SENDER"
    ) {
      setMeterVal(4);
    } else if (trackState == "PACKAGE_RECEIVED") {
      setMeterVal(2);
    } else if (
      trackState == "OUT_FOR_DELIVERY" ||
      trackState == "RECEIVED_DELIVERY_LOCATION"
    ) {
      setMeterVal(3);
    } else if (trackState == "CANCELLED") {
      if (lastState == "OUT_FOR_DELIVERY") {
        setMeterVal(3);
      } else if (
        lastState == "NOT_YET_SHIPPED" ||
        lastState == "PACKAGE_RECEIVED"
      ) {
        setMeterVal(2);
      } else if (lastState == "TICKET_CREATED") {
        setMeterVal(1);
      } else {
        setMeterVal(4);
      }
    }
  }, []);

  // **************** truck icon ******************************
  const truckIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 640 512"
    >
      <path
        className={
          trackState == "DELIVERED" ||
          trackState == "DELIVERED_TO_SENDER"
            ? "text-green-500"
            : trackState == "CANCELLED"
            ? "text-red-600"
            : "text-yellow-500"
        }
        fill="currentColor"
        d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8zm482 88L465.1 96H384v96H546zm-226 0V96H224v96h96zM592 384H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104C0 64.2 32.2 32 72 32H192 352 465.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48zm-64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
      />
    </svg>
  );
  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        className={
          trackState == "DELIVERED" ||
          trackState == "DELIVERED_TO_SENDER"
            ? "text-green-500"
            : trackState == "CANCELLED"
            ? "text-red-600"
            : "text-yellow-500"
        }
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      />
    </svg>
  );
  const deliveryIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 576 512"
    >
      <path
        className={
          trackState == "DELIVERED" ||
          trackState == "DELIVERED_TO_SENDER"
            ? "text-green-500"
            : trackState == "CANCELLED"
            ? "text-red-600"
            : "text-yellow-500"
        }
        fill="currentColor"
        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"
      />
    </svg>
  );

  console.log(meterVal);
  const progressbar = (
    <div className="w-full bg-slate-100 rounded-full h-4 ">
      <div
        className={` h-full rounded-full rounded-e-none 	${
          trackState == "CANCELLED"
            ? "bg-red-700"
            : trackState == "DELIVERED" ||
              trackState == "DELIVERED_TO_SENDER"
            ? "bg-green-600"
            : "bg-yellow-400"
        }`}
        style={{ width: `${(meterVal / 4) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="p-8 ">
      <div className="relative">
        {progressbar}
        <div className="icons">
          <span className="absolute ltr:left-0 rtl:right-0 bg-slate-100 rounded-full p-1 -top-2">
            {checkIcon}
          </span>
          <span className="absolute ltr:left-1/4 p-1 bg-slate-100 rounded-full rtl:right-1/4 -top-2">
            {checkIcon}
          </span>
          {meterVal > 2 && (
            <span className="absolute ltr:left-1/2 -top-2 rtl:right-1/2 p-1 bg-slate-100 rounded-full">
              {truckIcon}
            </span>
          )}
          {meterVal <= 2 && (
            <span className="absolute ltr:left-1/2 -top-1 rtl:right-1/2">
              {checkIcon}
            </span>
          )}
          {meterVal > 3 && (
            <span className="absolute ltr:right-0  rtl:left-0 -top-2  bg-slate-100 p-1 flex justify-center items-center rounded-full">
              {" "}
              {deliveryIcon}{" "}
            </span>
          )}
          {meterVal <= 3 && (
            <span className="absolute ltr:right-0  rtl:left-0 -top-1">
              {" "}
              {checkIcon}{" "}
            </span>
          )}
        </div>
        <div className="relative">
          <p className="absolute rtl:right-0 ltr:left-0 top-1 text-center lg:text-xs text-[.5em] font-semibold">
            {" "}
            {t("Ticket Created")}
          </p>
          <p className="absolute rtl:right-1/4  ltr:left-1/4 text-center top-1 lg:text-xs text-[.5em] font-semibold">
            {t("Package Recieved")}
          </p>
          <p className="absolute ltr:left-1/2 rtl:right-1/2 text-center top-1 lg:text-xs font-semibold text-[.5em]">
            {t("In Transit")}
          </p>
          <p className="absolute ltr:right-0 top-1 text-center rtl:left-0 lg:text-xs font-semibold text-[.5em]">
            {t("Package Delivered")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trackingmeter;
