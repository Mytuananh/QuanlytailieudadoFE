import { CongtrinhinfoComponent } from './congtrinhinfo/congtrinhinfo.component';
import { QuanlycongtrinhComponent } from './quanlycongtrinh/quanlycongtrinh.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HoSoCongTrinhComponent } from './ho-so-cong-trinh/ho-so-cong-trinh.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'cong-trinh/:maCT', component: CongtrinhinfoComponent },
  { path: 'quanlycongtrinh', component: QuanlycongtrinhComponent },
  { path: 'hosocongtrinh', component: HoSoCongTrinhComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
