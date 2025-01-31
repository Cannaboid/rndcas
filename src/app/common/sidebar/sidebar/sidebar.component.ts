import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TabStateService } from '../../../tab-state.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar-component.html',
  styleUrls: ['sidebar-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
})

export class SidebarComponent {
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

  activeClass: string = 'Barbarian'; // Default class
  constructor(private tabStateService: TabStateService) {}

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
    });
  }
}

