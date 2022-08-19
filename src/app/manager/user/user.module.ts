import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {UserApiService} from "../shared/service/user-api.service";

import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  exports: [UserComponent],
  providers: [UserApiService]
})
export class UserModule {
}
