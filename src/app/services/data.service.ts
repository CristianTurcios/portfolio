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
    return [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2Fcover.png?alt=media&token=cdfddb0d-fe2d-4e36-9783-f0cb1b935678',
      title: 'OneCampus by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onecampus',
      link: 'https://onecampus.laureate.net/',
      public: true,
      tags: [
        'Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'ESLint', 'REST Api', 'GCP',
        'Google Functions', 'TypeScript', 'BigQuery', 'Google Analytics', 'CouchDB']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2Fcover.png?alt=media&token=cebe5018-0dad-40c3-9835-c1b9c89b0c93',
      title: 'OneFaculty by Laureate',
      description: 'Web Development',
      category: 'web',
      project: 'onefaculty',
      link: 'https://onefaculty.laureate.net/',
      public: true,
      tags: [
        'Angular', 'Python', 'NodeJS', 'Firebase', 'Firestore', 'Flask', 'ESLint', 'REST Api',
        'Google Functions', 'TypeScript', 'BigQuery', 'Google Analytics', 'CouchDB']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fwalden%2Fcover.png?alt=media&token=4195eb5e-c781-439e-82d2-6acdf9ad9135',
      title: 'Walden University Portal',
      description: 'Web Development',
      category: 'web',
      project: 'walden',
      link: 'https://www.waldenu.edu/',
      public: true,
      tags: [
        'AngularJS', 'React', 'React Hooks', 'NodeJS', 'Express', 'GraphQL', 'cosmosDB', 'Microsoft Azure', 'TypeORM',
        'TypeScript', 'Azure Functions', 'SQL Server'
      ]
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2Fcover.png?alt=media&token=50dd3b68-40ea-4277-8427-303f50876919',
      title: 'Sumadi - Management Site',
      description: 'Web Development',
      category: 'web',
      project: 'mgsite',
      link: 'https://d1ku7cjalkbvr2.cloudfront.net/',
      public: true,
      tags: [
        'React', 'React Hooks', 'NodeJS', 'NestJS', 'GraphQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
        'ESLint', 'REST Api', 'EC2', 'S3', 'Mongoose', 'TypeORM', 'PostgreSQL'
      ]
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FinnovationTC%2Fcover.png?alt=media&token=3dfa9948-bc6f-4e75-bcfe-2914caa570d0',
      title: 'InnovationTC Website',
      description: 'Web Development',
      category: 'web',
      project: 'innovationTC',
      link: 'https://suspicious-darwin-ba18dd.netlify.app/#/inicio',
      public: true,
      tags: ['Angular', 'REST API', 'SASS', 'PHP', 'Laravel', 'SQL Server']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fcharlotte%2Fcover.png?alt=media&token=be07a1c0-0c8a-4f7f-b27f-36f7a9a5a26d',
      title: 'Charlotte Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'charlotte',
      link: '',
      public: false,
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Farturo%2Fcover.png?alt=media&token=dd9da594-a58c-4cb9-84b9-b12616b1b383',
      title: 'Arturo Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'arturo',
      link: '',
      public: false,
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fallan%2Fcover.png?alt=media&token=3512dcd2-e716-4565-9973-64e52eeab634',
      title: 'Allan Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'allan',
      link: '',
      public: false,
      tags: ['Avaamo', 'JavaScript', 'REST API', 'cosmosDB', 'Mongoose']
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2Fcover.png?alt=media&token=61095987-aaf1-4058-a4cf-d29c8bf77d12',
      title: 'Sumadi Chatbot',
      description: 'Chatbot Development',
      category: 'chatbot',
      project: 'sumadiChatbot',
      link: '',
      public: false,
      tags: [
        'Nestjs', 'Angular', 'Angular Elements', 'Mongo', 'Mongoose', 'PostgreSQL', 'TypeORM', 'TypeScript',
        'ESLint', 'React', 'React Hooks', 'AWS', 'DialogFlow', 'Google Cloud Functions', 'GraphQL', 'Zendesk Api',
        'Socket.io'
      ]
    }];
  }

  getProjectsData(): Array<any> {
    return [
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F1.png?alt=media&token=e1d603f4-7890-4c0d-984a-8e3c2b43d623' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F2.png?alt=media&token=fdc7792c-ffb8-41a5-b2d2-ac5bd0894e1c' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F3.png?alt=media&token=c8c5f071-2fb8-4b92-94f6-e97e8436a6b0' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F4.png?alt=media&token=e6b3218f-3976-4d27-b14d-bf26b655f503' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F5.png?alt=media&token=7feea7a3-7539-4bb6-a286-05608be41760' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F6.png?alt=media&token=7508dd48-cd2f-44e4-9496-796fb743f10a' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F7.png?alt=media&token=4c10932a-25a2-4ea4-9b18-c3fc00f22d2b' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F8.png?alt=media&token=6ee2fb0e-7509-4548-ac50-bc8aefcb1692' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F9.png?alt=media&token=7dd90b93-6295-47b5-8eb3-666a22885e6e' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonecampus%2F10.png?alt=media&token=2e138696-9072-4b91-828d-140d0bf05699' },
        ],
        project: 'onecampus',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F1.png?alt=media&token=8be8dfe7-c53d-4845-bb62-ebbfb5dcc8c2' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F2.png?alt=media&token=712b41bd-2e6c-4579-8609-b87e8351abcf' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F3.png?alt=media&token=4e034561-f213-4189-9341-f000728499be' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F4.png?alt=media&token=ff78b2f5-f764-4abd-9368-14d60d39ba1a' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F5.png?alt=media&token=a860ddf4-0882-4e3b-b759-a54d273d6980' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F6.png?alt=media&token=d3bd0003-7f77-4f46-8480-cd45854dad90' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F7.png?alt=media&token=79cc4db5-048e-4f17-b004-1ca4ccad39f4' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F8.png?alt=media&token=a7777587-7279-47fc-84a7-400767322262' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F9.png?alt=media&token=4406afeb-1561-43f6-8c9b-979c43511e17' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F10.png?alt=media&token=6d3c55f6-7559-4094-9275-04c6c8799b1d' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F11.png?alt=media&token=60061f43-dc94-4f87-9761-34b6e4504d08' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fonefaculty%2F12.png?alt=media&token=6061e7de-7608-4e2d-a22b-6a9664928219' },
        ],
        project: 'onefaculty',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fwalden%2F1.png?alt=media&token=bb5b165f-f88c-4e1c-b263-4396e3591e53' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fwalden%2F2.png?alt=media&token=ab2f2565-3815-4bb8-ad90-e6516c754bd3' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fwalden%2F3.png?alt=media&token=61c1845d-b758-4597-a358-8b59077922f3' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fwalden%2F4.png?alt=media&token=3ad30929-b64c-41c0-a594-1c680c48ca07' },
        ],
        project: 'walden',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F1.png?alt=media&token=95fe6252-c4bb-4420-a08d-59ea2c375454' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F2.png?alt=media&token=d5e62cc4-f9b8-436e-870f-304e058de359' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F3.png?alt=media&token=97851dee-6689-4293-a5ae-a377b00a2535' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F4.png?alt=media&token=a22bc8ac-1ab2-40b4-8847-e9ff2151c8e6' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F5.png?alt=media&token=204ac538-ff0e-4b63-b8c2-92e7222c6951' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fmgsite%2F6.png?alt=media&token=fa0f1a33-c74f-4fc6-9b19-ebd6aca8858f' },
        ],
        project: 'mgsite',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FinnovationTC%2F1.png?alt=media&token=e87a1dc7-74b3-4f3c-899c-a60e10f9f420' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FinnovationTC%2F2.png?alt=media&token=4125da35-a3c1-4c6a-8eaf-d124b4e8e950' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FinnovationTC%2F3.png?alt=media&token=54146632-1b2f-4334-96d5-3d0dc1213ce3' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FinnovationTC%2F4.png?alt=media&token=c9f11c66-0646-47e8-a86e-6727d08c2922' },

        ],
        project: 'innovationTC',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fcharlotte%2F1.png?alt=media&token=60d49fc9-a5b9-4c35-9431-3c014bc44ed4' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fcharlotte%2F2.png?alt=media&token=2504f62c-e86d-4a7c-82af-1c322fb33d65' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fcharlotte%2F3.png?alt=media&token=de18ab13-39e4-45dd-930b-6ef880fdec12' },
        ],
        project: 'charlotte',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Farturo%2F1.png?alt=media&token=4e7a5c0c-0f83-4bbd-be05-f443640aa7df' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Farturo%2F2.png?alt=media&token=141cd6f5-5085-42bb-9ad5-020cb9fe2491' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Farturo%2F3.png?alt=media&token=705c0aea-9f12-473c-846b-8ebb0225f0a9' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Farturo%2F4.png?alt=media&token=ca5b2051-81fc-4d5c-8493-0b43b2fb9663' },
        ],
        project: 'arturo',
      }, {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fallan%2F1.png?alt=media&token=3ef0b6a1-9462-456b-92a5-ba9ce51772c4' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fallan%2F2.png?alt=media&token=6f6484d7-5533-4a92-a7d9-96865c1f1f8a' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2Fallan%2F3.png?alt=media&token=6707d256-858b-4a85-aec7-7b901663a1f5' },
        ],
        project: 'allan',
      },
      {
        images: [
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F6.png?alt=media&token=265e8a11-8e4f-4ed4-8743-181f4e62f246' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F1.png?alt=media&token=8a04a9eb-b488-4fce-a80e-c8f04162c652' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F2.png?alt=media&token=a3cffdca-4099-4ad3-baff-e9f239fbbe82' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F3.png?alt=media&token=39a105e2-2c91-480d-a527-afdbe93e2341' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F4.png?alt=media&token=9d94f85c-46be-45ac-b96e-c7bd1e1a308d' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F7.png?alt=media&token=a106f409-7590-435f-bf21-60bc1944e6fd' },
          { image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d6486.appspot.com/o/projects%2FsumadiChatbot%2F8.png?alt=media&token=51a1ff1a-994f-4e0b-9ab3-3a52b37ddde2' },

        ],
        project: 'sumadiChatbot',
      },
    ];
  }
}
