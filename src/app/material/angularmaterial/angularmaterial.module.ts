import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    // MatSortModule,
    MatInputModule,
    // MatFormFieldModule,
    // FlexLayoutModule,
    MatPaginatorModule
  ]
  // exports: [
  //   MatSortModule,
  //   MatTableModule,
  // MatInputModule
  // ]
})
export class AngularmaterialModule { }
