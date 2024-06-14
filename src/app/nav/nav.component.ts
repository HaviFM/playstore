import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { ServiceService } from '../service.service';
import { Injectable, inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  service: ServiceService = inject(ServiceService);
  applis: any;

  rechercher(title: string){
    this.service.rechercher(title).subscribe(data => {
      this.applis = data;
      console.log(data);
    })
  }
}
