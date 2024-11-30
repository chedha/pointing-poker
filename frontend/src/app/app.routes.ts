import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'room/:id', component: RoomComponent },
    { path: '**', redirectTo: '' }
];
