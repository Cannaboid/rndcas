import {Component, OnInit, HostListener } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import {SidebarComponent} from './common/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    HomeComponent,
    RouterOutlet,
    FooterComponent,
    SidebarComponent,
  ],

  standalone: true
})

export class AppComponent {

}
