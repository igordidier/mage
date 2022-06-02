import React, { useState, useEffect } from "react";
import "firebase/firestore";
import {
  IonContent,
  IonButton,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Results from "../components/note";
import "./Tab1.css";
import { db } from "../firebase.js";
import {
  onSnapshot,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
const deleteChangeHandler = async (id: any) => {
  const docRef = doc(db, "notes", id);
  await deleteDoc(docRef);
  // INITIAL_TODO = INITIAL_TODO.filter((item) => item.task !== deleteTask);
  // setNewTodo(INITIAL_TODO);
};

const Tab1: React.FC = () => {
  const [newTodo, setNewTodo] = useState([] as any);
  const [notes, setNote] = useState([] as any);
  useEffect(
    () =>
      onSnapshot(collection(db, "notes"), (snapshot) =>
        setNote(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Notes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <ion-content>
        {notes.map((notes: any) => (
          <div key={notes.id}>
            <Results
              id={notes.id}
              title={notes.title}
              note={notes.note}
              link={notes.link}
              onDelete={deleteChangeHandler}
            />
          </div>
        ))}
      </ion-content>
    </IonPage>
  );
};

export default Tab1;
