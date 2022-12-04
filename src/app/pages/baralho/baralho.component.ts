import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero.model';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})
export class BaralhoComponent implements OnInit {
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

  baralho: Hero[] = [];

  indiceHero: number;

  constructor() { }

  ngOnInit(): void {
  }

  addCartaAoBaralho(hero: Hero){
    this.baralho.push(hero)
  }

}
