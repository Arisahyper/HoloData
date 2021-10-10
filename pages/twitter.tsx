import React, { useEffect } from "react";

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
    <div style={{textAlign: "center"}}>
      <a
        className="twitter-timeline"
        data-width="80vh"
        data-height="100vh"
        data-theme="dark"
        data-chrome="noheadernofooternoborders"
        href="https://twitter.com/hololivetv/lists/list6?ref_src=twsrc%5Etfw"
      >
        A Twitter List by Nr_Narumium
      </a>
    </div>
  );
};

export default Twitter;
