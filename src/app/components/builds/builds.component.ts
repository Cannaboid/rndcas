import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';

@Component({
  selector: 'app-builds',
  templateUrl: 'builds-component.html',
  styleUrls: ['builds-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class BuildsComponent implements OnInit {
  activeClass: string = 'Barbarian'; // Default class
  builds = [
    {
      name: 'Meta builds',
      sorts: <Record<string, string[]>>{
        Barbarian: ['Whirlwind Quakestomp', 'Leap Earthquake'],
        Druid: ['Wolf Companion Druid', 'Bouldercane'],
        Sorcerer: ['Fireball', 'Lightning Spear', 'Inferno'],
        Rogue: ['Death Trap', 'Rain of Arrows'],
        Necromancer: ['Bloodwave', 'Mendeln Summoner', 'Alpha Blood Wave'],
        Spiritborn: ['Orange Quill', 'Rushing Claw', 'ORANGE HULK']
      }
    },
    {
      name: 'Leveling builds',
      sorts: <Record<string, string[]>>{
        Barbarian: ['Whirlwind Quakestomp', 'Silent Hota', 'Barb-Aura'],
        Druid: ['Wolf Companion Druid', 'Storm Shred Werewolf', 'Pulverize'],
        Sorcerer: ['Firewall', 'Chain Lightning', 'Blizzard (No Glacial)'],
        Rogue: ['Dance of Knives', 'Twisting Blade\'s', 'rogue legs 3'],
        Necromancer: ['Minions'],
        Spiritborn: ['Poison Centipede ', 'Quill Volley']
      }
    }
  ];

  filteredBuilds: any[] = [];

  constructor(private tabStateService: TabStateService) {
  }

  ngOnInit() {
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
      this.filterItems();
    });
  }

  filterItems() {
    this.filteredBuilds = this.builds.map(item => ({
      name: item.name,
      sorts: item.sorts[this.activeClass] || []
    }));
  }
}
