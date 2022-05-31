import React from "react";
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

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>

      <ion-content scroll-y="true">
        <virtual-scroll-element class="ion-content-scroll-host">
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
            <IonButton color="primary">Voir</IonButton>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
            <IonButton color="primary">Voir</IonButton>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
            <IonButton color="primary">Voir</IonButton>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
            <IonButton color="primary">Voir</IonButton>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </ion-card-content>
            <IonButton color="primary">Voir</IonButton>
          </ion-card>
        </virtual-scroll-element>
        <ion-infinite-scroll>
          <ion-infinite-scroll-content></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    </IonPage>
  );
};

export default Tab1;
