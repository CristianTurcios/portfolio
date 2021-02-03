import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IService } from 'src/app/services/IData';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Array<IService> = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.services = this.dataService.getServicesData();
  }
}
