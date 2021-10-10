import React, { useEffect } from "react";
import SearchAppBar from "../components/AppBar"
import Footer from "../components/Footer"

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
      <div style={{ paddingBottom: "4rem" }}>
        <SearchAppBar />
      </div>
    <div style={{textAlign: "center"}}>
      <a
        className="twitter-timeline"
        data-width="80vh"
        data-height="100vh"
        data-theme="light"
        data-chrome="noheadernofooternoborders"
        href="https://twitter.com/hololivetv/lists/list6?ref_src=twsrc%5Etfw"
        >
        A Twitter List by Nr_Narumium
      </a>
    </div>
    </>
  );
};

export default Twitter;
