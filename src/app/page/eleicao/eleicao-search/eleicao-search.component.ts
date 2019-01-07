import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'gla-eleicao-search',
  templateUrl: './eleicao-search.component.html',
  styleUrls: ['./eleicao-search.component.scss']
})
export class EleicaoSearchComponent implements OnInit {
  valor = '5455-tete';
  constructor(private dialogRef: MatDialogRef<EleicaoSearchComponent>) {}

  ngOnInit() {}

  search() {
    this.dialogRef.close();
  }
}
