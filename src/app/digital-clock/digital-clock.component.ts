import { Component, OnInit } from "@angular/core";
import { FormatType } from "../enums/formatType";

@Component({
  selector: "app-digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.scss"],
})
export class DigitalClockComponent implements OnInit {
  time = new Date();

  timeFormats = ["h", "hh", "H", "HH"];
  minuteFormats = ["m", "mm"];

  hourFormat: string = 'h';
  minuteFormat: string = 'm';

  constructor() {}

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  onFormatSlected(time) {
    time.formatType === FormatType.Hour ? 
    this.hourFormat = time.format :
    this.minuteFormat = time.format;
  }
}
