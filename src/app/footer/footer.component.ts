import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
   Email!:string
  logo!:string

   ngOnInit(): void {
       this.Email="StephPrad237@gmail.com"
       this.logo = '../../assets/images/logo.png'
   }


}
