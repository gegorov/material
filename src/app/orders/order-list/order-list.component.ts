import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

interface Order {
  orderDate: Date;
  orderNumber: number;
  total: number;
  description: string;
  isChecked: boolean;
}

const ELEMENT_DATA: Order[] = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 2.99,
    description: 'Pasta Barilla',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 5.49,
    description: 'Olive Oil',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 2.99,
    description: 'Pasta Barilla',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 5.49,
    description: 'Olive Oil',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 2.99,
    description: 'Pasta Barilla',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 5.49,
    description: 'Olive Oil',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 2.99,
    description: 'Pasta Barilla',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 5.49,
    description: 'Olive Oil',
    isChecked: false,
  },
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  public displayedColumns: string[] = [
    'action',
    'orderNumber',
    'orderDate',
    'description',
    'total',
  ];

  public dataSource: MatTableDataSource<Order> = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  public selectAll(): void {
    for (const element of ELEMENT_DATA) {
      element.isChecked = !element.isChecked;
    }
  }
}
