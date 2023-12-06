import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonCard, IonButton, IonGrid, IonCol, IonRow} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoYoutube,logoFacebook, logoTwitter, logoInstagram, calendarOutline, playCircleOutline, informationCircleOutline, pauseCircleOutline } from 'ionicons/icons';
import {NativeAudio} from '@capacitor-community/native-audio'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonCard, IonGrid, IonCol, IonRow, IonButton, RouterLink],
})



export class HomePage {

  isAudioPlaying: boolean;

  constructor() {
    addIcons({calendarOutline, playCircleOutline, pauseCircleOutline, informationCircleOutline, logoYoutube,logoFacebook, logoTwitter, logoInstagram});
    this.isAudioPlaying = false;
  }
  

  preload(){
    NativeAudio.preload({
      assetId: "transmission",
      assetPath: "//caqui.uft.edu.br:8000/uftfm",
      audioChannelNum: 1,
      isUrl: true
    });
  }

  play(){
    this.preload()
    NativeAudio.play({
      assetId: "transmission"
    });
    this.isAudioPlaying = true      
  }

  stop(){
    NativeAudio.stop({
      assetId: 'transmission',
    });
    this.isAudioPlaying = false

  }



  callFunction(){
    if(this.isAudioPlaying){
      this.stop()
    }
    else{
      this.play()
    }
  }
  
}
