import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import { Population } from '../models/population.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PopulationService {

  constructor(private http:HttpClient) {}

  private populationUrl = '/api';

  public getPopulation() {
    console.log("HIT")
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');    
    // let myParams = new URLSearchParams();
    // myParams.append('email', 'akki19');
    // myParams.append('password', '123456');	
    // let options = new RequestOptions({ headers: myHeaders, params: myParams });
    return this.http.get<Population[]>(this.populationUrl + "/populations?email=akki19&password=123456");
  }

}
