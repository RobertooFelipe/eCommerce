import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAVhWH3fFcpWm8CJ7G5cHh5c3j3cYQPDpI',
  authDomain: 'ecommerce-5d6f1.firebaseapp.com',
  projectId: 'ecommerce-5d6f1',
  storageBucket: 'ecommerce-5d6f1.appspot.com',
  messagingSenderId: '267429714949',
  appId: '1:267429714949:web:95b30addb648c482a6106c'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
