import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NavComponent,CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'

})
export class AccueilComponent {
  developers = [
    { name: 'Mathieu', role: 'Developer' },
    { name: 'Salah', role: 'Developer' },
    { name: 'Jossua', role: ' Developer' },
    { name: 'Florian', role: 'Developer' }
  ];
}
