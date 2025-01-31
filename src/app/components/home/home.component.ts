import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home-component.html',
  styleUrls: ['home-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class HomeComponent implements OnInit {
  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
  }
}
