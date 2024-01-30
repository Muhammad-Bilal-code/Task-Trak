import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABLYe2ToEF4B1DrDXNcSU4_2xHh8kRp1Q",
  authDomain: "task-trek-4061b.firebaseapp.com",
  projectId: "task-trek-4061b",
  storageBucket: "task-trek-4061b.appspot.com",
  messagingSenderId: "95853996873",
  appId: "1:95853996873:web:a01a9d0ef55196a0a1c898",
  db_URL: "https://task-trek-4061b-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
