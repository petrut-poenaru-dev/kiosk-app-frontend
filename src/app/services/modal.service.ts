import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ModalService{

  public isOpenProductDetailsModal$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public productCategory$:BehaviorSubject<string> = new BehaviorSubject<string>('')
  public productId$:BehaviorSubject<number> = new BehaviorSubject<number>(0)

  public openProductDetailsModal(category:string , id:number): void{
    this.isOpenProductDetailsModal$.next(true)
    this.productCategory$.next(category)
    this.productId$.next(id)
  }

  public closeModal(){
    this.isOpenProductDetailsModal$.next(false)
    this.productCategory$.next('')
    this.productId$.next(0)
  }

}
