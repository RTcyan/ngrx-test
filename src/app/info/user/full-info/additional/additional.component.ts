import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HOBBIES_FROM_GROUP } from '../../models/user';
import { Store } from '@ngrx/store';
import { UserActions, UserSelectors } from 'src/app/info/state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit, OnDestroy {
  public destroy$ = new Subject<void>();

  public emptyControl = new FormControl("");

  public form = new FormGroup({
    [HOBBIES_FROM_GROUP]: new FormArray([]),
  })

  public get hobbiesFormArray(): FormArray {
    return this.form.controls[HOBBIES_FROM_GROUP] as FormArray;
  }

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.select(UserSelectors.additionalInfoSelector).pipe(
      takeUntil(this.destroy$),
    ).subscribe((hobbies) => {
      if (hobbies) {
        hobbies.forEach((hobby, idx) => {
          const control = this.hobbiesFormArray.controls[idx] as FormControl;
          if (control) {
            control.setValue(hobby, { emitEvent: false })
          } else {
            this.hobbiesFormArray.push(new FormControl(hobby), { emitEvent: false })
          }
        })
      }
    });

    this.observeEmptyComtrol();
    this.observeForm();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private observeEmptyComtrol(): void {
    this.emptyControl.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe((startOfNewHobbyName) =>{ 
      this.hobbiesFormArray.push(new FormControl(startOfNewHobbyName));
      requestAnimationFrame(() => {
        this.emptyControl.setValue("", { emitEvent: false });
      })
    });
  }

  private observeForm(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(({ hobbies }) => {
      this.store.dispatch(UserActions.additionalInfoChange({ hobbies }))
    });
  }
}
