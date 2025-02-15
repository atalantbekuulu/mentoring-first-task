import { inject, Injectable} from '@angular/core';
import { UsersApiService } from './users-api.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../components/interfaces/users-model';
import { StorageKeys } from '../constants/storage-key';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
   private readonly localStorageService = inject(StorageService)
  private usersSubject$ = new BehaviorSubject<User[]>([])
  public readonly users$ = this.usersSubject$.asObservable()
  private readonly UsersServiceApi = inject(UsersApiService)
  
  public loadUsers():void {
    this.usersSubject$.next(this.localStorageService.get<User[]>(StorageKeys.USERS) ?? [])
  }

  public setUsers():void{
    this.UsersServiceApi.getUsers().subscribe((response:User[])=> {
      this.localStorageService.set( StorageKeys.USERS ,response)
      this.usersSubject$.next(this.localStorageService.get(StorageKeys.USERS)??[])
     })
  }
  public userDelete(id:number):void{
  this.usersSubject$.next(this.usersSubject$.value.filter((user:User)=> user.id !== id))
 }
  public userEdit(editUser :User) :void {
    if(editUser.id){
      this.usersSubject$.next(this.usersSubject$.value.map((user)=>{
       return user.id === editUser.id ? editUser : user;
      }))
    }else {
      this.usersSubject$.next([...this.usersSubject$.value,{ ...editUser , id: Date.now()}])
      }
  }
}