import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button"
import { User } from '../../interfaces/users-model';
import {MatDialog} from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  user?: User

  @Output()
  outputEditData = new EventEmitter()

  @Output()
  deleteUser = new EventEmitter<number>()
  readonly dialog = inject(MatDialog)
 
  clickDeleteUser(){
    this.deleteUser.emit(this.user?.id)
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user:this.user}, 
    });

  dialogRef.afterClosed().subscribe(editResult => {
    if(!editResult) return
    this.outputEditData.emit(editResult)
  });
}
}
