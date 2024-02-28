import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';


  @Output()
  public search = new EventEmitter<string>;

  onValue( data: string ):void {
    this.search.emit( data )
  }
}
