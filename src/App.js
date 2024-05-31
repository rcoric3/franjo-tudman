import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import Croatia from "./Croatia";
import Albania from "./Albania";
import './css/global.css'

const App = () => {
  return (
    <>
     <Croatia />
      <Albania />
    </>
  );
};

export default App;
