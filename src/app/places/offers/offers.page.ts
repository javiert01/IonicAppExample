import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offertedPlaces: Place[] = [];
  constructor(private placesService: PlacesService,
              private router: Router) { }

  ngOnInit() {
    this.offertedPlaces = this.placesService.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/','places','tabs', 'offers', 'edit', offerId]);
    console.log('Editing item', offerId);
  }

}
