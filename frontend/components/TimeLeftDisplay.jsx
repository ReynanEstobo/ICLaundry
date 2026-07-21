// frontend/src/components/TimeLeftDisplay.jsx

import { Clock } from "lucide-react";

const TimeLeftDisplay = ({ timeLeft = "Calculating..." }) => {
  return (
    <span
      style={{
        color: "var(--primary-light)",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Clock size={14} /> {timeLeft || "—"}
    </span>
  );
};

export default TimeLeftDisplay;
