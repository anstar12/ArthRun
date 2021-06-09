import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from '../app/work/work.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: 'ArthRun/work', component: WorkComponent }, {path: "ArthRun/home", component: HomeComponent},{ path: '', redirectTo: 'ArthRun/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }