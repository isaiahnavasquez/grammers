import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Album } from './data-classes'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('http://127.0.0.1:3000/albums')
  }

}
