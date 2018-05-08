import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { User } from '../data-classes'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  users: User[] = []

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data
    })
  }

}
