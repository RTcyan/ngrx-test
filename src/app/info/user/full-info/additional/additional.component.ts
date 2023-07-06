import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormService, HOBBIES_FROM_GROUP } from '../../services/form.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
  public emptyControl = new FormControl("");

  public get form(): FormGroup {
    return this.formService.form as FormGroup;
  }

  public get hobbies(): FormArray {
    return this.form.controls[HOBBIES_FROM_GROUP] as FormArray;
  }

  public constructor(private formService: FormService) { }

  public ngOnInit(): void {
    this.emptyControl.valueChanges.subscribe((startOfNewHobbyName) =>{ 
      this.hobbies.push(new FormControl(startOfNewHobbyName));
      requestAnimationFrame(() => {
        this.emptyControl.setValue("", { emitEvent: false });
      })
    });
  }
}
