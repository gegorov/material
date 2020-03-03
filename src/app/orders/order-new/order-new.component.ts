import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css'],
})
export class OrderNewComponent implements OnInit {
  public minDate = new Date();
  public dateCtrl: FormControl;

  constructor() {}

  ngOnInit() {
    this.dateCtrl = new FormControl('', [Validators.required]);
  }
}
