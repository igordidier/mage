import React, { useRef, useState } from "react";
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

function addproj() {
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [link, setlink] = useState("");
  const noteCollectionRef = collection(db, "notes");
  var msg = "";

  const pushnote = async () => {
    console.log(title, note);
    titleInputRef.current!.value = "";
    noteInputRef.current!.value = "";
    linkInputRef.current!.value = "";
    msg = "Note added";
    console.log(msg);
    await addDoc(noteCollectionRef, {
      title: title,
      note: note,
      link: link
    });
  };

  const titleInputRef = useRef<HTMLIonInputElement>(null);
  const noteInputRef = useRef<HTMLIonInputElement>(null);
  const linkInputRef = useRef<HTMLIonInputElement>(null);

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
            <IonInput
              ref={titleInputRef}
              onIonChange={(e: any) => settitle(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Note</IonLabel>
            <IonTextarea
              ref={noteInputRef}
              rows={6}
              cols={20}
              type="<textarea>"
              onIonChange={(e: any) => setnote(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Link</IonLabel>
            <IonInput
              ref={linkInputRef}
              onIonChange={(e: any) => setlink(e.target.value)}
            />
          </IonItem>

          <IonButton
            onClick={pushnote}
            className="ion-margin-top"
            expand="block"
          >
            Add
          </IonButton>
          <br />
          <IonLabel>{msg}</IonLabel>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default addproj;
