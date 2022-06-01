import React, { useState } from "react";
import "firebase/firestore";
import {
  IonTextarea,
  IonButton,
  IonInput,
  IonCheckbox,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

function Tab2() {
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const noteCollectionRef = collection(db, "notes");

  const pushnote = async () => {
    console.log(title, note);

    await addDoc(noteCollectionRef, { name: title, note: note });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form position="center" className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput onIonChange={(e: any) => settitle(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Note</IonLabel>
            <IonTextarea
              rows={6}
              cols={20}
              type="<textarea>"
              onIonChange={(e: any) => setnote(e.target.value)}
            />
          </IonItem>

          <IonButton
            onClick={pushnote}
            className="ion-margin-top"
            expand="block"
          >
            Add
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default Tab2;
