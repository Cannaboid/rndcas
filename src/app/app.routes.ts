import { Routes } from '@angular/router';
import {ItemsComponent} from './components/items/items.component';
import {BuildsComponent} from './components/builds/builds.component';
import {TalentsComponent} from './components/talents/talents.component';
import {ParagonComponent} from './components/paragon/paragon.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {HomeComponent} from './components/home/home.component';
import {ClassesComponent} from './components/classes/classes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'class', component: ClassesComponent },
  { path: 'uniques', component: ItemsComponent },
  { path: 'builds', component: BuildsComponent },
  { path: 'talents', component: TalentsComponent },
  { path: 'paragon', component: ParagonComponent },
  { path: 'calculator', component: CalculatorComponent },
];
