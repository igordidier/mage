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

  const BooksList = ({ getBookId }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      getBooks();
    }, []);

    const getBooks = async () => {
      const data = await BookDataService.getAllBooks();
      console.log(data.docs);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };



      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>My Notes</IonTitle>
            </IonToolbar>
          </IonHeader>

          <ion-content>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title> Title  </ion-card-title>
              </ion-card-header>
              <ion-card-content>C:/Users/33612/Documents/projects/mage/node_modules/firebase/node_modules/@firebase/firestore/dist/index.d.ts(27,47): </ion-card-content>
              <IonButton color="primary">Voir</IonButton>
            </ion-card>

          </ion-content>
        </IonPage>
      );


}

export default Tab1;
