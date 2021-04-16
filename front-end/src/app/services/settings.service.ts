import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private settingClient: HttpClient) {
  }

  readonly baseURL: string = 'http://localhost:3000/settings';
  accessToken = sessionStorage.getItem('accessToken');

  getSettings() {
    return this.settingClient.get(this.baseURL, {
      observe: 'response',
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  storeSetting(setting: {
    sectionName: string,
    sectionContent: JSON
  }) {
    return this.settingClient.post(this.baseURL, setting,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  deleteSetting(id: number) {
    return this.settingClient.delete(`${this.baseURL}/${id}`,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  getSettingId(id: string) {
    return this.settingClient.get(`${this.baseURL}/${id}`,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }

  updateSetting(id: string, setting: {
    sectionName: string,
    sectionContent: JSON
  }) {
    return this.settingClient.patch(`${this.baseURL}/${id}`, setting,{
      headers: {
        "Authorization": "Bearer " + this.accessToken
      }
    });
  }
}
