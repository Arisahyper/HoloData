import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const YoutubeDeck = () => {
  // let urlBox: string[] = []
  const [url, setUrl] = useState<string>("");

  let urlBox = [
    "https://www.youtube.com/watch?v=eMHsHUk-7ns",
    "https://www.youtube.com/watch?v=eMHsHUk-7ns",
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      url: data.get("url"),
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Youtube Deck
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="url"
              label="Youtube Link"
              name="url"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                console.log(e);
              }}
            >
              追加
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
      {urlBox.map((url) => {
        return (
          <div key={url}>
            <iframe
              width="480"
              height="270"
              src={"https://www.youtube.com/embed/" + url.split("=")[1]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeDeck;
