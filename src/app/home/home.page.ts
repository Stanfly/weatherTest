import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StoreService } from '../services/store.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'home.page.media.scss', 'home.page.beforeLoaded.scss'],
})
export class HomePage {
  loaded = false;
  math = Math;
  keyboardHeight = 0;
  constructor(
    private api: ApiService,
    public store: StoreService,
    private geo: Geolocation
  ) {
    window.addEventListener('native.keyboardshow', (e: any) => {
      this.keyboardHeight = e.keyboardHeight;
      console.log(this.keyboardHeight)
    });
    
    this.getWeatherByCityName('Москва')
  }
  public toggleUnit() {
    this.store.celsius = !this.store.celsius;
  }
  detectLocation() {
    let options = { timeout: 10000, enableHighAccuracy: false, maximumAge: 3600 };
    this.geo.getCurrentPosition(options)
      .then(res => {
        this.loaded = true;
        console.log(res)
        this.api.getWeatherByLatLng({ lat: res.coords.latitude, lng: res.coords.longitude })
      })
      .catch(err => {
        console.error(err)
      })
  }

  getWeatherByCityName(cityName) {
    console.log(this.store);
    this.api.getWeatherByCityName(cityName)
      .then(res => {
        this.loaded = true;
        this.store.cityInputVisible = false
      })
      .catch(err => {
        this.store.cityInputVisible = false
      })
  }
}
