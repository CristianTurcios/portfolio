import { Injectable } from '@angular/core';
import { IService, IVisibleProjects } from './IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getServicesData(): Array<IService> {
    return [{
      title: 'Web Development',
      description: 'I have solid experience in developing robust, scalable and adaptable web applications to help you achieve your business goals and reach many more potential clients for your business.',
      icon: 'icon icon-basic-laptop'
    },
    {
      title: 'App Development',
      description: 'I will help you create and transform your idea or product into something tangible seamlessly on any device and get the best of mobile technology for your business.',
      icon: 'icon icon-basic-smartphone'
    },
    {
      title: 'Chatbot Development',
      description: 'Reduce the waiting time of your users, answer their most common questions and improve their satisfaction with the implementation of a fully customized AI chatbot for your business.',
      icon: 'icon icon-basic-message'
    },
    {
      title: 'Product Owner',
      description: 'I am a SAFe certified Product Owner and Product Manager with extensive experience in agile methodologies and I will help you maximize the value of the product developed by the Development Team.',
      icon: 'icon icon-basic-lightbulb'
    },
    {
      title: 'Business analytics',
      description: 'Do you want to know more information about your business? Through analytical tools I can help you in making decisions within your company and thus help you maximize the return on investment you are obtaining.',
      icon: 'icon icon-basic-globe'
    },
    {
      title: 'Clean Code',
      description: 'I have many years of experience working on many products together with large development teams, so with my work you will obtain a quality code and always following the highest standards in the market.',
      icon: 'icon icon-basic-laptop'
    }];
  }

  getVisibleImages(): Array<IVisibleProjects> {
    return [{
      image: '../../../assets/images/projects/onecampus/cover.png',
      title: 'OneCampus by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onecampus',
      link: 'https://onecampus.laureate.net/',
      tags: [
        'Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'ESLint', 'REST Api', 'GCP',
        'Google Functions', 'TypeScript', 'BigQuery', 'Google Analytics', 'CouchDB']
    },
    {
      image: '../../../assets/images/projects/onefaculty/cover.png',
      title: 'OneFaculty by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onefaculty',
      link: 'https://onefaculty.laureate.net/',
      tags: [
        'Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'ESLint', 'REST Api',
        'Google Functions', 'TypeScript', 'BigQuery', 'Google Analytics', 'CouchDB']
    },
    {
      image: '../../../assets/images/projects/walden/cover.png',
      title: 'Walden University Portal',
      description: 'Web Development',
      category: 'web',
      project: 'walden',
      link: 'https://www.waldenu.edu/',
      tags: [
        'AngularJS', 'React', 'React Hooks', 'NodeJS', 'Express', 'GraphQL', 'cosmosDB', 'Microsoft Azure', 'TypeORM',
        'TypeScript', 'Azure Functions', 'SQL Server'
      ]
    },
    {
      image: '../../../assets/images/projects/mgsite/cover.png',
      title: 'Sumadi - Management Site',
      description: 'Web Development',
      category: 'web',
      project: 'mgsite',
      link: 'https://www.waldenu.edu/',
      tags: [
        'React', 'React Hooks', 'NodeJS', 'NestJS', 'GraphQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
        'ESLint', 'REST Api', 'EC2', 'S3', 'Mongoose', 'TypeORM', 'PostgreSQL'
      ]
    },
    {
      image: '../../../assets/images/projects/innovationTC/cover.png',
      title: 'Cofinter App',
      description: 'Web Development',
      category: 'web',
      project: 'innovationTC',
      link: '',
      tags: ['Angular', 'REST API', 'SASS', 'PHP', 'Laravel', 'SQL Server']
    },
    {
      image: '../../../assets/images/projects/charlotte/cover.png',
      title: 'Charlotte Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'charlotte',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
    },
    {
      image: '../../../assets/images/projects/arturo/cover.png',
      title: 'Arturo Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'arturo',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
    },
    {
      image: '../../../assets/images/projects/allan/cover.png',
      title: 'Allan Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'allan',
      link: '',
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
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
        project: 'onecampus',
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
        project: 'onefaculty',
      },
      {
        images: [
          { image: '../../../assets/images/projects/walden/1.png' },
          { image: '../../../assets/images/projects/walden/2.png' },
          { image: '../../../assets/images/projects/walden/3.png' },
          { image: '../../../assets/images/projects/walden/4.png' },
        ],
        project: 'walden',
      },
      {
        images: [
          { image: '../../../assets/images/projects/mgsite/1.png' },
          { image: '../../../assets/images/projects/mgsite/2.png' },
          { image: '../../../assets/images/projects/mgsite/3.png' },
          { image: '../../../assets/images/projects/mgsite/4.png' },
          { image: '../../../assets/images/projects/mgsite/5.png' },
          { image: '../../../assets/images/projects/mgsite/6.png' },
        ],
        project: 'mgsite',
      },
      {
        images: [
          { image: '../../../assets/images/projects/charlotte/1.png' },
          { image: '../../../assets/images/projects/charlotte/2.png' },
          { image: '../../../assets/images/projects/charlotte/3.png' },
        ],
        project: 'innovationTC',
      },
      {
        images: [
          { image: '../../../assets/images/projects/charlotte/1.png' },
          { image: '../../../assets/images/projects/charlotte/2.png' },
          { image: '../../../assets/images/projects/charlotte/3.png' },
        ],
        project: 'charlotte',
      },
      {
        images: [
          { image: '../../../assets/images/projects/arturo/1.png' },
          { image: '../../../assets/images/projects/arturo/2.png' },
          { image: '../../../assets/images/projects/arturo/3.png' },
          { image: '../../../assets/images/projects/arturo/4.png' },
        ],
        project: 'arturo',
      }, {
        images: [
          { image: '../../../assets/images/projects/allan/1.png' },
          { image: '../../../assets/images/projects/allan/2.png' },
          { image: '../../../assets/images/projects/allan/3.png' },
        ],
        project: 'allan',
      },
    ];
  }
}
