import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private settingClient: HttpClient) { }
  readonly baseURL: string = "http://localhost:3000/settings";
  getSettings() {
  return this.settingClient.get(this.baseURL,{observe:'response'})
  }

  storeSetting(setting:{sectionName:string, 
    sectionContent:JSON}){
    return this.settingClient.post(this.baseURL,setting)
  }

  deleteSetting(id:number)
  {
    return this.settingClient.delete(`${this.baseURL}/${id}`)
  }

  getSettingId(id: number) {

    return this.settingClient.get(`${this.baseURL}/${id}`)
  }

  updateAuthor(id:string, setting:{sectionName:string, 
    sectionContent:JSON})
    {
      return this.settingClient.patch(`${this.baseURL}/${id}`,setting);
    }
}
