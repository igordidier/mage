import React from "react";
import {
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonButton,
  IonCardHeader,
  ionLabel
} from "@ionic/react";

const Results: React.FC<{
  id: string;
  title: string;
  note: string;
  link: string;
  onDelete: Function;
}> = (notes) => {
  const deleteHandler = () => {
    notes.onDelete(notes.id);
  };
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <IonCardHeader color="light"> {notes.title} </IonCardHeader>
            <IonCardContent>{notes.note}</IonCardContent>
            <IonCardContent>
              <a href="{notes.link}">{notes.link}</a>
            </IonCardContent>
            <IonButton color="success" onClick={deleteHandler}>
              Done
            </IonButton>
            {/* <h2>{props.task}</h2> */}
            {/* <h3></h3> */}
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default Results;
