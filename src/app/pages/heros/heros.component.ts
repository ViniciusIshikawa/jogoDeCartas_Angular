import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../shared/model/hero.model';
import { BaralhoComponent } from '../baralho/baralho.component';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  herois: Hero[] = [
    {
      nome: "Tanjiro Kamado",
      atributo: "Água",
      ataque: 9,
      defesa: 3,
      imagem: 'images/tanjiro.jpg'
    },
    {
      nome: "Nezuko Kamado",
      atributo: "Demônio",
      ataque: 9,
      defesa: 3,
      imagem: 'images/nezuko.jpg'
    },
    {
      nome: "Zenitsu Agatsuma",
      atributo: "Relâmpago",
      ataque: 9,
      defesa: 3,
      imagem: 'images/zenitsu.jpg'
    },
    {
      nome: "Inosuke Hashibira",
      atributo: "Besta",
      ataque: 9,
      defesa: 3,
      imagem: 'images/inosuke.jpg'
    },
    {
      nome: "Shinobu Kocho",
      atributo: "Insetos",
      ataque: 9,
      defesa: 3,
      imagem: 'images/shinobu.jpg'
    },
    {
      nome: "Giyu Tomioka",
      atributo: "Água",
      ataque: 9,
      defesa: 3,
      imagem: 'images/tomioka.jpg'
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
