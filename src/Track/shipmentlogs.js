import { useContext, useEffect } from "react";
import trackCtx from "../store/trackContext";
import SupportTeam from "./supportteam";
import { useTranslation, i18n } from "react-i18next";
const Shipmentlogs = () => {
  const { i18n, t } = useTranslation();
  const { data: track } = useContext(trackCtx);
  const transitEvents = track?.TransitEvents;
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <div className="flex lg:w-10/12 mx-auto lg:flex-row flex-col justify-between w-11/12">
      <div className="lg:w-8/12 w-full">
        <h3 className="font-semibold mb-2">
          {t("Tracking details")}
        </h3>
        {transitEvents && (
          <table className="table-fixed w-full border border-solid border-slate-200">
            <thead className="bg-slate-50 ">
              <tr className="text-slate-500 ">
                <th className="px-6 py-3">{t("Branch")}</th>
                <th className="px-6 py-3">{t("Date")}</th>
                <th className="px-6 py-3">{t("Time")}</th>
                <th className="px-6 py-3">
                  {t("Details")}
                </th>
              </tr>
            </thead>
            <tbody>
              {transitEvents.map((transitEvent) => {
                return (
                  <tr
                    key={transitEvent?.TrackingNumber}
                    className="border-slate-100 border "
                  >
                    <td className="text-sm text-center p-4">
                      {transitEvent?.hub}
                    </td>
                    <td className="text-sm text-center p-4">
                      {new Date(
                        transitEvent?.timestamp
                      ).toLocaleDateString("en-CA", {
                        dateStyle: "medium",
                      })}
                    </td>
                    <td className="text-sm text-center p-4">
                      {new Date(
                        transitEvent?.timestamp
                      ).toLocaleTimeString("en-US", {
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="text-sm text-center p-4">
                      {t(transitEvent?.state)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <SupportTeam />
    </div>
  );
};

export default Shipmentlogs;
