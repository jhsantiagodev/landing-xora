import React from "react";

export const Inner = ({ icon, children }) => {
  return (
    <>
      <span>
        <span>Marker</span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 object-contain z-10"
          />
        )}

        <span>{children}</span>
      </span>
    </>
  );
};
