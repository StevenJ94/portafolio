import { Component, EventEmitter, Output } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AlertModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})



export class SidebarComponent {

  habilidadesTecnicas: Array<ht> = [
    {
      title: 'Angular',
      icon: 'fab fa-angular'
    },
    {
      title: 'React',
      icon: 'fab fa-react'
    },
    {
      title: 'Html',
      icon: 'fab fa-html5'
    },
    {
      title: 'Css',
      icon: 'fab fa-css3-alt'
    },
    {
      title: 'Bootstrap',
      icon: 'fab fa-bootstrap'
    },
    {
      title: 'Git',
      icon: 'fab fa-git-alt'
    },
    // {
    //   title: 'Wordpress',
    //   icon: 'fab fa-wordpress'
    // }
  ]

  ageCalculate(fecha: string) {
    const fechaInicio = new Date(fecha); // Fecha de inicio de trabajo
    const fechaActual = new Date(); // Fecha actual

    let añosLaborales = fechaActual.getFullYear() - fechaInicio.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesInicio = fechaInicio.getMonth();

    // Ajustar los años laborales si aún no se ha alcanzado el mes de inicio en el año actual
    if (mesActual < mesInicio || (mesActual === mesInicio && fechaActual.getDate() < fechaInicio.getDate())) {
      añosLaborales--;
    }
    return `${añosLaborales} años`;
  }

  copiarTexto() {
    // Crear un elemento de texto
    const inputElement = document.createElement('textarea');
    inputElement.value = 'stevenruiz.p94@gmail.com';

    // Añadir el elemento al DOM
    document.body.appendChild(inputElement);

    // Seleccionar el texto
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto
    document.execCommand('copy');

    // Eliminar el elemento del DOM
    document.body.removeChild(inputElement);

    // Mostrar un mensaje de confirmación (opcional)
    alert('Texto copiado');
  }

}

interface ht {
  title: string;
  icon: string;
}
