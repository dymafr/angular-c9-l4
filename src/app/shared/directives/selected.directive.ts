import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[appSelected]"
})
export class SelectedDirective {
  @Input() private appSelected: boolean;

  constructor() {}
}
