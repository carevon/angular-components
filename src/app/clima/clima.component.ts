// importando o componente input
import { Input, Component, OnInit } from '@angular/core';
// importar o httpclient para fazer requisições http
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-clima',// nome da tag que pode ser utilzada em outros components
  templateUrl: './clima.component.html', // arquivo html do component clima
  styleUrls: ['./clima.component.scss'] //arquivo css do component clima
})
export class ClimaComponent implements OnInit {
  // Implementando o componente input para capturar a latidude e longitude
  @Input() latitude:string; // recebe a latitude do app.component
  @Input() longitude:string; // recebe a longitude da app.component
  apikey:string = "e9f8184066cb35eac5a42a3cf289ade4";
  url:string = "http://api.openweathermap.org/data/2.5/weather";
  data:any;


  // declarar o modulo httpclient no construtor
  constructor(private http:HttpClient) { }

  async ngOnInit() {}

  // Função para pegar dados da openweathermap
  async getPositionData(){
    // preparar a url para o openweathermap
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.apikey}`;

    // o js não esperaria a resposta do servidor, por isso devemos utilizar o await
    var data = await this.http.get(this.url).toPromise();
    var temp_min = data['main']['temp_min'];
    var temp_max = data['main']['temp_max'];
    this.data = temp_max;
    console.log(data);
    console.log(temp_min);
    console.log(temp_max);
    return temp_min;
  }

}
