import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgZorroAntdModule } from '../../../../shared/ng-zorro-antd.module';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-create-menus',
  standalone: true,
  imports: [NgZorroAntdModule, SharedModule],
  templateUrl: './create-menus.component.html',
  styleUrl: './create-menus.component.scss'
})
export class CreateMenusComponent implements OnInit {
  menuForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.menuForm = this.fb.group({
      menuItems: this.fb.array([])
    });
  }

  get menuItems(): FormArray {
    return this.menuForm.get('menuItems') as FormArray;
  }

  buttons(menuItemIndex: number): FormArray {
    return this.menuItems.at(menuItemIndex).get('buttons') as FormArray;
  }

  subMenu(menuItemIndex: number): FormArray {
    return this.menuItems.at(menuItemIndex).get('subMenu') as FormArray;
  }

  subMenuButtons(menuItemIndex: number, subMenuIndex: number): FormArray {
    return this.subMenu(menuItemIndex).at(subMenuIndex).get('buttons') as FormArray;
  }

  subSubMenu(menuItemIndex: number, subMenuIndex: number): FormArray {
    return this.subMenu(menuItemIndex).at(subMenuIndex).get('subMenu') as FormArray;
  }

  subSubMenuButtons(menuItemIndex: number, subMenuIndex: number, subSubMenuIndex: number): FormArray {
    return this.subSubMenu(menuItemIndex, subMenuIndex).at(subSubMenuIndex).get('buttons') as FormArray;
  }

  createMenuItem(): FormGroup {
    return this.fb.group({
      title: [''],
      icon: [''],
      route: [''],
      buttons: this.fb.array([]),
      subMenu: this.fb.array([]),
      groupTitle: ['']
    });
  }

  createButton(): FormGroup {
    return this.fb.group({
      id: ['']
    });
  }

  addMenuItem(): void {
    this.menuItems.push(this.createMenuItem());
  }

  addSubMenu(menuItemIndex: number): void {
    this.subMenu(menuItemIndex).push(this.createMenuItem());
  }

  addButton(menuItemIndex: number): void {
    this.buttons(menuItemIndex).push(this.createButton());
  }

  addButtonToSubMenu(menuItemIndex: number, subMenuIndex: number): void {
    this.subMenuButtons(menuItemIndex, subMenuIndex).push(this.createButton());
  }

  addSubSubMenu(menuItemIndex: number, subMenuIndex: number): void {
    this.subSubMenu(menuItemIndex, subMenuIndex).push(this.createMenuItem());
  }

  addButtonToSubSubMenu(menuItemIndex: number, subMenuIndex: number, subSubMenuIndex: number): void {
    this.subSubMenuButtons(menuItemIndex, subMenuIndex, subSubMenuIndex).push(this.createButton());
  }

  removeMenuItem(index: number): void {
    this.menuItems.removeAt(index);
  }

  removeSubMenu(menuItemIndex: number, subMenuIndex: number): void {
    this.subMenu(menuItemIndex).removeAt(subMenuIndex);
  }

  removeButton(menuItemIndex: number, buttonIndex: number): void {
    this.buttons(menuItemIndex).removeAt(buttonIndex);
  }

  removeButtonFromSubMenu(menuItemIndex: number, subMenuIndex: number, buttonIndex: number): void {
    this.subMenuButtons(menuItemIndex, subMenuIndex).removeAt(buttonIndex);
  }

  removeSubSubMenu(menuItemIndex: number, subMenuIndex: number, subSubMenuIndex: number): void {
    this.subSubMenu(menuItemIndex, subMenuIndex).removeAt(subSubMenuIndex);
  }

  removeButtonFromSubSubMenu(menuItemIndex: number, subMenuIndex: number, subSubMenuIndex: number, buttonIndex: number): void {
    this.subSubMenuButtons(menuItemIndex, subMenuIndex, subSubMenuIndex).removeAt(buttonIndex);
  }
}
