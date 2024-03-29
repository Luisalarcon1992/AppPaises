import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {



  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public search = new EventEmitter<string>;

  @Output()
  public ondebouncer = new EventEmitter<string>;

  ngOnInit(): void {
    this.debouncerSuscription =  this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => this.ondebouncer.emit(value))
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  onValue( data: string ):void {
    this.search.emit( data )
  }

  onKeyUp( search: string): void {
    this.debouncer.next(search)
  }
}
