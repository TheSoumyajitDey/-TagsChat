import { Component, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-editablr",
  templateUrl: "./editablr.component.html",
  styleUrls: ["./editablr.component.scss"],
})
export class EditablrComponent implements OnInit, ControlValueAccessor {
  constructor() {}
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {}
}
