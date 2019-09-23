import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule } from '@angular/material'

let modules = [  MatButtonModule,MatCardModule,MatSnackBarModule,
  MatFormFieldModule,MatInputModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: modules
  
})
export class AngMaterialModule { }
