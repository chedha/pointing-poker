import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pointing Poker';
  rooms: any[] = [];
  newRoomName = 'Test Room';
  roomDetails: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch all rooms on load
    this.getRooms();
  }

  createRoom(): void {
    this.apiService.createRoom(this.newRoomName).subscribe((response) => {
      console.log('Room Created:', response);
      this.getRooms(); // Refresh the room list
    });
  }

  getRooms(): void {
    this.apiService.getRooms().subscribe((response) => {
      console.log('Rooms:', response);
      this.rooms = response;
    });
  }

  getRoomDetails(roomId: number): void {
    this.apiService.getRoomDetails(roomId).subscribe((response) => {
      console.log('Room Details:', response);
      this.roomDetails = response;
    });
  }
}
