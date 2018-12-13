import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/common/material.module';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialModule, FlexLayoutModule],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
