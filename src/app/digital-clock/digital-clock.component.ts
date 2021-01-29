import { Component, Input, OnInit } from "@angular/core";
import { FormatType } from "../enums/formatType";

@Component({
  selector: "app-digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.scss"],
})
export class DigitalClockComponent implements OnInit {

  timeFormats = ["h", "hh", "H", "HH"];
  minuteFormats = ["m", "mm"];

  hourFormat: string;
  minuteFormat: string;

  constructor() {}

  ngOnInit(): void {    
  }

  onFormatSlected(time) {
    time.formatType === FormatType.Hour ? 
    this.hourFormat = time.format :
    this.minuteFormat = time.format;
  }
}
