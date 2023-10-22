import React from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import trackCtx from "../store/trackContext";
import TrackingSummary from "./trackingsummary";
import Shipmentlogs from "./shipmentlogs";
const Track = () => {
  const { trackingNumber } = useParams();
  const { data, error } = useFetch(
    "https://tracking.bosta.co/shipments/track/" +
      trackingNumber
  );

  return (
    <trackCtx.Provider value={{ data, error }}>
      <TrackingSummary />
      <Shipmentlogs />
    </trackCtx.Provider>
  );
};

export default Track;
