import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/layout/home/home.component';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
