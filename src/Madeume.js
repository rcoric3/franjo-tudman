import React, { useState } from "react";
import "./css/madeume.css";
import Logo from "./img/MDU_Rot.png";
import Confetti from "react-confetti";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Madeume() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showText, setShowText] = useState(false);
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [voices, setVoices] = useState([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const sentences = [
    "Ahmet chum is Bett",
    "Nonie hesh bumst njeri",
    "Qiensh eppis",
    "Beleidige ned min beste Kolleg Leon",
  ];

  const handleUmeClick = () => {
    const nextSentence = sentences[sentenceIndex];
    setPopupText(nextSentence);
    setOpen(true);
    speakText(nextSentence);
    setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrück = () => {
    setShowConfetti(true);
    setShowText(true);
    setShowButton(false);
    setTimeout(() => {
      setShowConfetti(false);
      setShowText(false);
      setShowButton(true);
    }, 5000);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "sq-AL";
    utterance.voice = voices.find((voice) => voice.lang === "sq-AL");
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="madeume-container">
        <div className="madeume-header">
            <button className="madeume-button" onClick={handleUmeClick}>
            <h1 style={{ display: showButton ? "block" : "none" }}>Madeume</h1>
            <img
                src={Logo}
                alt="Madeume Button"
                style={{ display: showButton ? "block" : "none" }}
            />
            </button>
        </div>
      {showConfetti && <Confetti />}
      {showButton && !showConfetti && (
        <button className="drückenn-button" onClick={handleDrück}>
          Wenn ned gay bish drück
        </button>
      )}
      {showText && (
        <div className="moment-text">
          Hesh din Moment jetzt kah!
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Weisheit des Tages</DialogTitle>
        <DialogContent>
          <DialogContentText>{popupText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yap nd
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Madeume;
import React, { useState, useEffect } from "react";
import "./css/madeume.css";
import Logo from "./img/MDU_Rot.png";
import Confetti from "react-confetti";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Madeume() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showText, setShowText] = useState(false);
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [voices, setVoices] = useState([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const sentences = [
    "Ahmet chum is Bett",
    "Nonie hesh bumst njeri",
    "Qiensh eppis",
    "Beleidige ned min beste Kolleg Leon",
  ];

  const handleUmeClick = () => {
    const nextSentence = sentences[sentenceIndex];
    setPopupText(nextSentence);
    setOpen(true);
    speakText(nextSentence);
    setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrück = () => {
    setShowConfetti(true);
    setShowText(true);
    setShowButton(false);
    setTimeout(() => {
      setShowConfetti(false);
      setShowText(false);
      setShowButton(true);
    }, 5000);
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
    <div className="madeume-container">
        <div className="madeume-header">
            <button className="madeume-button" onClick={handleUmeClick}>
            <h1 style={{ display: showButton ? "block" : "none" }}>Madeume</h1>
            <img
                src={Logo}
                alt="Madeume Button"
                style={{ display: showButton ? "block" : "none" }}
            />
            </button>
        </div>
      {showConfetti && <Confetti />}
      {showButton && !showConfetti && (
        <button className="drückenn-button" onClick={handleDrück}>
          Wenn ned gay bish drück
        </button>
      )}
      {showText && (
        <div className="moment-text">
          Hesh din Moment jetzt kah!
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Weisheit des Tages</DialogTitle>
        <DialogContent>
          <DialogContentText>{popupText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yap nd
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Madeume;
