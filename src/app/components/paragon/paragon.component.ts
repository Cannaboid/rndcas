import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';

@Component({
  selector: 'app-paragon',
  templateUrl: 'paragon-component.html',
  styleUrls: ['paragon-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class ParagonComponent implements OnInit {
  activeClass: string = 'Barbarian'; // Default class
  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
    });
  }
}
