import { Component, OnInit, AfterContentInit, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToUrl(url: string): void {
    window.open(url, '_blank');
  }


  ngAfterContentInit(): void {
    (() => {
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1.5) {
          navbar?.classList.add('nav-fixed');
          navbar?.classList.remove('fixed-top');
        } else {
          navbar?.classList.add('fixed-top');
          navbar?.classList.remove('nav-fixed');
        }
      });
    })();
  }

}
