import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  weather: any = {};
  iconPath: string = '';
  celsius: boolean = true;
  cityName = '';
  cityInputVisible = false;
  inputFocused = false;
}
