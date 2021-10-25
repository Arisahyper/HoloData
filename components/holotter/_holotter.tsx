import React, { useEffect } from "react";
import DemoSideBar from "../DemoSideBar";
import Head from "next/head";

let isLoadwidgets = false;
const Holotter = () => {
  useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);

  return (
    <>
      <Head>
        <title>HoloData</title>
      </Head>
      <div style={{ height: "100%" }}>
        <DemoSideBar pageTitle="Holotter" />
        <div
          style={{
            height: "100%",
            textAlign: "center",
          }}
        >
          <a
            className="twitter-timeline"
            data-width="80vh"
            data-height="110vh"
            data-theme="light"
            data-chrome="noheadernofooternoborders"
            href="https://twitter.com/hololivetv/lists/list3?ref_src=twsrc%5Etfw"
          />
        </div>
      </div>
    </>
  );
};

export default Holotter;
