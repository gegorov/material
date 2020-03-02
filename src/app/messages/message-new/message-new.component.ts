import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Department {
  id: number;
  name: string;
}

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css'],
})
export class MessageNewComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  public priorities: string[] = ['High', 'Medium', 'Low'];
  public departments: Department[] = [
    {
      id: 1,
      name: 'Complaints',
    },
    {
      id: 2,
      name: 'Loyalty',
    },
    {
      id: 3,
      name: 'Emotions',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  public getDepartmentName(department: Department): string {
    return department ? department.name : undefined;
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      departmentCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required],
    });
  }
}
