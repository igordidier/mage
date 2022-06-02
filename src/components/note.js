import React from "react";
import {
    IonRow,
    IonCol,
    IonCardContent,
    IonCard,
    IonButton,
    IonCardHeader,
} from '@ionic/react';


const BmiResults: React.FC<{id: string, title: string ; note: string; }> = (props) => {
   

    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent >
                <IonCardHeader color="light">{props.title}</IonCardHeader>
                  <IonCardContent>{props.note}</IonCardContent>
                  {/* <h2>{props.task}</h2> */}
                  {/* <h3></h3> */}

                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
}

export default BmiResults;
