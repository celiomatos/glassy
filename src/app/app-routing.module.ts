import { HomeComponent } from './core/layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        loadChildren: './page/login/login.module#LoginModule'
      },
      {
        path: 'eleicao',
        loadChildren: './page/eleicao/eleicao.module#EleicaoModule'
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
