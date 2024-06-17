import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { ServiceService } from '../service.service';
import { Injectable, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  service: ServiceService = inject(ServiceService);
  applis: any;
  private router = inject(Router);

  rechercher(title: any){
    
      this.router.navigate([`/recherche/${title}`]);
  }
}
