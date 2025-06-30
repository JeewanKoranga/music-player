import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBu7ves26s2kd4tZteFRRoEWtyqd1aTX0s",
  authDomain: "music-player-at-a-same-time.firebaseapp.com",
  databaseURL: "https://music-player-at-a-same-time-default-rtdb.firebaseio.com",
  projectId: "music-player-at-a-same-time",
  storageBucket: "music-player-at-a-same-time.firebasestorage.app",
  messagingSenderId: "1042884125140",
  appId: "1:1042884125140:web:a1ee6e5de62eaf2c907641",
  measurementId: "G-YKH9SQ914V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Globals
let roomCode = "";

// ✅ Host: Generate room and show it
window.generateHostRoom = function () {
  roomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
  document.getElementById("landing").style.display = "none";
  document.getElementById("host-room").style.display = "block";
  document.getElementById("generated-room-code").textContent = roomCode;
};

// ✅ Host: Enter room → redirect to your player page
window.startAsHost = function () {
  const url = `p4/music.html?room=${roomCode}&host=true`;
  window.location.href = url;
};

// ✅ Connect: Show input field
window.showJoinInput = function () {
  document.getElementById("join-section").style.display = "block";
};

// ✅ Connect: Enter room code → redirect to same player page as guest
window.connectToRoom = function () {
  const inputCode = document.getElementById("room-code-input").value.trim().toUpperCase();
  if (inputCode) {
    const url = `p4/music.html?room=${inputCode}&host=false`;
    window.location.href = url;
  } else {
    alert("Please enter a valid room code.");
  }
};
