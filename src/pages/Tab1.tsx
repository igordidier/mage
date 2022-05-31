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
import "./Tab1.css";
import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

function Tab1() {
  const noteCollectionRef = collection(db, "note");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
  }, []);
  {
    notes.map((note) => {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add</IonTitle>
            </IonToolbar>
          </IonHeader>

          <ion-content>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title> {note.title} </ion-card-title>
              </ion-card-header>
              <ion-card-content>{note.note}</ion-card-content>
              <IonButton color="primary">Voir</IonButton>
            </ion-card>
          </ion-content>
        </IonPage>
      );
    });
  }
}

export default Tab1;
