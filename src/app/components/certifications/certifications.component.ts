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
    margin: 30,
    slideBy: 'page',
    merge: true,
    autoplay: true,
    autoplayTimeout: 5000,
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
      link: 'https://www.youracclaim.com/earner/earned/badge/16bf07c3-4cdc-40c6-b845-5cc71f5c6e1c',
    },
    {
      title: 'Udemy Angular Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FAngular.png?alt=media&token=d9f27be6-3fa3-4f2d-81c8-d7163245ec73',
      link: 'https://drive.google.com/file/d/1OvoK13JLtN37M7GYcL6IwG4nTUoxvqUQ/view',
    },
    {
      title: 'Udemy React Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FReact.png?alt=media&token=24983bb0-4226-4add-9c43-28995c1c7cc8',
      link: 'https://www.udemy.com/certificate/UC-592e3115-d4a8-46fa-b93c-206435acc87f/',
    },
    {
      title: 'Udemy NodeJS Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2Fnode-js.png?alt=media&token=5dd01448-5a17-4911-a67c-57e66e9aa915',
      link: 'https://www.udemy.com/certificate/UC-e3d50214-4c40-401f-a30c-611c4484709a/',
    },
    {
      title: 'Udemy PowerBI Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FPowerBI.png?alt=media&token=a41b57c9-1068-42c0-b26f-23f2a900e732',
      link: 'https://www.udemy.com/certificate/UC-be08bf17-a848-422c-80c6-1a7915b82cc7/',
    },
    {
      title: 'Udemy CSS3 Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FCSS3.png?alt=media&token=eb97a4ad-260e-4648-9576-d536867a3f85',
      link: 'https://drive.google.com/file/d/145Ecz9a98V3XeFuY11i9nMjbSRk3jyR3/view',
    },
  ];
  }
}
