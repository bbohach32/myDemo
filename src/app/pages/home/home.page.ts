import { Component, OnInit } from '@angular/core';

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
        {"name": "Profile Creation & Customization", "id": "account"},
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
        {"name": "List of Movies", "id": "app/tabs/about"},
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
  constructor() { }

  ngOnInit() {
  }

}
