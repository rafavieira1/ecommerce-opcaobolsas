import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSk9SVC5Z8HzOG2TgmBRyemXJa96txfo8",
  authDomain: "opcao-bolsas.firebaseapp.com",
  projectId: "opcao-bolsas",
  storageBucket: "opcao-bolsas.appspot.com",
  messagingSenderId: "352169772335",
  appId: "1:352169772335:web:11da55f5df954596ec4dda",
  measurementId: "G-B4V3HW4861"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Analytics apenas no navegador
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Exporta os serviços do Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 