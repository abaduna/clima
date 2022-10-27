import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url="https://api.openweathermap.org/data/2.5/weather?&appid="
  key ="d0dee610d6b55c36a331f791f27e0e15"
  constructor(private http:HttpClient) { }

  getClima(cuidad:string):Observable<any>
  {
    const URL = this.url + this.key + "&q=" + cuidad
   return   this.http.get(URL)
  }
}
