import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
// import 'rxjs/add/operator/map';

@Injectable()
export class MobDataService {
  constructor(private http: Http) {}
  // Header set Access-Control-Allow-Origin: *

  getMobData() {
    //return MOBPARTS;
    //.get("./assets/data/mob-data.json")
    return this.http
      .get("https://gemsstore.000webhostapp.com/mob-data.json")
      .pipe(map(response => response.json().data));
  }
}
