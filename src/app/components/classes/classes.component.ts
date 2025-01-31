import {CommonModule} from '@angular/common';
import {Component, HostListener, OnInit} from '@angular/core';
import {TabStateService} from '../../tab-state.service';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-paragon',
  templateUrl: 'classes-component.html',
  styleUrls: ['classes-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink
  ],
})

export class ClassesComponent implements OnInit {
  classes = [
    {
      name: 'Barbarian',
      icon: '/images/icons/barbarian-icon.webp',
      sprite: '/images/sprites/barbarian-sprite.png',
      description: 'The Barbarian has unparalleled strength and expertly wields an entire arsenal in battle, with a weapon for every occasion. He bellows intimidating war cries and unleashes ground-shaking slams to send approaching hordes reeling.'
    },
    {
      name: 'Druid',
      icon: '/images/icons/druid-icon.webp',
      sprite: '/images/sprites/druid-sprite.png',
      description: 'The Druid is a savage shapeshifter, fluidly transforming between the forms of a towering bear or a vicious werewolf to fight alongside the creatures of the wild. He also commands the power of earth, wind, and storm, unleashing nature’s wrath to devastating effect.'
    },
    {
      name: 'Sorcerer',
      icon: '/images/icons/sorcerer-icon.webp',
      sprite: '/images/sprites/sorcerer-sprite.png',
      description: 'The Sorcerer shapes the elements into whatever form is necessary to ensure victory, from hurling bolts of lightning, impaling her foes upon jagged spikes of ice, and raining flaming meteors down from the sky.'
    },
    {
      name: 'Rogue',
      icon: '/images/icons/rogue-icon.webp',
      sprite: '/images/sprites/rogue-sprite.png',
      description: 'The Rogue is an adaptable, agile warrior who can specialize in ranged or close quarters combat. She can best any foe with her imbued weapons, perform powerful combo attacks, and can augment her arsenal with deadly poisons and shadow magic to slay demons with impunity.'
    },
    {
      name: 'Necromancer',
      icon: '/images/icons/necromancer-icon.webp',
      sprite: '/images/sprites/necromancer-sprite.png',
      description: 'Necromancers are cunning summoners that conjure vengeful hordes of the undead. Their Essence flows into three powerful bastions of Bone, Blood, or Shadow to bring low their enemies.'
    },
    {
      name: 'Spiritborn',
      icon: '/images/icons/spiritborn-icon.png',
      sprite: '/images/sprites/spiritborn-sprite.png',
      description: 'The Spiritborn, apex predator of the Nahantu jungle, is poised to strike. With expert agility and mobility, they strike down foes with visceral ferocity, utilizing glaives, quarterstaves, and polearms as an extension of themselves. They channel the immense power and abilities of the four Spirit Guardians in battle, able to adapt to whatever is the swiftest path to dominance.'
    }
  ];

  activeClass = this.classes[0].name;
  activeClassDescription = this.classes[0].description;
  activeClassSprite = this.classes[0].sprite;

  /* move image default */
  translateX: number = 0;
  translateY: number = 0;

  /* move image slightly when mouse is moved */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    this.translateX = (event.clientX - centerX) / 85;
    this.translateY = (event.clientY - centerY) / 85;
  }

  logClick() {}

  constructor(private tabStateService: TabStateService) {}

  ngOnInit(): void {
    // Sync activeClass with the service when the component initializes
    this.tabStateService.activeClass$.subscribe(className => {
      this.activeClass = className;
    });
  }

  /* set the active class and info */
  setActive(selectedClass: any, event: Event) {
    event.preventDefault();
    this.activeClass = selectedClass.name;
    this.activeClassDescription = selectedClass.description;
    this.activeClassSprite = selectedClass.sprite;
    this.tabStateService.setActiveClass(selectedClass.name);
  }
}
