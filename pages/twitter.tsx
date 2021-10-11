import { positions } from "@mui/system";
import React, { useEffect } from "react";
import SearchAppBar from "../components/AppBar";
import DemoSideBar from "../components/DemoSideBar";
import Footer from "../components/Footer";

let isLoadwidgets = false;
const Twitter = () => {
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
      <div style={{ height: "100%" }}>
          <DemoSideBar />
        <div style={{ height:"100vh",textAlign: "center", position: "relative", bottom: "3rem"  }}>
          <a
            className="twitter-timeline"
            data-width="80vh"
            data-height="97vh"
            data-theme="light"
            data-chrome="noheadernofooternoborders"
            href="https://twitter.com/hololivetv/lists/list3?ref_src=twsrc%5Etfw"
          />
          <div style={{ width:"100%", position:"fixed", bottom: 0 }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Twitter;
