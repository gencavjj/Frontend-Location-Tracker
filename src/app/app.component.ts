import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { LocationMarker } from './location-marker';


@Component({
  selector: 'app-root',
  styles: [' .agm-map-container { height: 200px;}'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locationHistory: LocationMarker[];

  title = 'ng7-agm';
  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  latitude = 34.34379;
  longitude = -117.19548;

  constructor(private locationService: LocationService) {

  }

  ngOnInit() {
    this.locationService.get().subscribe(data => {
      this.locationHistory = data;
      console.log(this.locationHistory);

    });

  }
  //location = LOCATION_MARKER_DATA;
}