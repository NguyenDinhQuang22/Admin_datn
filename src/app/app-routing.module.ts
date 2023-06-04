import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:() =>
    import('./Admin/Admin.module').then((m)=>m.AdminModule),
  },
  {
    path:"home",
    loadChildren:() =>
    import('./Home/Home.module').then((m)=>m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
