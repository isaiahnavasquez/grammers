import { Component, OnInit } from '@angular/core'
import { AlbumsService } from '../albums.service'
import { Album } from '../data-classes'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = []
  names: string = ''

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
    this.getAlbums()
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data.slice(0,6)
    })
  }

}
