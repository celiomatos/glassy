import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, SidenavComponent, MenuComponent]
})
export class LayoutModule {}
