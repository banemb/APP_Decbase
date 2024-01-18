import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  image !:string
  deco!:string
  logo1!:string
  logo2!:string
  logo3!:string


  ngOnInit():void{
    this.image = '../../assets/images/toa-heftiba-FV3GConVSss-unsplash.png'
    this.deco ='../../assets/images/Group 54deco.png'
    this.logo1 ="../../assets/images/sr.png"
    this.logo2 ="../../assets/images/sd.png"
    this.logo3="../../assets/images/ere.png"
  }

}
