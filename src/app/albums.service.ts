import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Album } from './data-classes'

@Injectable()
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  getAlbums() {
    
  }

}
