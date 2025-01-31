import {bootstrapApplication} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { BuildsComponent } from './app/components/builds/builds.component';
import { ItemsComponent} from './app/components/items/items.component';
import { TalentsComponent} from './app/components/talents/talents.component';
import { ParagonComponent} from './app/components/paragon/paragon.component';
import { CalculatorComponent} from './app/components/calculator/calculator.component';

bootstrapApplication(AppComponent).catch(err => console.error(err));

@NgModule ({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class AppModule {}

