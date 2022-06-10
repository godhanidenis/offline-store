import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { HttpreqService } from '../services/http-req.service';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = [];
  reqsts = [];
  constructor(
    private databaseService: DatabaseService,
    private networkService: NetworkService,
    private toastController: ToastController,
    private httpreqService: HttpreqService
  ) {
    console.log(
      'Current status is: ',
      this.networkService.getCurrentNetworkStatus()
    );
    this.networkService.onNetworkChange().subscribe((res) => {
      console.log('Current status is: ', res);
    });
  }
  todo = {
    name: '',
    email: '',
  };
  async logForm() {
    this.httpreqService.putData({
      name: this.todo.name,
      email: this.todo.email,
    });
  }
  getData() {
    this.databaseService.getData().subscribe((res) => {
      this.data = res;
    });
  }

  getPendingRequests() {
    this.databaseService.getPendingReuqests().subscribe((res) => {
      this.reqsts = res;
    });
  }

  deleteData() {
    this.databaseService.clearDatabase();
  }

  async presentToast() {
    this.data = [];
    const toast = await this.toastController.create({
      message: 'Data cleared!',
      duration: 2000,
    });
    toast.present();
  }

  getDataOnline() {
    this.httpreqService.getData().subscribe((res) => {
      this.data = res;
    });
  }

  // setData() {
  //   this.databaseService.setData();
  // }
}
