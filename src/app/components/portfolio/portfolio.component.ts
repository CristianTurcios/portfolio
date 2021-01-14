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
    title: 'OneCampus',
    description: 'Web Development',
    category: 'web',
    project: 'onecampus',
    tags: ['Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'GCP']
  },
  {
    image: 'http://placehold.it/602x602',
    title: 'Mobile Creative Design',
    tags: [],
    category: 'mobile',
    project: 'onefaculty'
  },
  {
    image: 'http://placehold.it/600x600',
    title: 'Chatbot Creative Design',
    tags: [],
    category: 'chatbot',
    project: 'walden'
  },
  {
    image: 'http://placehold.it/600x600',
    title: 'OneFaculty',
    tags: [],
    category: 'web',
    project: 'learner'
  },
  {
    image: 'http://placehold.it/600x600',
    title: 'Mobile Creative Design',
    tags: [],
    category: 'mobile',
    project: 'innovation'
  },
  {
    image: 'http://placehold.it/600x600',
    title: 'Chatbot Creative Design',
    tags: [],
    category: 'chatbot',
    project: 'cofinter'
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
