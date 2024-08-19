import { ProjectsComponent } from './../projects/projects.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagen: string = '/perfil.png';

  projects: Array<project> = [
    {
      title: 'SuperaT',
      description: 'SuperaT es una aplicación que permite el Recupera el control del personal y los procesos de tu negocio para aumentar la productividad.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722283666/p0amsa66mxaarkf14sz5.png',
      url: 'https://superat.co/'
    },
    {
      title: 'Unidrogas',
      description: 'Somos una empresa proveedora y distribuidora de medicamentos de la más alta calidad y con una gran variedad.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722283666/hci1d9vayzf70rghkjvf.jpg',
      url: 'https://unidrogas.com/'
    },
    {
      title: 'GIMED',
      description: 'GIMED S. A. S., es una empresa del sector farmacéutico y de consumo masivo,.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722283667/aqmlv5ej01dvtgqlwnci.png',
      url: 'https://www.gimed.com.co/'
    },
    {
      title: 'myothersidebeauty',
      description: 'Un Ecommerce enfocado a la venta de productos de belleza.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722289973/b81lknfpypqlu1hdekrq.jpg',
      url: 'https://www.myothersidebeauty.com/'
    },
    {
      title: 'Julienne',
      description: 'Un Ecommerce enfocado a la venta de productos de belleza.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722283667/akhnxvrcdvoaxoklmjco.jpg',
      url: 'https://juliennecosmetic.com/'
    },
    {
      title: 'GirosYa',
      description: 'Queremos ser reconocidos como una compañía que promueve el desarrollo.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722289987/ph3c7mkq654a5qrimnsw.png',
      url: 'https://girosya.co/'
    },
    {
      title: 'Binar10',
      description: 'Somos una Startup con un equipo PRO, que vive en función de la innovación.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722283667/wg8sshenpjpdjasqgmek.png',
      url: 'https://www.binar10.co/'
    },
    {
      title: 'Dropopular',
      description: 'Satisfacer las necesidades y expectativas de nuestros clientes, mediante el suministro oportuno de los productos farmacéuticos y afines.',
      imagen: 'https://res.cloudinary.com/drdnqwi4n/image/upload/v1722341317/cors7c2hkckotprdil6d.jpg',
      url: 'https://dropopular.com/'
    },
  ]
}


interface project {
  title: string;
  description: string;
  imagen: string;
  url: string;
}
