import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private formService: FormService) { }

  public user$: Observable<User> = of();

  ngOnInit(): void {
  }

}
