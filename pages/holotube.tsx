import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Holotube = () => {
  const url = "https://youtu.be/NQFOlnRtyEk";
  const url2 = "https://www.youtube.com/embed/UHxBZ7Or-78";
  const [rows, setRows] = useState<any | undefined>([]);

  const liveFetch = () => {
    const dataBox: any[] = [];
    Axios.get("https://schedule.hololive.tv/api/list/7")
      .then((response) => {
        let dateGroup: number = response.data.dateGroupList.length - 1;
        for (let i = dateGroup; i >= 0; i--) {
          let data = response.data.dateGroupList[i].videoList;
          for (let j = 0; j < data.length; j++) {
            if (data[j].platformType === 1 && data[j].isLive) {
              dataBox.push({
                name: data[j].name,
                icon: data[j].talent.iconImageUrl,
                title: data[j].title,
                date: data[j].datetime,
                thumbnail: data[j].thumbnail,
                streamUrl: data[j].url,
                isLive: data[j].isLive,
              });
            }
          }
        }
        setRows(dataBox);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    liveFetch();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Root</h1>
      <Box sx={{ width: "80%" }} style={{ paddingBottom: "4rem" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {rows.map((streamUrl: string, i: number) => (
            <div key={i}>
              <Grid item xs={12} sm={6} md={3} style={{ padding: " 0.5rem" }}>
                <iframe
                  width="480"
                  height="270"
                  src={
                    "https://www.youtube.com/embed/" +
                    rows[i].streamUrl.split("=")[1]
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Grid>
            </div>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Holotube;

{
  /* <iframe width="480" height="270" src={`https://www.youtube.com/embed/sZAs2Dararw`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */
}
{
  /* <h1>{`https://www.youtube.com/embed/${rows[index].streamUrl.split("=")[1]}`}</h1> */
}
