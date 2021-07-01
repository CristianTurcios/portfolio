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
      title: 'SAFe® 5 Product Owner/Product Manager',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FSAFEPOPM.webp?alt=media',
      link: 'https://www.youracclaim.com/badges/16bf07c3-4cdc-40c6-b845-5cc71f5c6e1c',
    },
    {
      title: 'SAFe® 5 DevOps Practitioner',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FSAFESDP.webp?alt=media',
      link: 'https://www.credly.com/badges/851abce4-8812-4287-aa59-574bc3e867cc/public_url',
    },
    {
      title: 'Udemy Angular Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FAngular.webp?alt=media',
      link: 'https://drive.google.com/file/d/1OvoK13JLtN37M7GYcL6IwG4nTUoxvqUQ/view',
    },
    {
      title: 'Udemy React Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FReact.webp?alt=media',
      link: 'https://www.udemy.com/certificate/UC-592e3115-d4a8-46fa-b93c-206435acc87f/',
    },
    {
      title: 'Udemy NodeJS Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FNodeJS.webp?alt=media',
      link: 'https://www.udemy.com/certificate/UC-e3d50214-4c40-401f-a30c-611c4484709a/',
    },
    {
      title: 'Udemy PowerBI Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FPowerBI.webp?alt=media',
      link: 'https://www.udemy.com/certificate/UC-be08bf17-a848-422c-80c6-1a7915b82cc7/',
    },
    {
      title: 'Udemy CSS3 Course',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/certifications%2FCSS3.webp?alt=media',
      link: 'https://drive.google.com/file/d/145Ecz9a98V3XeFuY11i9nMjbSRk3jyR3/view',
    },
  ];
  }
}
