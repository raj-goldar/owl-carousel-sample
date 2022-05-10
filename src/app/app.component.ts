import { Component } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  groupArr:any=[]
  data:any =[]
  dynamicSlides = [
    {
      id: 1,
      src: 'https://via.placeholder.com/600/92c952',
      alt: 'Side 1',
      title: 'Side 1',
      cat:'cat1'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/600/771796',
      alt: 'Side 2',
      title: 'Side 2',
      cat:'cat1'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600/24f355',
      alt: 'Side 3',
      title: 'Side 3',
      cat:'cat1'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat1'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      cat:'cat1'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat2'
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      cat:'cat2'
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat2'
    },
    {
      id: 9,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      cat:'cat2'
    },
    {
      id: 10,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat2'
    },
    {
      id: 11,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat3'
    },
    {
      id: 12,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      cat:'cat3'
    },
    {
      id: 13,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat3'
    },{
      id: 14,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      cat:'cat3'
    },
    {
      id: 15,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      cat:'cat3'
    },
  ]; // not update this data
  constructor() {
    this.data  = this.dynamicSlides;

    this.groupArr = [...new Set(this.dynamicSlides.map(item => item.cat))];

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };


  filterCarousel(e?:any){
    this.data = this.dynamicSlides.filter((item?:any)=>{
      if(e == 'all'){
        return item;
      }else if(item.cat == e){
        return item;
      }
    });
  }

}
