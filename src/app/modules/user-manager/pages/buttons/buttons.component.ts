import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonResponse } from '../../../../shared/interface/common-response.interface';
import { NgZorroAntdModule } from '../../../../shared/ng-zorro-antd.module';
import { SharedModule } from '../../../../shared/shared.module';
import { IButtonData } from '../../interface/buttons.interface';
import { ButtonsData } from '../../models/buttons.model';
import { ButtonDataService } from '../../services/button-data.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgZorroAntdModule, SharedModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent implements OnInit {
  isVisibleModal: boolean = false;

  form!: FormGroup;
  buttonStyle: any = {};
  iconStyle: any = {};
  buttonDataList: ButtonsData[] = [];

  constructor(private fb: FormBuilder,
    private buttonDataService: ButtonDataService,
    private notification: NzNotificationService,
    private modal: NzModalService) {

  }
  ngOnInit(): void {
    this.createForm();
    this.getButtonData();
  }

  getButtonData(): void {
    this.buttonDataService.getAllButtonData().subscribe({
      next: (res: CommonResponse<IButtonData[]>) => {
        if (res.data) {
          this.buttonDataList = res.data.map(buttonData => new ButtonsData(buttonData));
        }
      },
      error: (err) => {
        this.errorModal(err);
      }
    });
  }


  createForm() {
    this.form = this.fb.group({
      action: [null, Validators.required],
      fontColor: ['#000000', Validators.required],
      buttonColor: ['#ffffff', Validators.required],
      borderRadius: [null, Validators.required],
      buttonText: ['ตัวอย่างปุ่ม', Validators.required],
      buttonDetails: [null, Validators.required],
      icon: ['question-circle', Validators.required],
      iconColor: ['#000000', Validators.required]
    });
    this.form.valueChanges.subscribe((value) => {
      this.updateButtonStyle(value);
      this.updateIconStyle(value);
    });
  }



  createButton(newButton: IButtonData): void {
    this.buttonDataService.createButton(newButton).subscribe({
      next: (res: CommonResponse<object>) => {
        this.notification.create(
          'success',
          'Notification Title',
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        );
      },
      error: (err) => {
        this.errorModal(err);
      }
    });
  }


  updateButtonStyle(value: any) {
    this.buttonStyle = {
      color: value.fontColor,
      backgroundColor: value.buttonColor,
      borderRadius: value.borderRadius + 'px'
    };
  }

  updateIconStyle(value: any) {
    this.iconStyle = {
      color: value.iconColor,
      marginRight: '8px'
    };
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    this.createButton(this.form.value);
    this.isVisibleModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleModal = false;
  }

  errorModal(data: any) {
    this.modal.error({
      nzTitle: 'This is an error message',
      nzContent: data.message
    });
  }

}
