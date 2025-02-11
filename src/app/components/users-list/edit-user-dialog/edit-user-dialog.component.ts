import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button"
import { User } from "../../interfaces/users-model";
@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,NgIf,MatButtonModule,MatDialogClose],
    standalone: true,
})

export class EditUserDialogComponent {
    readonly data = inject<{user:User}>(MAT_DIALOG_DATA)
    private readonly fb = inject(FormBuilder)
    readonly dialogRef = inject(MatDialogRef)

    public readonly myFormBuilder = this.fb.group({
        name:[this.data.user.name, [Validators.required,Validators.minLength(2)]],
        address:  [this.data.user.address?.street, [Validators.required, Validators.minLength(2)]],
        phone: [this.data.user.phone, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
    })
    get userWithUpdateFields(){
        return {
            ...this.myFormBuilder.value,
            address:{ street :this.myFormBuilder.value.address},
            id: this.data.user.id
        }
    }
}