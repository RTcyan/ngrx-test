import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TuiStringHandler } from '@taiga-ui/cdk';
import { FormService, MAIN_INFO_FROM_GROUP } from '../../services/form.service';
import { Gender } from '../../models/gender';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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

  public constructor(private formService: FormService) {
    console.log(this.formService);
  }

  public get form(): FormGroup {
    return this.formService.form.controls[MAIN_INFO_FROM_GROUP] as FormGroup;
  }
}
