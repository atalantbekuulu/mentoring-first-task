import { Component, inject } from "@angular/core";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@Component({
  selector: 'app-create-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: `./create-edit-user.component.html`,
  styleUrl: './create-edit-user.component.css',
})
export class CreateEditUserComponent {
  readonly data = inject(MAT_DIALOG_DATA)
  
    constructor() {
  }
  
}
