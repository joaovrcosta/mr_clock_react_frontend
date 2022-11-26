import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSR3xny6vHQOaq9x3Fo6FN6zNh155pntc",
  authDomain: "mrclock-a58bf.firebaseapp.com",
  projectId: "mrclock-a58bf",
  storageBucket: "mrclock-a58bf.appspot.com",
  messagingSenderId: "8051830426",
  appId: "1:8051830426:web:742d3451ab4db76fe5b923",
  measurementId: "G-KPP90FL2QH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
