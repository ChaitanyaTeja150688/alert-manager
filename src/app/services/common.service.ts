import { Injectable } from '@angular/core';
import { MenuList } from '../components/alert-manager-content/alert-manager-content.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  memuList: MenuList[] = [];
  constructor() { }
}
