import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './data-classes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://127.0.0.1:3000/photos')
  }

}
