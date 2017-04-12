import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Message} from "./models/message"
import "rxjs/add/operator/map";
import "rxjs/add/operator/share";
import {Observable, Subject} from "rxjs";
import {AppConfigService} from "../../shared/services/config/app-config.service";

@Injectable()
export class MessageService {

  private messageSource = new Subject<string>();
  public messageFilterChanged$ = this.messageSource.asObservable();

  constructor(private http: Http, private  configService: AppConfigService) {
  }

  public getData(value: string): Observable<Message[]> {
    console.log("hereeee");
    console.log(value);
    let uri = this.configService.getApp<string>("apiEndpoint") + `statistics/${value.substring(1)}`;

    console.log(uri);
    return this.http.get(uri)
      .map(messages => this.getMappedMessage(messages))
      .share();
  }

  public changeHashTag(tag: string) {
    this.messageSource.next(tag);
  }

  private getMappedMessage(message: any): Message[] {
    let messages = <Message[]>message.json();
    messages.sort((first, second) => first.postDate < second.postDate ? 1 : -1);
    return messages;
  }
}
