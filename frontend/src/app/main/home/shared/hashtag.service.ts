import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/share";
import {Observable} from "rxjs";
import {AppConfigService} from "../../shared/services/config/app-config.service";
import {HashTag} from "../../shared/models/hashtag";
import {$} from "protractor";

@Injectable()
export class HashTagService {

  constructor(private http: Http, private  configService: AppConfigService) {
  }

  public getData(parentTag : string): Observable<HashTag[]> {

    let uri = this.configService.getApp<string>("apiEndpoint") + `hashtag/children/${parentTag}`;

    return this.http.get(uri)
      .map(hashtags => this.getHashtags(hashtags))
      .share();
  }

  private getHashtags(hashtags: any): HashTag[] {
    console.log(hashtags);

    let tags = <HashTag[]>hashtags.json();
     for(let i = 0; i< tags.length; i++){
       tags[i].hashTag = `${tags[i].hashTag}`;
     }
    return tags.filter(x => x.isEnabled);
  }
}
