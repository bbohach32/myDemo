import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

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
        {"name": "User Related Data & Content", "id": "app/tabs/about"}
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
        {"name": "Current Location", "id": "app/tabs/about"}
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
        {"name": "Team Members", "id": "app/tabs/about"}
      ],
      "about": "Burt is a Bear.",
      "location": "Everywhere",
      "email": "burt@example.com",
      "phone": "+1-541-754-3010",
      "id": "3"
    }
  ]

  loggedIn = false;

  constructor(
    private router: Router,
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

}
