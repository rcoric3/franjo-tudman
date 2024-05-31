import React, { useState, useRef, useEffect } from "react";
import "./css/alb.css";
import Adem from "./img/adem.jpg";
import Gabelic from "./audios/gabel.wav";
import OtherAudioFile from "./audios/marsh.mp3";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Albania() {
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [voices, setVoices] = useState([]);
  const otherAudioRef = useRef(null);
  const gabelAudioRef = useRef(null);
  const audioRef = useRef(null);

  const sentences = [
    "Shqipëria do të jetë një shtet i pavarur.",
    "Ne nuk mund të lejojmë që Serbia të dominojë mbi ne.",
    "Populli shqiptar do t'i rezistojë agresionit.",
    "Shqipëria do të mbrohet me të gjitha mjetet.",
  ];

  const handleAdemClick = () => {
    const nextSentence = sentences[sentenceIndex];
    setPopupText(nextSentence);
    setOpen(true);
    speakText(nextSentence);
    setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOtherButtonClick = () => {
    if (otherAudioRef.current) {
      otherAudioRef.current.play();
    }
  };

  const handleGabelAudioClick = () => {
    if (gabelAudioRef.current) {
      gabelAudioRef.current.play();
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "sq-AL";
    utterance.voice = voices.find((voice) => voice.lang === "sq-AL");
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, []);

  return (
    <div className="albania-container">
      <button className="adem-button" onClick={handleAdemClick}>
        <h1>Bac u kry!</h1>
        <img src={Adem} alt="Adem Button" />
      </button>
      <div>
        <button className="other-button" onClick={handleOtherButtonClick}>
          Marshi
        </button>
      </div>
      <div>
        <button className="other-button" onClick={handleGabelAudioClick}>
          Gabelic
        </button>
      </div>
      <audio ref={otherAudioRef} src={OtherAudioFile} />
      <audio ref={gabelAudioRef} src={Gabelic} />
      <audio ref={audioRef} src={OtherAudioFile} loop />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Informacion</DialogTitle>
        <DialogContent>
          <DialogContentText>{popupText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Albania;
