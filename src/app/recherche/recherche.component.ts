import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { JsonPipe, CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [
    CommonModule, NavComponent, JsonPipe
  ],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss',
})
export class RechercheComponent {

  service: ServiceService = inject(ServiceService);
  applis: any;

  afficherRecherche(title: string){
    this.service.getRecherche(title).subscribe(data => {
      this.applis = data;
      //console.log(data);
  }, 
  error => {
    console.error('There was an error!', error);
   
  });
  }
}