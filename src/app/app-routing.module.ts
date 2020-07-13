import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptableComponent } from './emptable/emptable.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';


const routes: Routes = [
  {path: '', component: EmptableComponent},
  {path: 'addemp', component: AddempComponent},
  {path: 'empdetail', component: EmpdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmptableComponent, AddempComponent, EmpdetailComponent]
