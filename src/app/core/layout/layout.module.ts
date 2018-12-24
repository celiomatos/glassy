import { RouterModule } from '@angular/router';
import { MaterialModule } from './../common/material.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HomeComponent, MenuComponent]
})
export class LayoutModule {}
