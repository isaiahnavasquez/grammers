import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User }  from './data-classes'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://127.0.0.1:3000/users')
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:3000/users/' + id)
  }

}
