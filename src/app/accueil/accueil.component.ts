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
    { name: 'Mathieu', role: 'Developpeur' },
    { name: 'Salah', role: 'Developpeur' },
    { name: 'Jossua', role: ' Developpeur' },
    { name: 'Florian', role: 'Developpeur' }
  ];
}
