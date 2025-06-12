import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración ACTUALIZADA
const firebaseConfig = {
  apiKey: "AIzaSyC_8MuoW-xVzBCWrgpPnM8_9r3KoXJkB7Q", // ¡Genera una nueva!
  authDomain: "educajat.firebaseapp.com",
  databaseURL: "https://educajat.firebaseio.com", // Añade esta línea
  projectId: "educajat",
  storageBucket: "educajat.appspot.com", // Formato corregido
  messagingSenderId: "681111290353",
  appId: "1:681111290353:web:fb2f1500bd5c7a51b84450"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configuración mejorada del proveedor
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com"
});

// Persistencia y exportaciones
setPersistence(auth, browserLocalPersistence);
export { auth, googleProvider, signOut};
export const db = getFirestore(app);
