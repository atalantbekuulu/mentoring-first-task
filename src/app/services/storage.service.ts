import { Injectable } from '@angular/core';
import { StorageKeys } from '../constants/storage-key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
 
  get<T>(key: StorageKeys): T | null {
    const data: string | null = localStorage.getItem(key)
    let result = null

    try {
      if (data) result = JSON.parse(data)
    }
      catch {
        return null
      }
      return result
  }
  set (key: StorageKeys, value : unknown) : boolean {
    let result: string | null = null
    try {
      result = JSON.stringify(value)
    }
    catch{
      return false
     }
    if (result){
      localStorage.setItem(key,result)
      return true
    }
    return false
  } 
  clear (): void {
    localStorage.clear()
  }

}
