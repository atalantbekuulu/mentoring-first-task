import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from "./user-card/user-card.component";
import {MatButtonModule} from "@angular/material/button"
import {MatDialog} from '@angular/material/dialog';
import { User } from '../interfaces/users-model';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { StorageService } from '../../services/storage.service';
import { StorageKeys } from '../../constants/storage-key';

@Component({
    selector: 'app-users-list',
    templateUrl: 'users-list.component.html',
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    UserCardComponent,
    MatButtonModule
      
]
})
export class UserListComponent implements OnInit {
  private readonly usersService = inject(UsersService)
  private readonly localStorageService = inject(StorageService)
  public readonly users$ = this.usersService.users$
  readonly dialog = inject(MatDialog)
   
 ngOnInit(): void {
  const localStorageData = this.localStorageService.get<User>(StorageKeys.USERS)
  if( Array.isArray(localStorageData) && localStorageData.length > 0 ){
    this.usersService.loadUsers()
    this.users$.subscribe((next)=>{
      this.localStorageService.set(StorageKeys.USERS,next)
    })
  }
  else {
    this.usersService.setUsers()
  }

  }
  deleteUser(id: number) :void{
    this.usersService.userDelete(id)
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(EditUserDialogComponent, {
        data: {user:this.users$},
      });
    dialogRef.afterClosed().subscribe(result => {
      this.usersService.userEdit(result)
    });
  }
  outputEditData(emit:User) {
    this.usersService.userEdit(emit)
  }
}
