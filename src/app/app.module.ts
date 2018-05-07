import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';

// Services
import { AlbumsService } from './albums.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AlbumsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
