import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { JsonPipe, CommonModule } from '@angular/common';

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

  afficherApplis(){
    this.service.getApplis().subscribe(data => {
      this.applis = data;
      console.log(data);
  }, 
  error => {
    console.error('There was an error!', error);
   
  });
  }
}
