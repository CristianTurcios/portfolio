import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ITestimonial } from './ITestimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 2,
    margin: 50,
    slideBy: 'page',
    merge: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    autoplaySpeed: 4000,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 1000,
    dragEndSpeed: 350,
    center: false,
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 2
      }
    },
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
  };

  testimonials: Array<ITestimonial> = [];
  constructor() { }

  ngOnInit(): void {
    this.testimonials = this.getTestimonials();
  }

  getTestimonials(): Array<ITestimonial> {
    return [{
      name: 'John Doe',
      jobTitle: 'Manager',
      image: 'http://placehold.it/100x100',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor
                    incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.`,
    },
    {
      name: 'John Doe',
      jobTitle: 'Manager',
      image: 'http://placehold.it/100x100',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor
                    incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.`,
    },
    {
      name: 'John Doe',
      jobTitle: 'Manager',
      image: 'http://placehold.it/100x100',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor
                    incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.`,
    },
    {
      name: 'John Doe',
      jobTitle: 'Manager',
      image: 'http://placehold.it/100x100',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor
                    incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.`,
    },
    ];
  }

}
