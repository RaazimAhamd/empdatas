import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptableComponent } from './emptable/emptable.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddempComponent } from './addemp/addemp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
// import { MaterialModule } from './../material/material.module';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import {MatSortModule} from '@angular/material/sort';
// import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EmpdetailComponent } from './empdetail/empdetail.component';
// import { MatDialog } from '@angular/material/dialog';

// import { MatSort } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    EmptableComponent,
    FilterPipe,
    AddempComponent,
    EmpdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    // MatSortModule,
    // MatFormFieldModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
    // MatDialog
    // MatSort
    
    // MaterialModule
    // Ng2SearchPipeModule
  ],
  exports: [MatTableModule, MatPaginatorModule,MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @NgModule({
//   declarations: [
//     AppComponent,
//     EmptableComponent,
//     FilterPipe,
//     AddempComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     NgxPaginationModule,
//     ReactiveFormsModule,
//     MatTableModule,
//     MatIconModule,
//     MatSort
//     // MaterialModule
//     // Ng2SearchPipeModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
