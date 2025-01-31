import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items-component.html',
  styleUrls: ['items-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class ItemsComponent implements OnInit {
  activeClass: string = 'Barbarian'; // Default class
  items = [
    {
      name: 'Uniques',
      sorts: <Record<string, { name: string; description: string; image: string }[]>>{
        Barbarian: [
          {name: 'barb unique 1', description: 'A powerful Barbarian item.', image: 'barb1.jpg'},
          {name: 'barb unique 2', description: 'A powerful Barbarian item.', image: 'barb2.jpg'},
          {name: 'barb unique 3', description: 'A powerful Barbarian item.', image: 'barb3.jpg'}
        ],
        Druid: [
          {name: 'druid unique 1', description: 'A powerful Druid item.', image: 'druid1.jpg'},
          {name: 'druid unique 2', description: 'A powerful Druid item.', image: 'druid2.jpg'},
          {name: 'druid unique 3', description: 'A powerful Druid item.', image: 'druid3.jpg'}
        ],
        Sorcerer: [
          {name: 'Sorcerer unique 1', description: 'A powerful Sorcerer item.', image: 'Sorcerer1.jpg'},
          {name: 'Sorcerer unique 2', description: 'A powerful Sorcerer item.', image: 'Sorcerer2.jpg'},
          {name: 'Sorcerer unique 3', description: 'A powerful Sorcerer item.', image: 'Sorcerer3.jpg'}
        ],
        Rogue: [
          {name: 'Rogue unique 1', description: 'A powerful Rogue item.', image: 'Rogue1.jpg'},
          {name: 'Rogue unique 2', description: 'A powerful Rogue item.', image: 'Rogue2.jpg'},
          {name: 'Rogue unique 3', description: 'A powerful Rogue item.', image: 'Rogue3.jpg'}
        ],
        Necromancer: [
          {name: 'Necromancer unique 1', description: 'A powerful Necromancer item.', image: 'Necromancer1.jpg'},
          {name: 'Necromancer unique 2', description: 'A powerful Necromancer item.', image: 'Necromancer2.jpg'},
          {name: 'Necromancer unique 3', description: 'A powerful Necromancer item.', image: 'Necromancer3.jpg'}
        ],
        Spiritborn: [
          {name: 'Spiritborn unique 1', description: 'A powerful Spiritborn item.', image: 'Spiritborn1.jpg'},
          {name: 'Spiritborn unique 2', description: 'A powerful Spiritborn item.', image: 'Spiritborn2.jpg'},
          {name: 'Spiritborn unique 3', description: 'A powerful Spiritborn item.', image: 'Spiritborn3.jpg'}
        ],
      }
    },
  ];

  filteredItems: any[] = [];

  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
      this.filterItems();
    });
  }

  /* filter items to only show the current class selected */
  filterItems() {
    this.filteredItems = this.items.map(item => ({
      name: item.name,
      sorts: item.sorts[this.activeClass] || []
    }));
  }
}
