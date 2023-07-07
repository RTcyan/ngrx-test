import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiStringHandler } from '@taiga-ui/cdk';
import { Gender } from '../../../../api/info/models/user/gender';
import { Store } from '@ngrx/store';
import { UserActions, UserSelectors } from 'src/app/info/state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public destroy$ = new Subject<void>();

  public form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    gender: new FormControl(),
  });
  
  public genders: readonly Gender[] = [
    {
      code: 1,
      value: 'Мужской',
    },
    {
      code: 2,
      value: 'Женский',
    },
  ];

  public genderStringify: TuiStringHandler<Gender> = gender => gender.value;

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.select(UserSelectors.mainInfoSelector).pipe(
      takeUntil(this.destroy$),
    ).subscribe((mainInfo) => {
      this.form.patchValue(mainInfo, { emitEvent: false });
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe((mainInfo) => {
      this.store.dispatch(UserActions.mainInfoChange({ mainInfo }))
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
