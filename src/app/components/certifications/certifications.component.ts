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
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FSAFEPOPM.webp?alt=media&token=2919af02-26d5-4ba5-a505-55470cb986fc',
      link: 'https://www.youracclaim.com/badges/16bf07c3-4cdc-40c6-b845-5cc71f5c6e1c',
    },
    {
      title: 'Udemy Angular Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FAngular.webp?alt=media&token=9758b50f-4c24-4fc5-9de1-cbb93164736a',
      link: 'https://drive.google.com/file/d/1OvoK13JLtN37M7GYcL6IwG4nTUoxvqUQ/view',
    },
    {
      title: 'Udemy React Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FReact.webp?alt=media&token=b912a7f4-6877-40e0-baa5-dbb74fe9b33d',
      link: 'https://www.udemy.com/certificate/UC-592e3115-d4a8-46fa-b93c-206435acc87f/',
    },
    {
      title: 'Udemy NodeJS Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FNodeJS.webp?alt=media&token=6d45aaca-3ef1-4857-8f55-af1697e67635',
      link: 'https://www.udemy.com/certificate/UC-e3d50214-4c40-401f-a30c-611c4484709a/',
    },
    {
      title: 'Udemy PowerBI Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FPowerBI.webp?alt=media&token=337df4de-eeac-49fe-8fe7-d767a5f606f2',
      link: 'https://www.udemy.com/certificate/UC-be08bf17-a848-422c-80c6-1a7915b82cc7/',
    },
    {
      title: 'Udemy CSS3 Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FCSS3.webp?alt=media&token=36392908-af30-49d4-9f1e-56dfd796a233',
      link: 'https://drive.google.com/file/d/145Ecz9a98V3XeFuY11i9nMjbSRk3jyR3/view',
    },
  ];
  }
}
