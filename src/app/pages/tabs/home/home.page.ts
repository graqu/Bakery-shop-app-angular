import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, chevronDownOutline, notifications, options } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, IonRouterLink]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      chevronDownOutline, cart, notifications, options
    })
  }

  ngOnInit() {
  }

}
