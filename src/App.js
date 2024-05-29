import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import YouTube from "react-youtube";

const App = () => {
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [playMusic, setPlayMusic] = useState(false);

  const sentences = [
    "Da Srbi NESTANU",
    "Jebo vam srpsku majku",
    "Ako Bog da Srbija će biti naša jebo majku",
    "Jebene četnike",
    "Za dom spremni",
  ];

  const handleClick = () => {
    const nextSentence = sentences[sentenceIndex];
    setPopupText(nextSentence);
    setOpen(true);
    speakText(nextSentence);
    setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleMusicToggle = () => {
    setPlayMusic(!playMusic);
  };

  // Funktion für die Sprachausgabe
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hr-HR"; // Setze die Sprache auf Kroatisch
    utterance.voice = speechSynthesis
      .getVoices()
      .find((voice) => voice.lang === "hr-HR");
    speechSynthesis.speak(utterance);
  };

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        marginTop: "50px",
        height: "100vh",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg)`,
          backgroundSize: "cover",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />
      <h1>Pritisni Franja Tuđmana </h1>
      <Box
        component="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Franjo_Tudjman_1995.jpg/640px-Franjo_Tudjman_1995.jpg"
        alt="Franjo Tudjman"
        sx={{
          cursor: "pointer",
          width: "300px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={handleClick}
      />
      <Button
        onClick={handleMusicToggle}
        sx={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {playMusic ? "Stop Music" : "Play Music"}
      </Button>
      {playMusic && (
        <YouTube videoId="au-DC7l8Hb8" opts={{ playerVars: { autoplay: 1 } }} />
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Jebo Mamu</DialogTitle>
        <DialogContent>
          <DialogContentText>{popupText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
