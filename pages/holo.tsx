import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import Link from "next/link";

import Card from "../components/LiveCard";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

  const fetch = () => {
    const dataBox: any[] = [];
    Axios.get("https://schedule.hololive.tv/api/list/7")
      .then((response) => {
        let dateGroup: number = response.data.dateGroupList.length - 1;
        for (let i = dateGroup; i >= 0; i--) {
          let data = response.data.dateGroupList[i].videoList;
          for (let j = 0; j < data.length; j++) {
            if(data[j].platformType === 1){
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ backgroundColor: "#fff" }}>
        <h1>HoloTube</h1>
        {/* <button onClick={() => fetch()}>fetch</button> */}

        <Box sx={{ width: "80%" }}>
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
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Link href={streamUrl}>
                    <a style={{ textDecoration: "none" }}>
                      <div className={styles.card}>
                        <Card
                          name={name}
                          iconLink={icon}
                          title={title}
                          thumbnailLink={thumbnail}
                          date={date}
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

        {/* <Grid container className={styles.GridContainer}>
          {rows.map((row: any, index: number) => (
            <div key={index}>
              <Grid item xs={12} sm={6}>
                <Link href={row.streamUrl}>
                  <a style={{ textDecoration: "none" }}>
                    <Card
                      name={row.name}
                      iconLink={row.icon}
                      title={row.title}
                      thumbnailLink={row.thumbnail}
                      date={row.date}
                    />
                  </a>
                </Link>
              </Grid>
            </div>
          ))}
        </Grid> */}
      </main>
    </div>
  );
};

export default Home;