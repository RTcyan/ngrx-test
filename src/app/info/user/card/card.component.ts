import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSelectors } from '../../state';

@Component({
  selector: 'app-user-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public user$ = this.store.select(UserSelectors.userSelector);

  public constructor(private store: Store) {}
}
