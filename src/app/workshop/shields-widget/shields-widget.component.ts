/**
 * this is an incomplete widget!
 * it is missing its selector!
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, share, tap } from 'rxjs';
import { AppState } from '../../app.state';
import { SnitchService } from '../../snitch.service';
import { selectShields } from '../computer.selectors';

@Component({
  selector: 'app-shields-widget',
  templateUrl: './shields-widget.component.html',
  styleUrls: ['./shields-widget.component.scss']
})
export class ShieldsWidgetComponent implements OnInit {

  constructor(private store: Store<AppState>, private snitch: SnitchService) { }

  ngOnInit(): void {
  }

  percent$ = this.store.select(selectShields).pipe(
    //DO NOT change the tap and share operators below
    tap((shieldPowerAmount: number) => this.snitch.OnVisualChange({shield: shieldPowerAmount})),
    share()
  );
  percentClass$ = this.percent$.pipe(
    map(y => "percent-"+y)
  );
  percentStr$ = this.percent$.pipe(
    map(z => (z*10)+'%')
  );

}
