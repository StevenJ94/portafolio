import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  //@ts-ignore
  @Input() data: project;
}

interface project {
  title: string;
  description: string;
  imagen: string;
  url: string;
}
