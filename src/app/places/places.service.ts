import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    // tslint:disable-next-line: max-line-length
    new Place('p1', 'Manhattan', 'Best beach in Ecuador', 'https://www.eltelegrafo.com.ec/media/k2/items/cache/07f0f9be6a4da917d5df245c5dbba243_XL.jpg', 158.99),
    // tslint:disable-next-line: max-line-length
    new Place('p2', 'Portland', 'Best town in Ecuador','http://i.eldiario.com.ec/fotos-manabi-ecuador/2016/05/20160524040000_el-centro-tiembla-ma-s.jpg ',128.99),
    // tslint:disable-next-line: max-line-length
    new Place('p3', 'Connecticut', 'Best place in Quito','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Laguna_artificial_en_Conocoto.jpg/800px-Laguna_artificial_en_Conocoto.jpg',183.99)
  ];


  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string){
    return {...this._places.find(p => 
      p.id === id
    )};
  }
}
