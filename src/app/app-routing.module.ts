import { LoginComponent } from './auth/login/login.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'main-menu',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main-routing.module').then((m) => m.MainRoutingModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
