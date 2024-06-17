import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { JsonPipe, CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-application',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {

  service: ServiceService = inject(ServiceService);
  applis: any;
  paragraphe: string = "";

  afficherApplis(steamRatingPercent: string, upperPrice: string, lowerPrice: string, sortBy: string, id: string,){
    this.service.getApplis(steamRatingPercent , upperPrice, lowerPrice, sortBy).subscribe(data => {
      this.applis = data;
      console.log(id);
      this.paragraphe =  id;

  }, 
  error => {
    console.error('There was an error!', error);
   
  });
  }

  ngOnInit() {
    this.afficherApplis('90','50','0', 'Metacritic', 'Les classiques');
  }

}
