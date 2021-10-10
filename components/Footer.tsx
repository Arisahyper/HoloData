import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "10vh",
        display: "table",
        textAlign: "center",
        boxShadow: "0 -0.2px 1px #212121",
      }}
    >
      <h1
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          fontSize: "0.75rem",
        }}
      >
        <a href="https://www.hololive.tv/terms">
          © cover corp. All Rights Reserved.
        </a>
      </h1>
    </div>
  );
};

export default Footer;
