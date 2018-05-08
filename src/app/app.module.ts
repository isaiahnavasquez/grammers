import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ImagesComponent } from './images/images.component'

// Services
import { AlbumsService } from './albums.service';
import { UsersService } from './users.service';
import { ImagesService } from './images.service';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ProfilesComponent,
    ViewProfileComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AlbumsService,
    UsersService,
    ImagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
