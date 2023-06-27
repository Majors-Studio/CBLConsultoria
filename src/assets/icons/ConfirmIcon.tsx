import React from "react";

const ConfirmIcon: React.FC = (props) => {
  return (
    <svg width="24" height="24" fill="#4f665a" {...props}>
      <circle cx="12" cy="12" r="9" stroke="white"></circle>
      <path d="M8 12L11 15L16 9" stroke="white"></path>
    </svg>
  );
};

export default ConfirmIcon;
