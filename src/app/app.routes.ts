import {Routes} from '@angular/router';
import {SelectLanguageComponent} from "./components/select-language-component/select-language.component";
import {MainMenuComponent} from "./components/main-menu-component/main-menu.component";
import {CategoryMenuComponent} from "./components/category-menu-component/category-menu.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo:'/language',
    pathMatch: 'full'
  },
  {
    path:'language',
    component:SelectLanguageComponent
  },
  {
    path:'menu',
    component: MainMenuComponent
  },
  {
    path:'category-menu/:title',
    component:CategoryMenuComponent
  }
];
