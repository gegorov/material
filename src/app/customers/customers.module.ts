import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
  },
];

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, MatButtonModule, MatCardModule, MatIconModule],
  declarations: [CustomerListComponent, CustomerCardComponent],
})
export class CustomersModule {}
