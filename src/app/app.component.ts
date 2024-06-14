import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { JsonPipe, CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { RechercheComponent } from './recherche/recherche.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ApplicationComponent, JsonPipe, CommonModule, RouterOutlet, NavComponent, RechercheComponent], 
})



export class AppComponent {
  title = 'playstore';

  }


