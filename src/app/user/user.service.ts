import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  fake:any
  constructor(private http:HttpClient) {
    this.fake=false;
  }

  //private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';
  
  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public registerUser(user) {
    console.log('USER-req ',user)
    if(this.fake)
      return Observable.create(observer => {
        observer.next("NEXT");
        observer.complete();
        
    });
    return this.http.post<User>(this.userUrl + "/users", user);
  }

  public loginUser(user) {
    if(this.fake)
      return Observable.create(observer => {
        observer.next("NEXT");
        observer.complete();
    });
      // return Observable.of(new HttpResponse({ status: 200, body: {"body":"body"} }));
    else
    return this.http.post<User>(this.userUrl + "/users/check", user);
  }
}


/*
login: http://localhost:4200/api/users/check

email :"getakash.verma19@gmail.com"
name
:
"user"
password
:
"12345678"

Response : {"name":"Akash","email":"getakash.verma19@gmail.com","password":"12345678"}


.................


http://localhost:4200/api/population

Res
[{"year":2010,"total":579,"male":613,"female":1192},{"year":2011,"total":588,"male":623,"female":1211},{"year":2012,"total":599,"male":634,"female":1233},{"year":2013,"total":607,"male":643,"female":1250},{"year":2014,"total":616,"male":650,"female":1266},{"year":2015,"total":624,"male":658,"female":1282},{"year":2017,"total":640,"male":676,"female":1316},{"year":2018,"total":648,"male":686,"female":1334}]


......... user creation
http://localhost:4200/api/users
{name: "sumit", email: "sumit@test.com", password: "12345"}

res
{"name":"sumit","email":"sumit@test.com","password":"12345"}

*/