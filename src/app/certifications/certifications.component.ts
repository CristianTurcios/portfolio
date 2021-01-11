import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICertification } from './ICertification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    margin: 10,
    slideBy: 'page',
    merge: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 4000,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    center: false,
    startPosition: 0,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: false
  };

  certifications: Array<ICertification> = [];

  constructor() { }

  ngOnInit(): void {
    this.certifications = this.getCertifications();
  }

  getCertifications(): Array<ICertification> {
    return [{
      title: 'SAFe Product Owner',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FSAFe5-POPMpx.png?alt=media&token=59900e11-c356-46c8-a320-dc0d0806254a',
      link: '',
    },
    {
      title: 'Udemy Angular Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FAngular.png?alt=media&token=d9f27be6-3fa3-4f2d-81c8-d7163245ec73',
      link: '',
    },
    {
      title: 'Udemy React Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FReact.png?alt=media&token=24983bb0-4226-4add-9c43-28995c1c7cc8',
      link: '',
    },
    {
      title: 'Udemy NodeJS Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2Fnodejs.png?alt=media&token=37345cb1-4c81-4150-84f5-7524af037b72',
      link: '',
    },
    {
      title: 'Udemy PowerBI Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FPowerBI.png?alt=media&token=a41b57c9-1068-42c0-b26f-23f2a900e732',
      link: '',
    },
    {
      title: 'Udemy CSS3 Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FCSS3.png?alt=media&token=eb97a4ad-260e-4648-9576-d536867a3f85',
      link: '',
    },
  ];
  }
}
