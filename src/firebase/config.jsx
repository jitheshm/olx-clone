import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYGaKMIFH2vVJLu8bX2WldXHvkaxJUFrM",
    authDomain: "olx-clone-bf5d0.firebaseapp.com",
    projectId: "olx-clone-bf5d0",
    storageBucket: "olx-clone-bf5d0.appspot.com",
    messagingSenderId: "1027043375889",
    appId: "1:1027043375889:web:449a381cdbce3339c7aab0",
    measurementId: "G-FL28M9B019"
};

export const app = initializeApp(firebaseConfig);