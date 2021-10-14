import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "../components/LiveCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import DemoSideBar from "../components/DemoSideBar";

type Props = {
  name: string;
  title: string;
  icon: string;
  streamUrl: string;
  thumbnail: string;
  date: string;
  isLive: boolean;
};

const Home: NextPage = () => {
  const [rows, setRows] = useState<any | undefined>([]);
  const [date, setDate] = useState<string>("");

  const DateComparison = (date: any) => {
    let nowDate: Date = new Date();
    let parceDate = Date.parse(date);

    if (parceDate > nowDate.getTime()) {
      return true;
    } else {
      return false;
    }
  };

  const fetch = () => {
    const dataBox: any[] = [];
    Axios.get("https://schedule.hololive.tv/api/list/7")
      .then((response) => {
        let dateGroup: number = response.data.dateGroupList.length - 1;
        for (let i = dateGroup; i >= 0; i--) {
          let data = response.data.dateGroupList[i].videoList;
          for (let j = 0; j < data.length; j++) {
            if (data[j].platformType === 1) {
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

  const afterFetch = () => {
    const dataBox: any[] = [];
    Axios.get("https://schedule.hololive.tv/api/list/7")
      .then((response) => {
        let dateGroup: number = response.data.dateGroupList.length - 1;
        for (let i = dateGroup; i >= 0; i--) {
          let data = response.data.dateGroupList[i].videoList;
          for (let j = 0; j < data.length; j++) {
            if (data[j].platformType === 1) {
              if (DateComparison(data[j].datetime) || data[j].isLive) {
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
        }
        setRows(dataBox);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    fetch();
  }, []);

  return (
    <div>
      <Head>
        <title>HoloData</title>
      </Head>
      <DemoSideBar />
      <main className={styles.main} style={{ backgroundColor: "#fff" }}>
        <div style={{ padding: "1.25rem 0 3rem 0" }}>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => {
                fetch();
              }}
            >
              全ての動画
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                afterFetch();
              }}
            >
              配信中 / 予定
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                liveFetch();
              }}
            >
              配信中のみ
            </Button>
          </Stack>
        </div>
        <Box sx={{ width: "80%" }} style={{ paddingBottom: "4rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {rows.map(
              (
                {
                  name,
                  title,
                  icon,
                  streamUrl,
                  thumbnail,
                  date,
                  isLive,
                }: Props,
                index: number
              ) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  style={{ padding: " 0.5rem" }}
                >
                  <Link href={streamUrl}>
                    <a target="_blank" style={{ textDecoration: "none" }}>
                      <div className={styles.card}>
                        <Card
                          name={name}
                          iconLink={icon}
                          title={title}
                          thumbnailLink={thumbnail}
                          date={date.split(":")[0] + ":" + date.split(":")[1]}
                          isLive={isLive}
                        />
                      </div>
                    </a>
                  </Link>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
