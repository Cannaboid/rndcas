import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-paragon',
  templateUrl: 'classes-component.html',
  styleUrls: ['classes-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
})

export class ClassesComponent implements OnInit {
  activeClass: string = 'Barbarian'; // Default class

  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
    });
  }

  setActive(selectedClass: any, event: Event) {
    event.preventDefault();
    this.activeClass = selectedClass.name;
    this.tabStateService.setActiveClass(selectedClass.name);
  }
}
