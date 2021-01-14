import { Component, OnInit, AfterContentInit, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

  constructor() { }
  // constructor(@Inject(DOCUMENT) document: any) {
  // }

  ngOnInit(): void {
  }

  goToSection(section: string): void {
    const sectionId = document.getElementById(section) ;
    sectionId?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
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
