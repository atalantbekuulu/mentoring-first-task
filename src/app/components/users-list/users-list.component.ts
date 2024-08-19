import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-users-list',
    templateUrl: 'users-list.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class UserListComponent {
    users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
       ]
    constructor() { 
    }
   
}