import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
  IonIcon
} from "@ionic/react";
import { calendar, add, clipboard } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import addproj from "./addprojects";

const Tab3: React.FC = () => {


const pageaddproj = async () => {
  console.log('clicked');
};

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="./addprejects" component={addproj} exact={true} />
      </IonRouterOutlet>

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle horizontal="center">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button href="./addprojects">
            <IonIcon tab="addproj" icon={add} />
          </ion-fab-button>
        </ion-fab>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 3 page" />
        </IonContent>
      </IonPage>
    </IonReactRouter>
  );
};

export default Tab3;
