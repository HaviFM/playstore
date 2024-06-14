import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: '',
  standalone: true,
  imports: [NavComponent,CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'

})
export class AccueilComponent {
  developers = [
    { name: 'Mathieu', role: 'Developpeur - API Final Boss' },
    { name: 'Salah', role: 'Developpeur - Hardcore Maquettiste' },
    { name: 'Jossua', role: ' Developpeur - Route Master' },
    { name: 'Florian', role: 'Developpeur- Level Designer' }
  ];
}
