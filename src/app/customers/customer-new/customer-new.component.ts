import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css'],
})
export class CustomerNewComponent implements OnInit {
  public emailFormControl: FormControl;

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) {}

  public openRepDialog(): void {
    const dialogRef: MatDialogRef<RepDialogComponent> = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User choice ${result}`);
    });
  }

  public openUndoSnackBar(): void {

  }

  public ngOnInit() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
