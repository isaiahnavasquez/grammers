import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [
    AlbumsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
