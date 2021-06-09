import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from '../app/work/work.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: 'work', component: WorkComponent }, {path: "/", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }