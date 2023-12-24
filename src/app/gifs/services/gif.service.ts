import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
//const GIPHY_API_KEY:string = 'GlKc8sKbcqHJ3WSSswM5lDRkwFet3hq5';

@Injectable({ providedIn: 'root' }) //Hace que el servicio pueda usarse en toda la app
export class GifsService {
  constructor( private http: HttpClient) {}

  private apiKey:string = 'GlKc8sKbcqHJ3WSSswM5lDRkwFet3hq5';
  private serviceUrl:string = 'http://api.giphy.com/v1/gifs';
  private _tagsHistory:string[] = [];

  public gifList: Gif[] = [];

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    //Que no se repitan los tags
    if (this.tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10); //No pasen del 10

  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

 searchTag(tag:string):void{
    if (tag.length === 0 ) return;

    this.organizeHistory(tag);

    //Llamar a los gifs con HttpClientModule
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp => {
        this.gifList = resp.data;
      });
  }
}
