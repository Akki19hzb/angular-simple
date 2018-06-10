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
    
    let email= localStorage.getItem('email')
    let pass = localStorage.getItem('password')
    
        return this.http.get<Population[]>(this.populationUrl + "/populations?email="+email+"&password="+pass
      );
  }

}
