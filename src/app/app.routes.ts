import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationComponent } from './application/application.component';
import { AccueilComponent } from './accueil/accueil.component';


export const routes: Routes = [

     {path: "jeux", component: ApplicationComponent},
     {path: " ", component: AccueilComponent},
     
];
