import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EleicaoComponent } from './eleicao.component';
import { MaterialModule } from 'src/app/core/common/material.module';
import { EleicaoSearchComponent } from './eleicao-search/eleicao-search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EleicaoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialModule],
  exports: [RouterModule],
  declarations: [EleicaoComponent, EleicaoSearchComponent],
  entryComponents: [EleicaoSearchComponent]
})
export class EleicaoModule {}
