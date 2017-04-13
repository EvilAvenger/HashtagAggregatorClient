import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/share";
import {Observable} from "rxjs";
import {AppConfigService} from "../../shared/services/config/app-config.service";
import {HashTag} from "../../shared/models/hashtag";

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
    let tags = <HashTag[]>hashtags.json();
    return tags.filter(x => x.isEnabled);
  }
}
