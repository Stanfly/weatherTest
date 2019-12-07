import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandlersService } from './handlers.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '013090a597ac4f058189f919a1753268'

  constructor(
    private http: HttpClient,
    private handlers: HandlersService
  ) { }

  getWeatherByCityName(cityName: string): Promise<any> {
    return new Promise((resolved, rejected) => {
      this.get(`http://api.weatherbit.io/v2.0/current?lang=ru&city=${cityName}&key=${this.apiKey}`)
        .then(res => {
          this.handlers.onWeatherData(res);
          resolved(res);
        })
        .catch(err => {
          rejected(err);
        })
    })
  }
  getWeatherByLatLng(latlng: { lat: number, lng: number }): Promise<any> {
    return new Promise((resolved, rejected) => {
      this.get(`http://api.weatherbit.io/v2.0/current?lang=ru&lat=${latlng.lat}&lon=${latlng.lng}&key=${this.apiKey}`)
        .then(res => {
          this.handlers.onWeatherData(res);
          resolved(res);
        })
        .catch(err => {
          rejected(err);
        })
    })
  }



  private get(endpoint: string, params?: any, reqOpts?: any): Promise<any> {
    return this.http.get(endpoint).toPromise();
  }
}
