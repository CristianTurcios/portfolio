import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IVisibleProjects } from 'src/app/services/IData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  filterBy = 'all';
  showFlag = false;
  currentProject = -1;
  visibleImages: Array<IVisibleProjects> = [];
  projects: Array<any> = [];

  imageIndex = 0;
  limit = 6;
  total!: number;
  offset!: number;
  splitArray: Array<any> = [];
  showButton!: boolean;
  filteredProjects!: Array<IVisibleProjects>;


  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.visibleImages = this.dataService.getVisibleImages();
    this.projects = this.dataService.getProjectsData();
    this.filterProjects();
  }

  setProject(project: string): void {
    this.currentProject = this.projects.findIndex((element: any) => element.project === project);
    this.imageIndex = 0;
    this.showFlag = true;
  }

  changeFilter(filter: string): void {
    this.filterBy = filter;
    this.filterProjects();
  }

  filterProjects(): void {
    this.showButton = true;
    this.offset = 0;

    const filteredByCategory = this.visibleImages.filter((item: IVisibleProjects) =>
    item.category.toLowerCase() === this.filterBy || this.filterBy === 'all');
    if (filteredByCategory.length > this.limit) {
      this.sliceProjects(filteredByCategory);
    } else {
      this.filteredProjects = filteredByCategory;
      this.showButton = false;
    }
  }

  sliceProjects(filteredByCategory: Array<IVisibleProjects>): void {
    this.splitArray = [];
    for (let i = 0; i < filteredByCategory.length / this.limit; i++) {
      this.splitArray.push(filteredByCategory.slice(this.limit * i, this.limit * (i + 1)));
    }
    this.total = this.splitArray.length - 1;
    this.filteredProjects = this.splitArray[0];
    this.offset = 1;
  }

  nextResults(): void {
    if (this.offset <= this.total) {
      this.filteredProjects = this.filteredProjects.concat(this.splitArray[this.offset]);
      this.offset++;
      this.showButton = this.offset <= this.total ? true : false;
    } else {
      this.showButton = false;
    }
  }

  closeEventHandler(): void {
    this.showFlag = false;
    this.currentProject = -1;
  }
}
