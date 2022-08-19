import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      // { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: '**', redirectTo: 'users' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
