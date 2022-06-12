import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"]
})
export class StepperComponent implements OnInit {
  @ViewChild("stepper", { static: true }) stepper: MatStepper;

  constructor() {}

  amount: number = 100;
  name: string;
  calculated: boolean = false;
  msg: string;

  ngOnInit() {}

  completeConvert(result: number) {
    this.msg = `Thank you for exchanging ${result} €`;
    this.calculated = true;
    this.stepper.next();
  }
}
