import { Component } from '@angular/core';
import { HttpreqService } from './services/http-req.service';
import { ConnectionStatus, NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private networkService: NetworkService,
    private httprequestService: HttpreqService
  ) {
    this.networkService
      .onNetworkChange()
      .subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.httprequestService.offlineToOnlineReq();
        }
      });
  }
}
