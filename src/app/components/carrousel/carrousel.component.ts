import { Component } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true, 
      autoplayTimeout: 3000, 
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
      }
    });
  }

}
