import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import DemoSideBar from "../components/DemoSideBar";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";

const Holotube = () => {
  const [rows, setRows] = useState<any | undefined>([]);
  const [width, setWidth] = useState<string>("480");
  const [height, setHeight] = useState<string>("270");

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
    if (window.innerWidth <= 480) {
      setWidth("340");
      setHeight("191");
    }

    // getWindowSize();
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
  }, []);

  return (
    <div>
      <Head>
        <title>HoloData</title>
      </Head>
      <main className={styles.main}>
        {/* <MiniDrawer /> */}
        <DemoSideBar pageTitle="Holowindow" />
        <div style={{ paddingTop: "3rem" }}>
          <Button
            variant="outlined"
            onClick={() => {
              liveFetch();
            }}
          >
            更新
          </Button>
        </div>
        <Box
          sx={{ width: "80%" }}
          style={{ paddingBottom: "4rem", paddingTop: "2rem" }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {rows.map((streamUrl: string, i: number) => (
              <div id={`live${i}`} key={i}>
                <Grid item xs={12} sm={6} md={3} style={{ padding: "0.5rem" }}>
                  <iframe
                    // width="480"
                    // height="270"
                    // width="300"
                    // height="180"
                    width={width}
                    height={height}
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
      </main>
      <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
        <Footer />
      </div>
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
