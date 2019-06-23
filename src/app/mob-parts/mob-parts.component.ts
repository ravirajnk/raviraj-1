import { Component, OnInit } from "@angular/core";

import { MobParts } from "./mob-parts";
//import { MOBPARTS } from "./mock";
import { MobDataService } from "../mob-data.service";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styleUrls: ["./mob-parts.component.css"]
})
export class MobPartsComponent implements OnInit {
  ngAfterContentInit() {
    console.log("ngAfterContentInit Block...!");
  }

  ngOnInit() {
    console.log("ngOnInit Block...!");
    //this.mobParts = MOBPARTS;

    // let mobDataService = new MobDataService();
    // this.mobParts = mobDataService.getMobData();

    //this.mobParts = this.mobDataService.getMobData();

    this.mobDataService
      .getMobData()
      .subscribe(mobParts => (this.mobParts = mobParts));
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Block...!");
  }
  constructor(private mobDataService: MobDataService) {
    console.log("Constructor Block...!");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Block...!");
  }

  mobParts: MobParts[];

  calcProd() {
    let sum = 0;
    if (Array.isArray(this.mobParts)) {
      for (let mobPart of this.mobParts) sum += mobPart.inStock;
    }
    return sum;
  }

  upQntt(mobPart) {
    if (mobPart.qntt < mobPart.inStock) mobPart.qntt++;
  }

  downQntt(mobPart) {
    if (mobPart.qntt > 0) mobPart.qntt--;
  }

  catchQntt(eve) {
    console.log(eve);
  }
}
