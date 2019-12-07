import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherCodeToIcon'
})
export class WeatherCodeToIconPipe implements PipeTransform {

  transform(code: any): string {
    let iconName = '';
    if (code < 300) iconName = 'strom';
    if (code >= 300 && code < 700) iconName = 'rain';
    if (code >= 700 && code < 800) iconName = 'cloud';
    if (code == 800) iconName = 'sun';
    if (code >= 801 && code <= 803) iconName = 'partly cloudy';
    if (code > 803) iconName = 'cloud';
    return `assets/weather_icons/${iconName}.svg`;
  }

}
