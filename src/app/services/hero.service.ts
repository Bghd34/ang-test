import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros() {
    const heros = [
      {id: 11, name: 'a'},
      {id: 12, name: 'b'},
      {id: 13, name: 'c'},
      {id: 14, name: 'd'},
      {id: 15, name: 'e'},
      {id: 16, name: 'f'},
      {id: 17, name: 'g'},
      {id: 18, name: 'h'},
      {id: 19, name: 'j'},
      {id: 20, name: 'k'},
    ]

    return heros;
  }
}
