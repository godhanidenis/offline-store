import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DatabaseService } from '../services/database.service';
import { NetworkService } from '../services/network.service';
import { HttpreqService } from '../services/http-req.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage],
  providers: [],
})
export class HomePageModule {}
