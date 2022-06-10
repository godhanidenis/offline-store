import { Injectable } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { HttpreqService } from './http-req.service';

export enum ConnectionStatus {
  Online,
  Offline,
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(
    ConnectionStatus.Offline
  );

  constructor(
    private network: Network,
    private toastController: ToastController,
    private plt: Platform,
  ) {
    console.log('Network service called!!!');
    this.plt.ready().then(() => {
      this.initializeNetworkEvents();
      let status =
        this.network.type !== 'none'
          ? ConnectionStatus.Online
          : ConnectionStatus.Offline;
      this.status.next(status);
    });
  }

  public initializeNetworkEvents() {
    this.network.onDisconnect().subscribe(() => {
      console.log('WE ARE OFFLINE');
      if (this.status.getValue() === ConnectionStatus.Online) {
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.network.onConnect().subscribe(() => {
      console.log('WE ARE ONLINE');
      if (this.status.getValue() === ConnectionStatus.Offline) {
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }

  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
    let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    let toast = await this.toastController.create({
      message: `You are now ${connection}`,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}
