# Glassy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

De <https://medium.com/letsboot/quick-start-with-angular-material-and-flex-layout-1b065aa1476c>

De <https://medium.com/letsboot/quick-start-with-angular-material-and-flex-layout-1b065aa1476c>

Modulo material
Modulo fxlayout

## Instalacao

- 1. baixe e instale o node.js
- 2. npm install -g @angular/cli
- 3. ng --version
- 4. node --version

## Criando um novo projeto

- 1. ng new glassy --routing --skip-tests --style=scss --prefix=gla

## Criacao de component

- criar pasta core/layout

- ng g c core/layout/home
- ng g c core/layout/menu
- ng g c core/layout/sidenav

- criar pasta page
- ng g c page/login

## Instalando Material and FlexLayout

- npm install --save @angular/material @angular/cdk @angular/animations
- npm install @angular/flex-layout

## Estruturando

- criar pasta core/common
- crie um arquivo material.module.ts

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
MatButtonModule,
MatCardModule,
MatSidenavModule
} from "@angular/material";

@NgModule({
imports: [CommonModule],
exports: [FlexLayoutModule, MatButtonModule, MatCardModule, MatSidenavModule]
})
export class MaterialModule {}

## fixOnSave: true para resolver double quote

## Criando os modulos

- ng g m core
- ng generate core/layout

## importe COreModule in appModule e LayoutModule in CoreMOdule
