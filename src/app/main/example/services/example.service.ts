import { Injectable, Pipe } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const API_URL = `${environment.BASE_URL}/api/ResmiTatils`;
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpService: HttpService) { }

  async tatilGunleriListesiGetir() {
    //console.log(codes)
    //const observable: Observable<any> = this.httpService.get("", "ResmiTatils", 1);
    // const datas = await firstValueFrom<[]>(observable);

    this.httpService.get("", "categories", 1).subscribe(
      (response) => {                           //next() callback
        console.log('response received');
        debugger;
        return response;
      },
      (error) => {                              //error() callback
        console.error('Request failed with error');
        console.error(error);  debugger;
        //this.errorMessage = error;
        return false;
      },
      () => {                                   //complete() callback
        console.error('Request completed');    debugger;  //This is actually not needed 
        return false;
      })
  }
  exam() : Observable<any[]> { 
    let asdf= this.httpService.get("", "categories");
    return this.httpService.get("", "categories")

  }
}
