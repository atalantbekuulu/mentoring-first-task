import { Injectable} from '@angular/core';
import { UsersApiService } from './users-api.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../components/interfaces/users-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private usersSubject$ = new BehaviorSubject<User[]>([])
  public readonly users$ = this.usersSubject$.asObservable()
  constructor(private readonly UsersServiceApi: UsersApiService) { 
   }
  public loadUsers():void{
    this.UsersServiceApi.getUsers().subscribe((response:User[])=> {
    this.usersSubject$.next(response)
     })
  }
  public userDelete(id:number):void{
  this.usersSubject$.next(this.usersSubject$.value.filter((user:User)=> user.id !== id))
 }
}