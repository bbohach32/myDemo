import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import anime from 'animejs/lib/anime.es.js';

//const anime = require('animejs');

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
  categories = [
    {
      "name": "Users",
      "details": [
        {"name": "Profile Creation & Customization", "id": "account", "id2": "login"},
        {"name": "User Related Data & Content (Not yet available)", "id": "app/tabs/about"}
      ],
      "about": "Burt is a Bear.",
      "location": "Everywhere",
      "email": "burt@example.com",
      "phone": "+1-541-754-3010",
      "id": "1"
    },
    {
      "name": "Filtering & Sorting",
      "details": [
        {"name": "List of Movies", "id": "movie-example"},
        {"name": "A Daily Schedule", "id": "app/tabs/schedule"}
      ],
      "about": "Burt is a Bear.",
      "location": "Everywhere",
      "email": "burt@example.com",
      "phone": "+1-541-754-3010",
      "id": "2"
    },
    {
      "name": "Location",
      "details": [
        {"name": "Map of Locations", "id": "app/tabs/map"},
        {"name": "Current Location (Not yet available)", "id": "app/tabs/about"}
      ],
      "about": "Burt is a Bear.",
      "location": "Everywhere",
      "email": "burt@example.com",
      "phone": "+1-541-754-3010",
      "id": "3"
    },
    {
      "name": "Directory",
      "details": [
        {"name": "Contact List", "id": "app/tabs/speakers"},
        {"name": "Team Members (Not yet available)", "id": "app/tabs/about"}
      ],
      "about": "Burt is a Bear.",
      "location": "Everywhere",
      "email": "burt@example.com",
      "phone": "+1-541-754-3010",
      "id": "3"
    }
  ]

  loggedIn = false;
  displayEffects = false;

  constructor(
    public router: Router,
    private userData: UserData,
    ) { }

  ngOnInit() {
  }

  navigateTo(detail: any) {
    console.log(detail, detail.name)
    this.userData.isLoggedIn().then((value) => {
      console.log(value)
    })
    if (detail.name == "Profile Creation & Customization") {
      this.userData.isLoggedIn().then((value) => {
        if (value) {
          this.router.navigateByUrl(detail.id)  
        } else {
          this.router.navigateByUrl(detail.id2)  
        }
      }).catch(() => {
        console.log("Not sure what happened")
      })
    } else {
      this.router.navigateByUrl(detail.id)
    }
  }

  specialEffects() {
    if (!this.displayEffects) {
      this.displayEffects = true
      anime({
        targets: '.animate-me2',
        translateX: -443,
        rotate: '-1turn',
        backgroundColor: '#FFF',
        duration: 5000,
        loop: true
      });
      anime({
        targets: '.animate-me',
        translateX: 443,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 5000,
        loop: true
      })
    }
  }
}
