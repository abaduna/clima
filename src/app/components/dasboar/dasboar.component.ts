import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/servicios/clima.service';

@Component({
  selector: 'app-dasboar',
  templateUrl: './dasboar.component.html',
  styleUrls: ['./dasboar.component.css']
})
export class DasboarComponent implements OnInit {
  urlimg ="https://w7.pngwing.com/pngs/266/445/png-transparent-alat-weather-climate-change-data-logger-weather-heart-data-weather.png"
  constructor(private  _climaservices: ClimaService) { }
  cuidad = ""
  louding = false
  eror = false
  temperatura = 0
  humedad = 0
  clima = ""
  ngOnInit(): void {
  }
  optenercLIMA(){
    console.log(this.cuidad);


    this._climaservices.getClima(this.cuidad).subscribe(data =>{
      
      this.louding = true 
      this.temperatura = data.main.temp
      this.humedad = data.main.humidity
    },error =>{
      this.eror = true
    })
    
  }
  
}
