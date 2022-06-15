import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAmguCmpdIzpkmJV6v96IKgDieFjPL49Es",
  authDomain: "chat-6083c.firebaseapp.com",
  projectId: "chat-6083c",
  storageBucket: "chat-6083c.appspot.com",
  messagingSenderId: "556528686634",
  appId: "1:556528686634:web:d2af479cf8252866b25553",
}

//Initialize Firebase
const app = initializeApp(firebaseConfig)

// init firestore service
const auth = getAuth(app)
const db = getFirestore(app)
const timestamp = serverTimestamp()
const storage = getStorage(app)
const sRef = ref

// export firestore
export { db, auth, timestamp, storage, sRef, uploadBytes, getDownloadURL }
