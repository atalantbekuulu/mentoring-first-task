import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../constants/constants';
import { User } from '../components/interfaces/users-model';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly http = inject(HttpClient)
  getUsers() {
  return this.http.get<User[]>(API_URL)
  }
}
