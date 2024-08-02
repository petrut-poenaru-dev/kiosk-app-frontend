import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector:'app-main-menu',
  templateUrl:'main-menu.component.html',
  styleUrls:['main-menu.component.scss'],
  standalone:true,
  imports:[CommonModule , TranslateModule]
})

export class MainMenuComponent{

}
