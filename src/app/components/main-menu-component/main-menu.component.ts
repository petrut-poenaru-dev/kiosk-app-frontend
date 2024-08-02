import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AppService} from "../../services/app.service";

@Component({
  selector:'app-main-menu',
  templateUrl:'main-menu.component.html',
  styleUrls:['main-menu.component.scss'],
  standalone:true,
  imports:[CommonModule , TranslateModule]
})

export class MainMenuComponent implements OnInit{

    public mainSections!: Array<string>;
    public icons:Array<string> = ['icon-drinks' , 'icon-coffee' , 'icon-ice-cream' , 'icon-cake' , 'icon-fresh-juices']

    constructor(private _appService:AppService) {
    }

    public ngOnInit() {
      this._appService.getProducts()
        .subscribe(response => {
          this.mainSections = response.map((product) => product.title);
      })
    }


}
