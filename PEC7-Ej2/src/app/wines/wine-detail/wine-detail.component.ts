import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from '../../models/wine';
import { WineQuantityChange } from '../../models/wine-quantity-change';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineDetailComponent implements OnInit {
  @Input() public wine: Wine;
  @Output() public quantityChange: EventEmitter<WineQuantityChange> =
    new EventEmitter();

  public wineId: number;
  public respuesta:any;

  constructor(
    private route: ActivatedRoute,
    private wineService: WineService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.cargarData(paramMap.params.id)
    });
  }

  cargarData(wineId: number) {
    this.wineService.getWine(wineId).subscribe(respuesta => {
      this.wine = JSON.parse(JSON.stringify(respuesta));
    })
  }

  incrementInCart() {
    this.quantityChange.emit({ wine: this.wine, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.wine.quantityInCart > 0) {
      this.quantityChange.emit({ wine: this.wine, changeInQuantity: -1 });
    }
  }
}
