import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  httpClient = inject(HttpClient);
  allPokemon: any[] = [];

  ngOnInit(): void {
    this.fetchData();
   }

  fetchData() {
    this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((data: any) => {
        this.allPokemon = data.results;
        console.log(this.allPokemon);
      });
  }
}
