import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  image_une!:string
  image_deux!:string
  image_homme!:string
  image_femme!:string
  ngOnInit(): void {
      this.image_une='../../assets/images/pexels-vecislavas-popa-1571460.png'
      this.image_deux="../../assets/images/pexels-lisa-fotios-1090638.png"
      this.image_homme ="../../assets/images/pexels-pixabay-220453.png"
      this.image_femme ="../../assets/images/pexels-andrea-piacquadio-774909.png"
  }

}
