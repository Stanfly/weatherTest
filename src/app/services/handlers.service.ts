import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class HandlersService {

  constructor(
    private store: StoreService
  ) { }

  onWeatherData(weatherData: any) {
    this.store.weather = weatherData.data[0];
    let code = this.store.weather.weather.code;
    let iconName = '';
    if (code < 300) iconName = 'strom';
    if (code >= 300 && code < 700) iconName = 'rain';
    if (code >= 700 && code < 800) iconName = 'cloud';
    if (code == 800) iconName = 'sun';
    if (code >= 801 && code <= 803) iconName = 'partly cloudy';
    if (code > 803) iconName = 'cloud';
    this.store.iconPath = `assets/weather_icons/${iconName}.svg`;
    console.log(this.store.weather)
  }
}
