import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppService} from "./services/app.service";
import {CommonModule} from "@angular/common";
import {SelectLanguageComponent} from "./components/select-language-component/select-language.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {CategoryMenuComponent} from "./components/category-menu-component/category-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule , SelectLanguageComponent , TranslateModule , CategoryMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'frontend';
  public bundleSettings!:{languages:Array<string>};
  public products:any;

  constructor(private _appService:AppService , private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
