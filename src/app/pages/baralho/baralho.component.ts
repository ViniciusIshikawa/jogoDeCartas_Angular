import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero.model';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})
export class BaralhoComponent implements OnInit {
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

  baralho: Hero[] = [];

  indiceHero: number;

  constructor() { }

  ngOnInit(): void {
  }

  addCartaAoBaralho(hero: Hero){
    this.baralho.push(hero)
  }

}
