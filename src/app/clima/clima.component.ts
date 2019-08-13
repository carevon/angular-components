// importando o componente input
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  // Implementando o componente input para capturar a latidude e longitude
  @Input() latitude:String   = "";
  @Input() longitude:String  = "";
  apikey:String = "e9f8184066cb35eac5a42a3cf289ade4";
  url:String = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139";
  constructor() { }

  ngOnInit() {
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.apikey}`
  }

}
