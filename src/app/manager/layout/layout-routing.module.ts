import { NgModule } from '@angular/core';
import {LayoutComponent} from "./layout.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
