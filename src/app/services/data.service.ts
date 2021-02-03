import { Injectable } from '@angular/core';
import { IVisibleProjects } from './IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getVisibleImages(): Array<IVisibleProjects> {
    return [{
      image: '../../../assets/images/projects/onecampus/cover.png',
      title: 'OneCampus by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onecampus',
      link: 'https://onecampus.laureate.net/',
      tags: ['Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'GCP']
    },
    {
      image: '../../../assets/images/projects/onefaculty/cover.png',
      title: 'OneFaculty by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onefaculty',
      link: 'https://onefaculty.laureate.net/',
      tags: ['Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'GCP']
    },
    {
      image: '../../../assets/images/projects/walden/cover.png',
      title: 'Walden University Portal',
      description: 'Web Development',
      category: 'web',
      project: 'walden',
      link: 'https://www.waldenu.edu/',
      tags: ['React', 'NodeJS', 'Express', 'GraphQL', 'cosmosDB', 'Microsoft Azure']
    },
    {
      image: '../../../assets/images/projects/mgsite/cover.png',
      title: 'Sumadi - Management Site',
      description: 'Web Development',
      category: 'web',
      project: 'mgsite',
      link: 'https://www.waldenu.edu/',
      tags: ['React', 'NodeJS', 'NestJS', 'GraphQL', 'MongoDB', 'Docker', 'AWS']
    },
    {
      image: '../../../assets/images/projects/innovationTC/cover.png',
      title: 'Cofinter App',
      description: 'Mobile Development',
      category: 'web',
      project: 'cofinter',
      link: '',
      tags: ['Angular', 'REST API', 'HTML', 'SASS', 'PHP', 'Laravel', 'SQL Server']
    },
    {
      image: '../../../assets/images/projects/charlotte/cover.png',
      title: 'Charlotte Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'charlotte',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB']
    },
    {
      image: '../../../assets/images/projects/arturo/cover.png',
      title: 'Arturo Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'arturo',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB']
    },
    {
      image: '../../../assets/images/projects/allan/cover.png',
      title: 'Allan Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'allan',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB']
    }];
  }

  getProjectsData(): Array<any> {
    return [
      {
        images: [
          { image: '../../../assets/images/projects/onecampus/1.png' },
          { image: '../../../assets/images/projects/onecampus/2.png' },
          { image: '../../../assets/images/projects/onecampus/3.png' },
          { image: '../../../assets/images/projects/onecampus/4.png' },
          { image: '../../../assets/images/projects/onecampus/5.png' },
          { image: '../../../assets/images/projects/onecampus/6.png' },
          { image: '../../../assets/images/projects/onecampus/7.png' },
          { image: '../../../assets/images/projects/onecampus/8.png' },
          { image: '../../../assets/images/projects/onecampus/9.png' },
          { image: '../../../assets/images/projects/onecampus/10.png' },
        ],
        title: 'onecampus',
      },
      {
        images: [
          { image: '../../../assets/images/projects/onefaculty/1.png' },
          { image: '../../../assets/images/projects/onefaculty/2.png' },
          { image: '../../../assets/images/projects/onefaculty/3.png' },
          { image: '../../../assets/images/projects/onefaculty/4.png' },
          { image: '../../../assets/images/projects/onefaculty/5.png' },
          { image: '../../../assets/images/projects/onefaculty/6.png' },
          { image: '../../../assets/images/projects/onefaculty/7.png' },
          { image: '../../../assets/images/projects/onefaculty/8.png' },
          { image: '../../../assets/images/projects/onefaculty/9.png' },
          { image: '../../../assets/images/projects/onefaculty/10.png' },
          { image: '../../../assets/images/projects/onefaculty/11.png' },
          { image: '../../../assets/images/projects/onefaculty/12.png' },
        ],
        title: 'onefaculty',
      },
      {
        images: [
          { image: '../../../assets/images/projects/walden/1.png' },
          { image: '../../../assets/images/projects/walden/2.png' },
          { image: '../../../assets/images/projects/walden/3.png' },
          { image: '../../../assets/images/projects/walden/4.png' },
        ],
        title: 'walden',
      },
      {
        images: [
          { image: '../../../assets/images/projects/walden/1.png' },
          { image: '../../../assets/images/projects/walden/2.png' },
          { image: '../../../assets/images/projects/walden/3.png' },
          { image: '../../../assets/images/projects/walden/4.png' },
        ],
        title: 'mgsite',
      },
      {
        images: [
          { image: '../../../assets/images/projects/charlotte/1.png' },
          { image: '../../../assets/images/projects/charlotte/2.png' },
          { image: '../../../assets/images/projects/charlotte/3.png' },
        ],
        title: 'innovationTC',
      },
      {
        images: [
          { image: '../../../assets/images/projects/charlotte/1.png' },
          { image: '../../../assets/images/projects/charlotte/2.png' },
          { image: '../../../assets/images/projects/charlotte/3.png' },
        ],
        title: 'charlotte',
      },
      {
        images: [
          { image: '../../../assets/images/projects/arturo/1.png' },
          { image: '../../../assets/images/projects/arturo/2.png' },
          { image: '../../../assets/images/projects/arturo/3.png' },
          { image: '../../../assets/images/projects/arturo/4.png' },
        ],
        title: 'arturo',
      }, {
        images: [
          { image: '../../../assets/images/projects/allan/1.png' },
          { image: '../../../assets/images/projects/allan/2.png' },
          { image: '../../../assets/images/projects/allan/3.png' },
        ],
        title: 'allan',
      },
    ];
  }
}
