import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TimeFormatData } from "src/app/models/TimeFormatData";

@Component({
  selector: "app-time-format-dropdown",
  templateUrl: "./time-format-dropdown.component.html",
  styleUrls: ["./time-format-dropdown.component.scss"],
})
export class TimeFormatDropdownComponent implements OnInit {
  @Input()
  formats: [] = [];

  @Input()
  formatType: string;

  @Output()
  formatSelected: EventEmitter<TimeFormatData> = new EventEmitter<TimeFormatData>();

  selectedFormat: string = 'Select time format';

  constructor() {}

  ngOnInit(): void {
  }

  onFormatSelected() {
    this.formatSelected.emit(
      new TimeFormatData(this.selectedFormat, this.formatType)
    );
  }
}
