import { useContext, useEffect } from "react";
import classes from "./supportteam.module.css";
import trackCtx from "../store/trackContext";
import { useTranslation } from "react-i18next";
import LanguageContext from "../store/languageContext";
const SupportTeam = () => {
  const { data: track } = useContext(trackCtx);
  const { t, i18n } = useTranslation();
  const { language, setLanguage } =
    useContext(LanguageContext);
  console.log(language);
  return (
    <div className="lg:w-3/12 py-4 w-full order-1 lg:order-2  ">
      <h3 className="font-semibold">
        {t("Delivery Address")}
      </h3>
      <div className={" text-sm "}>
        <p className="bg-slate-100 p-6 mt-3">
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
        <div
          className={
            "mt-3 flex flex-col border-slate-100 border-solid border p-3 pr-0  " +
            classes.supportTeam
          }
          style={{
            backgroundPosition:
              // navigator.language === "ar"
              language == "ar" ? "10% 100%" : "90% 100%",
          }}
        >
          <p className="font-semibold text-xs my-4">
            {t("Do you need help?")}
          </p>
          <a
            href={"tel:+" + track?.SupportPhoneNumbers[0]}
            className="py-2 px-3 bg-red-600 text-white text-xs  rounded-md w-1/2"
          >
            {t("Call Our Support Team")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
