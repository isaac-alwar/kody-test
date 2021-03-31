import { ItemPageModule } from './../item/item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonePageRoutingModule } from './done-routing.module';

import { DonePage } from './done.page';
// import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageModule,
    DonePageRoutingModule
  ],
  declarations: [DonePage]
})
export class DonePageModule {}
