import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManagerComponent} from "./manager.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: ManagerComponent,
        children: [
          { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
          { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: '**', redirectTo: 'home' }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'manage/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'manage/home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
}
