
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Components
import { AlbumsComponent } from './albums/albums.component'
import { ProfilesComponent } from './profiles/profiles.component'
import { ViewProfileComponent } from './view-profile/view-profile.component'
import { ImagesComponent } from './images/images.component'

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiles/:id', component: ViewProfileComponent },
  { path: 'images', component: ImagesComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
