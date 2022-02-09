import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Plugins } from '@capacitor/core'
import {isPlatform} from '@ionic/react'



const { Device } = Plugins

const Tab1: React.FC = () => {
  async function signIn() {

  }
  async function signInWithApple() {
    const { SignInWithApple } = Plugins
    SignInWithApple.Authorize()
    .then((response: any) => {
      console.log(response)
    }).catch((response: any) => {
      console.error(response)
    })
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={signInWithApple}>Login With Apple</IonButton>
        <div onClick={signInWithApple}>LoginWithApple</div>
    </IonContent>
  </IonPage>
  )
}


export default Tab1;
