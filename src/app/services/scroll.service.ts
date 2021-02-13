import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private scrollToService: ScrollToService) { }

  triggerScrollTo(target: string): void {
    const config: ScrollToConfigOptions = { target };
    this.scrollToService.scrollTo(config);
  }
}
