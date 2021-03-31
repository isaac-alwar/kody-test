import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ItemPage } from './item.page';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule ],
  declarations: [ItemPage],
  exports: [ItemPage]
})
export class ItemPageModule {}
