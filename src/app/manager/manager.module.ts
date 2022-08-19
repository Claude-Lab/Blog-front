import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagerComponent} from "./manager.component";
import {ManagerRoutingModule} from "./manager-routing.module";
import {HomeModule} from "./home/home.module";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    ManagerRoutingModule
  ],
  exports: [
    ManagerComponent
  ]
})
export class ManagerModule {
}
