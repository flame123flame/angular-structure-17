import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { NgZorroAntdModule } from '../../../../shared/ng-zorro-antd.module';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [NgZorroAntdModule, SharedModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  constructor(private fb: FormBuilder, private router: Router) { }

  create() {
    this.router.navigate(['/user-management/create-menus']);
  }

}
