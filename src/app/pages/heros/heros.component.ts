import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../shared/model/hero.model';
import { BaralhoComponent } from '../baralho/baralho.component';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [
    {
      name: "Tanjiro Kamado",
      attribute: "Água",
      atk: 9,
      def: 3,
      image: 'images/tanjiro.jpg'
    },
    {
      name: "Nezuko Kamado",
      attribute: "Demônio",
      atk: 9,
      def: 3,
      image: 'images/nezuko.jpg'
    },
    {
      name: "Zenitsu Agatsuma",
      attribute: "Relâmpago",
      atk: 9,
      def: 3,
      image: 'images/zenitsu.jpg'
    },
    {
      name: "Inosuke Hashibira",
      attribute: "Besta",
      atk: 9,
      def: 3,
      image: 'images/inosuke.jpg'
    },
    {
      name: "Shinobu Kocho",
      attribute: "Insetos",
      atk: 9,
      def: 3,
      image: 'images/shinobu.jpg'
    },
    {
      name: "Giyu Tomioka",
      attribute: "Água",
      atk: 9,
      def: 3,
      image: 'images/tomioka.jpg'
    }
  ]

  indiceHero: number
  selecionou: boolean
  selected2: boolean
  hero1: Hero
  hero2:Hero

  choosingBattleMode: boolean

  arena = document.getElementById('arena')

  constructor() { }

  // @Output() heroChose = new EventEmitter()

  @ViewChild(BaralhoComponent)
  baralho: BaralhoComponent

  ngOnInit(): void
  {
    this.selecionou = false
    this.selected2 = false
  }

  choose(name: any, i:number, hero:Hero)
  {
    if(this.selecionou == true && this.selected2 == true)
    {
      alert('Heróis já escolhidos!')
    }
    else
    {
      this.choosingBattleMode = true
      this.indiceHero = i

      if(this.selecionou == true)
      {
        this.selected2 = true
        this.hero2 = hero
      } else
      {
        this.selecionou = true
        this.hero1 = hero
      }
    }
  }
}
