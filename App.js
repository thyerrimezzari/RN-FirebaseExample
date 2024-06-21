import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import file from "./app.json"

export default function App() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBG3UhdW3DHtP-18kXrZnhhvsRVoIlDOQY",
    authDomain: "rntodolist-50628.firebaseapp.com",
    projectId: "rntodolist-50628",
    storageBucket: "rntodolist-50628.appspot.com",
    messagingSenderId: "354008392129",
    appId: "1:354008392129:web:3ccb328f5240d89af78f40",
    measurementId: "G-9RT1L4MWSJ",
  };

  const app = initializeApp(firebaseConfig);
  console.log(`Firebase ${app.options.projectId} iniciado com sucesso.`);
  // For more information on how to access Firebase in your project,
  // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

  function startUpload() {
    const storage = getStorage(app, "gs://rntodolist-50628.appspot.com");

    const storageRef = ref(storage, '/TESTE/nomedoarquivo.txt')

    // Uploads
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="FAZER UPLOAD"
        color="#f194ff"
        onPress={() => startUpload()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
