import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  filterBy = 'all';
  showFlag: boolean;
  currentProject: number;
  visibleImages: any[] = [{
    image: 'http://placehold.it/601x601',
    title: 'OneCampus by Laureate',
    description: 'Web Development',
    category: 'web',
    project: 'onecampus',
    link: 'https://onecampus.laureate.net/',
    tags: ['Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'GCP']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'OneFaculty by Laureate',
    description: 'Web Development',
    category: 'web',
    project: 'onefaculty',
    link: 'https://onefaculty.laureate.net/',
    tags: ['Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'GCP']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'Walden University Portal',
    description: 'Web Development',
    category: 'web',
    project: 'walden',
    link: 'https://www.waldenu.edu/',
    tags: ['React', 'NodeJS', 'Express', 'GraphQL', 'cosmosDB', 'Microsoft Azure']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'Sumadi - Management Site',
    description: 'Web Development',
    category: 'web',
    project: 'managementSite',
    link: 'https://www.waldenu.edu/',
    tags: ['React', 'NodeJS', 'NestJS', 'GraphQL', 'MongoDB', 'Docker', 'AWS']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'Cofinter App',
    description: 'Mobile Development',
    category: 'mobile',
    project: 'cofinter',
    link: '',
    tags: ['Angular', 'NativeScript', 'REST API', 'SQLServer', 'PHP']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'Charlotte Chatbot',
    description: 'Chatbot Development',
    category: 'chatbot',
    project: 'charlotte',
    link: '',
    tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB']
  }];

  projects: Array<any> = [
    {
      images: [
        {
          image: 'http://placehold.it/601x601'
        },
        {
          image: 'http://placehold.it/601x601'
        },
      ],
      title: 'onecampus',
    },
    {
      images: [
        {
          image: 'http://placehold.it/602x602'
        },
        {
          image: 'http://placehold.it/602x602'
        },
      ],
      title: 'onefaculty',
    },
  ];

  constructor() {
    this.showFlag = false;
    this.currentProject = 0;
  }

  ngOnInit(): void {
  }

  setProject(projectIndex: number): void {
    event?.preventDefault();
    this.currentProject = projectIndex;
    this.showFlag = true;
  }

  changeFilter(filter: string): void {
    this.filterBy = filter;
  }

  closeEventHandler(): void {
    this.showFlag = false;
  }
}
