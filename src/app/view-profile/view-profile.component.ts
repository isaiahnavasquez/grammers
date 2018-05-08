import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router'
import { User } from '../data-classes'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})

export class ViewProfileComponent implements OnInit {

  user: User = new User()

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(data => {
      this.user = data
    })
  }

}
