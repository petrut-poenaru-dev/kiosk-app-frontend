import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppService} from "./services/app.service";
import {CommonModule} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ProductDetailsModalComponent} from "./modals/product-details-modal/product-details-modal.component";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule , TranslateModule , ProductDetailsModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'frontend';
  public bundleSettings!:{languages:Array<string>};
  public products:any;
  public isOpenProductDetailsModal$ = this._modalService.isOpenProductDetailsModal$;

  constructor(private _appService:AppService , private translate: TranslateService , private _modalService:ModalService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
