import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  setLocalStorage(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string) {
    const data = localStorage.getItem(key) || "";
    return data ? JSON.parse(data) : null;
  }

  deleteLocalStorageValues(key: string){
    localStorage.removeItem(key)
  }
}
