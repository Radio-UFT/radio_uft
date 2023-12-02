import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonText, IonList, IonItem,IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoYoutube,logoFacebook, logoTwitter, logoInstagram, calendarOutline, playCircleOutline, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonGrid, IonCol, IonRow, IonButton, RouterLink],
})



export class HomePage {
  constructor() {
    addIcons({calendarOutline, playCircleOutline, informationCircleOutline, logoYoutube,logoFacebook, logoTwitter, logoInstagram});
  }
}
