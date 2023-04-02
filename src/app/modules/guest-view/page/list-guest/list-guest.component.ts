import { GuestService } from 'src/app/services/guest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.scss']
})
export class ListGuestComponent implements OnInit {
  guests: any;

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.getAllGuest();
  }

  getAllGuest() {
    this.guestService.getGuest().subscribe(res => this.guests = res)
  }
}
