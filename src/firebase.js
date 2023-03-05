import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDLk7152OtOvIZJi7d0hHk9KQtt7aXJOmU",
  authDomain: "todo-v2-47e9e.firebaseapp.com",
  projectId: "todo-v2-47e9e",
  storageBucket: "todo-v2-47e9e.appspot.com",
  messagingSenderId: "888849041130",
  appId: "1:888849041130:web:1132d5ca26d9677b16b993",
  databaseURL: "https://todo-v2-47e9e-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

// export default auth;