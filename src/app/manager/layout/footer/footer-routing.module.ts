import { NgModule } from '@angular/core';
import {FooterComponent} from "./footer.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule {

}
