import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarModule} from "./navbar/navbar.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {FooterModule} from "./footer/footer.module";
import {LayoutRoutingModule} from "./layout-routing.module";
import {ManagerModule} from "../manager.module";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
    ManagerModule,
    LayoutRoutingModule
  ], exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
