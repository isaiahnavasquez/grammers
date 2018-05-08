import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service'
import { Photo } from '../data-classes';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  photos: Photo[] = []

  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this.imagesService.getPhotos().subscribe(data => {
      this.photos = data.slice(0,6)
    })
  }

}
