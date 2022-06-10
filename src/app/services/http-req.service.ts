import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { forkJoin, from, Observable, of } from 'rxjs';
import { DatabaseService, StoredRequest } from './database.service';
import { ConnectionStatus, NetworkService } from './network.service';

@Injectable({
  providedIn: 'root',
})
export class HttpreqService {
  constructor(
    private http: HTTP,
    private toastController: ToastController,
    private netwrokService: NetworkService,
    private databaseService: DatabaseService
  ) {}
  private storage: SQLiteObject;

  async offlineToOnlineReq() {
    console.log('RESE');
    await this.databaseService.getRequests().then((res) => {
      var obs = [];
      for (let i = 0; i < res.length; i++) {
        obs.push(this.makeRequest(res[i]));
      }
      forkJoin(obs).subscribe(async (res) => {
        let toast = await this.toastController.create({
          message: `Data synced on server`,
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
      });
      this.databaseService.clearDatabase();
    });
  }

  getData(): Observable<any> {
    if (
      this.netwrokService.getCurrentNetworkStatus() === ConnectionStatus.Offline
    ) {
      return this.databaseService.getData();
    } else {
      return from(
        this.http
          .get(
            'https://crudcrud.com/api/af71713c8b434ce0abf604726b907fe2/unicorns',
            {},
            {}
          )
          .then((res) => {
            this.databaseService.insertOnlineData(JSON.parse(res.data));
            return JSON.parse(res.data);
          })
      );
    }
  }

  putData(data: { name: string; email: string }) {
    if (
      this.netwrokService.getCurrentNetworkStatus() === ConnectionStatus.Offline
    ) {
      this.databaseService.setData({ name: data.name, email: data.email });
      this.databaseService
        .storeRequestOffline(
          'https://crudcrud.com/api/af71713c8b434ce0abf604726b907fe2/unicorns',
          'post',
          data
        )
        .subscribe();
    } else {
      this.http.setDataSerializer('json');
      this.http
        .sendRequest(
          'https://crudcrud.com/api/af71713c8b434ce0abf604726b907fe2/unicorns',
          {
            method: 'post',
            data: { name: data.name, email: data.email },
          }
        )
        .then(async (res) => {
          let toast = await this.toastController.create({
            message: `Data added on server successfully!`,
            duration: 3000,
            position: 'bottom',
          });
          toast.present();
        })
        .catch((e) => {
          console.log('Error while adding on server::', e);
        });
    }
  }

  makeRequest(data: StoredRequest) {
    this.http.setDataSerializer('json');
    return from(this.http
      .sendRequest(data.url, {
        method: data.type,
        data: data.data,
      })
      .then(async (res) => {
      })
      .catch((e) => {
        console.log('Syncing error::', e);
      }));
  }
}
