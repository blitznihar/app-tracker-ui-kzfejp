import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {WebcamModule} from 'ngx-webcam';
import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule,
  MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { RemittanceListComponent } from './remittance-list/remittance-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bill-list',
    pathMatch: 'full'
  },
  {
    path: 'bill-list',
    component: BillListComponent
  }
  ,
  {
    path: 'person-list',
    component: PersonListComponent
  }
  ,
  {
    path: 'remittance-list',
    component: RemittanceListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    WebcamModule,
    MatIconModule,
        MatProgressBarModule,
            MatStepperModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [AppComponent, PersonListComponent, BillListComponent, RemittanceListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
