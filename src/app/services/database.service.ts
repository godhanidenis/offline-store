import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { HttpreqService } from './http-req.service';
import { NetworkService } from './network.service';
import { UserData } from '../userdata';

export interface StoredRequest {
  url: string;
  type:
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'head'
    | 'delete'
    | 'options'
    | 'upload'
    | 'download';
  data: any;
  time: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private storage: SQLiteObject;
  constructor(private sqlite: SQLite, private platform: Platform) {
    // this.init();
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'data.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
        })
        .catch((e) => {
          console.log(e.messagae);
        });
    });
  }

  //insert whole response in local
  insertOnlineData(data: UserData[]) {
    this.clearDatabase();
    if (data.length > 0) {
      data.forEach((element) => {
        this.setData({ name: element.name, email: element.email });
      });
    }
  }

  async getRequests(): Promise<any> {
    console.log('CALALE');
    var requests = [];
    return this.storage
      .executeSql('SELECT * FROM apiRequests', [])
      .then((res) => {
        for (let i = 0; i < res.rows.length; i++) {
          var ref = res.rows.item(i);
          requests.push({
            url: ref.url,
            type: ref.type,
            data: JSON.parse(ref.data),
            time: ref.time,
            id: ref.id,
          });
        }
        return requests;
      })
      .catch((e) => {
        console.log('Error occured!!');
      });
  }

  //set single record in local
  setData(user: { name: string; email: string }) {
    this.storage
      .executeSql(
        'CREATE TABLE IF NOT EXISTS users(_id VARCHAR(100), name VARCHAR(100),email VARCHAR(100))',
        []
      )
      .then((res) => {
        this.storage
          .executeSql('INSERT INTO users(_id,name,email) VALUES (?,?,?)', [
            Math.random()
              .toString(36)
              .replace(/[^a-z]+/g, '')
              .substr(0, 5),
            user.name,
            user.email,
          ])
          .then((res) => {})
          .catch((e) => {
            console.log('ERROR::', e.message);
          });
      })
      .catch((e) => {
        console.log('ERROR::', e.message);
      });
  }

  storeRequestOffline(url: string, type: any, data: {}) {
    console.log('GETTING CALLED!!!');
    let action: StoredRequest = {
      url: url,
      type: type,
      data: data,
      time: new Date().getTime().toString(),
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5),
    };

    return from(
      this.storage
        .executeSql(
          'CREATE TABLE IF NOT EXISTS apiRequests(url VARCHAR(100), type VARCHAR(100),data VARCHAR(100), time VARCHAR(100), id VARCHAR(100))',
          []
        )
        .then((res) => {
          this.storage
            .executeSql(
              'INSERT INTO apiRequests(url,type,data,time,id) VALUES(?,?,?,?,?)',
              [
                action.url,
                action.type,
                JSON.stringify(action.data),
                action.time,
                action.id,
              ]
            )
            .then((res) => {
              this.storage
                .executeSql('SELECT * FROM apiRequests', [])
                .then((res) => {
                  for (let i = 0; i < res.rows.length; i++) {
                    var ref = res.rows.item(i);
                    console.log(
                      ref.url,
                      ref.type,
                      JSON.parse(ref.data),
                      ref.time,
                      ref.id
                    );
                  }
                })
                .catch((e) => {
                  console.log('Error occured!!', e.message);
                });
            })
            .catch((e) => {
              console.log('Error occured!!!!!', e.message);
            });
        })
    );
  }

  getData(): Observable<any> {
    var userInfo = [];
    try {
      return from(
        this.storage.executeSql('SELECT * FROM users', []).then((res) => {
          for (let i = 0; i < res.rows.length; i++) {
            userInfo.push({
              _id: res.rows.item(i)._id,
              name: res.rows.item(i).name,
              email: res.rows.item(i).email,
            });
          }
          return userInfo;
        })
      );
    } catch (e) {
      console.log('ERROR::', e.message);
    }
  }

  getPendingReuqests(): Observable<any> {
    var reqsts = [];
    return from(
      this.storage
        .executeSql('SELECT * FROM apiRequests', [])
        .then((res) => {
          for (let i = 0; i < res.rows.length; i++) {
            var ref = res.rows.item(i);
            reqsts.push({
              url: ref.url,
              type: ref.type,
              data: JSON.parse(ref.data),
            });
          }
          return reqsts;
        })
        .catch((e) => {
          console.log('Error occured!!', e.message);
        })
    );
  }

  clearDatabase() {
    this.storage.executeSql('DELETE FROM users').then((res) => {});
    this.storage.executeSql('DELETE FROM apiRequests').then((res) => {});
  }
  // constructor(private storage: Storage) {
  //   this.init();
  // }

  // async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   const storage = await this.storage.create();
  //   this._storage = storage;
  // }

  // storeData(key: string, value: any){
  //   this._storage?.setItem(key, value);
  // }

  // fetchData(key: string){
  //   this._storage?.getItem(key);
  // }
}
