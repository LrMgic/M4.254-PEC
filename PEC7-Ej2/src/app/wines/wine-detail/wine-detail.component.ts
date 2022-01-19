import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Wine } from "../../models/wine";
import { WineQuantityChange } from "../../models/wine-quantity-change";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineDetailComponent implements OnInit {
  @Input() public wine: Wine;
  @Output() public quantityChange: EventEmitter<WineQuantityChange> =
    new EventEmitter();

  constructor() {}

  ngOnInit() {}

  incrementInCart() {
    this.quantityChange.emit({ wine: this.wine, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.wine.quantityInCart > 0) {
      this.quantityChange.emit({ wine: this.wine, changeInQuantity: -1 });
    }
  }
}
