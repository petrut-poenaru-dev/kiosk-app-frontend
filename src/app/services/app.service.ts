import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AppService{

  constructor(private _http:HttpClient) {}

  public getBundleSettings():Observable<any>{
    return this._http.get('http://localhost:3333/api/bundle');
  }

  public getProducts():Observable<any>{
    return this._http.get('http://localhost:3333/api/products');
  }
}
