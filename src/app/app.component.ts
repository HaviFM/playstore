import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicationComponent, JsonPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' ,
})

export class AppComponent {
  title = 'playstore';
  }

