import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator-component.html',
  styleUrls: ['calculator-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class CalculatorComponent implements OnInit {
  activeClass: string = 'Barbarian'; // Default class
  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
    });
  }
}
