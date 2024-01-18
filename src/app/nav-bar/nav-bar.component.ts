import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  // STATES
  logo!:string
  ListMenu =[
    { id:1, name:"Home",link:"#"},
    { id:2,name:"Projet",link:"#"},
    { id:3,name:"Services",link:"#"},
    { id:4,name:"About", link:"#"},
     { id:5, name:"Blog", link:"#"},
    { id:6, name:"Shop", link:"#"},
    { id:7,name:"Contact", link:"#"}
  ]

  ngOnInit(): void {
      this.logo = '../../assets/images/logo.png'
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
