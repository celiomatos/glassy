import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class MaterialModule {}
