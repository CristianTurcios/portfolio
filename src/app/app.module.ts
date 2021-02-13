import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageFilterPipe } from './pipes/image-filter.pipe';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutComponent,
    NavbarComponent,
    HeaderComponent,
    SkillsComponent,
    ResumeComponent,
    ImageFilterPipe,
    FooterComponent,
    ContactComponent,
    ClientsComponent,
    ServicesComponent,
    PortfolioComponent,
    StatisticsComponent,
    TestimonialsComponent,
    CertificationsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    NgImageFullscreenViewModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
