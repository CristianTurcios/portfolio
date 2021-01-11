import { Component, OnInit } from '@angular/core';
import { IService } from './IServices';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Array<IService> = [];

  constructor() { }

  ngOnInit(): void {
    this.services = this.getServicesData();
  }

  getServicesData(): Array<IService> {
    return [{
      title: 'Web Development',
      description: 'Cuento con una sólida experiencia en el desarrollo de aplicaciones web adaptables, escalables y robustas que le ayudarán a lograr sus objetivos comerciales.',
      icon: 'icon icon-basic-laptop'
    },
    {
      title: 'App Development',
      description: 'Le ayudaré a crear y transformar su idea o producto en algo tangible sin problemas en cualquier dispositivo y a obtener lo mejor de la tecnología móvil para su negocio.',
      icon: 'icon icon-basic-smartphone'
    },
    {
      title: 'Chatbot Development',
      description: 'Reduzca el tiempo de espera de sus usuarios, atienda a sus preguntas más comunes y mejore su satisfacción con la implementación de un chatbot de IA totalmente personalizado a su negocio.',
      icon: 'icon icon-basic-message'
    },
    {
      title: 'Product Owner',
      description: 'Soy un product Owner certificado por SAFe con amplia experiencia en las metodologías ágiles y le ayudare a maximizar el valor del producto desarrollado por el Equipo de Desarrollo.',
      icon: 'icon icon-basic-lightbulb'
    },
    {
      title: 'Business analytics',
      description: '¿Desea saber más datos acerca de su negocio? A través de herramientas analiticas puedo ayudarle en la toma de decisiones dentro de su empresa y así ayudarle a maximizar el retorno de inversión que está obteniendo.',
      icon: 'icon icon-basic-globe'
    },
    {
      title: 'Clean Code',
      description: 'Cuento con muchos años de experiencia trabajando en muchos productos junto con equipos de desarrollo grandes, por lo que con mi trabajo obtendrá un código de calidad y siempre siguiendo los más altos estándares del mercado.',
      icon: 'icon icon-basic-laptop'
    }];
  }

}
