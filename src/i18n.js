import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          "Track Your Shipment": "Track Your Shipment",
          "Ticket Created": "Ticket Created",
          "Package Recieved": "Package Recieved",
          "ticket created": "ticket created",
          "package recieved": "package recieved",
          "In Transit": "In Transit",
          "Package Delivered": "Package Delivered",
          "package delivered": "package delivered",
          IN_TRANSIT: "IN_TRANSIT",
          OUT_FOR_DELIVERY: "Out for delivery",
          "Tracking Number": "Tracking Number",
          CANCELLED: "CANCELLED",
          "Promised Date": "Promised Date",
          Provider: "Provider",
          "Last Update": "Last Update",
          DELIVERED_TO_SENDER: "Delivered to sender",
          DELIVERED: "Delivered",
          Branch: "Branch",
          Time: "Time",
          Date: "Date",
          Details: "Details",
          "Tracking details": "Tracking details",
          NOT_YET_SHIPPED: "Not Yet Shipped",
          WAITING_FOR_CUSTOMER_ACTION:
            "Waiting for customer action",
          PACKAGE_RECEIVED: "Package recieved",
          TICKET_CREATED: "Ticket created",
          "Do you need help?": "Do you need help?",
          "Call Our Support Team": "Call Our Support Team",

          "Delivery Address": "Delivery Address",
        },
      },

      ///*********** */
      // arabic
      ar: {
        translation: {
          "Ticket Created": "تم انشاء الطلب",
          "Package Recieved": "الاستلام من البائع",
          "ticket created": "تم انشاء الطلب",
          "package recieved": "الاستلام من البائع",
          "In Transit": "النقل",
          "Package Delivered": "تم التسليم للعميل",
          "package delivered": "تم التسليم للعميل",

          IN_TRANSIT: " تم الشحن",
          OUT_FOR_DELIVERY: "خرج للتسليم",
          CANCELLED: "تم الالغاء",
          "Tracking Number": "رقم الشحنه",
          "Promised Date": "تاريخ التوصيل المتوقع",
          Provider: "البائع",
          "Last Update": "آخر تحديث",
          DELIVERED: "تم التسليم",
          Branch: "الفرع",
          Date: "التاريخ",
          DELIVERED_TO_SENDER: "تم التوصيل",

          Time: "التوقيت",
          Details: "التفاصيل",
          "Tracking details": "تفاصيل الشحنه",
          NOT_YET_SHIPPED: "لم يتم الشحن بعد",
          WAITING_FOR_CUSTOMER_ACTION: "فى انتظار العميل",
          PACKAGE_RECEIVED: "تم الاستلام من البائع",
          TICKET_CREATED: "تم انشاء الطلب",
          "Do you need help?": "هل تحتاج الى مساعدة؟",
          "Call Our Support Team": "اتصل بفريق الدعم",
          "Delivery Address": "عنوان التوصيل",
          "Track Your Shipment": "تتبع شحنتك",
        },
      },
      //arabic ends ********   },
    },
  });

export default i18n;
