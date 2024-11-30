import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/rooms'; // Backend endpoint

  constructor(private http: HttpClient) {}

  // Create a new room
  createRoom(name: string): Observable<any> {
    return this.http.post(this.apiUrl, { name });
  }

  // Get all rooms
  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get room details
  getRoomDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
