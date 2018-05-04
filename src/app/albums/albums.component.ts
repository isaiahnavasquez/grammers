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

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
  }

}
