import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromItems from './reducers';
import { IonicModule } from '@ionic/angular';


import { ItemPage } from './item.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './effects/item.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    StoreModule.forFeature(fromItems.itemsModuleFeatureKey, fromItems.reducers),
    EffectsModule.forFeature([ItemEffects])
  ],
  declarations: [ItemPage],
  exports: [ItemPage]
})
export class ItemPageModule {}
