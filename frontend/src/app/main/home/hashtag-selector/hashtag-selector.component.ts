import {
  Component,
  OnInit, OnDestroy, Input
} from '@angular/core';
import {AppState} from "../../../app.service";
import {HashTag} from "../../shared/models/hashtag";
import {HashTagService} from "../shared/hashtag.service";
import {Subscription} from "rxjs";
import {MessageService} from "../shared/message.service";

@Component({
  selector: 'hashtag-selector',
  styleUrls: ['hashtag-selector.component.scss'],
  templateUrl: 'hashtag-selector.component.html',
  providers: [HashTagService]
})
export class HashtagSelectorComponent implements OnInit, OnDestroy {

  @Input() private selectedValue: HashTag;
  private hashtagSubscription: Subscription;
  private tags: HashTag[];

  constructor(public appState: AppState,
              private hashTagService: HashTagService,
              private messageService: MessageService) {
  }

  public ngOnInit(): void {

    this.hashtagSubscription =
      this.hashTagService.getData()
        .subscribe(tags => this.tags = tags);
  }

  public ngOnDestroy(): void {
    this.hashtagSubscription.unsubscribe();
  }

  public onChange(value: string): void {
    this.messageService.changeHashTag(value);
  }
}
