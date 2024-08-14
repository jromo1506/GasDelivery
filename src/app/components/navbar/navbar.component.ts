import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMobile:boolean = true;


  showMobileMenu(){
    if(this.showMobile){
      $('#mobile-opts').fadeToggle(500);
    }
   
  }

} 
