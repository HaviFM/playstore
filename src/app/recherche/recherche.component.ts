import { Component, inject,  OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { JsonPipe, CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  private route = inject(ActivatedRoute);

  service: ServiceService = inject(ServiceService);
  applis: any;
  title: string = "" ;
  paragraphe: string = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.title = params['title'];
       this.afficherRecherche(this.title);
    });
  }


  afficherRecherche(title: string){
    this.service.getRecherche(title).subscribe(data => {
      console.log(data);
      this.applis = data;
      this.paragraphe = "Résultat de votre recherche pour : " + title;
 
  }, 
  error => {
    console.error('There was an error!', error);
   
  });
  }
}