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
cost [notes, setNote] = useState([]);


useEffect(() => {

db.collection('notes').onsnapshot(snapshot => {
  setNote(snapshot.docs.map(doc => ({id:doc.id, note:doc.data().notes})))
})

}, []);


      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>My Notes</IonTitle>
            </IonToolbar>
          </IonHeader>

          <ion-content>
          {notes.map(note =>( ))}

          </ion-content>
        </IonPage>
      );


}

export default Tab1;
