import {
  Component,
  OnInit, OnDestroy, Input, ViewChild, ElementRef, ViewEncapsulation
} from '@angular/core';
import { HashTagService } from '../../../home/shared/hashtag.service';
import { AppState } from '../../../../app.service';
import { HashTag } from '../../../shared/models/hashtag';
import { Subscription } from 'rxjs';
import { AppConfigService } from '../../../shared/services/config/app-config.service';
import { MessageService } from '../../../home/shared/message.service';

@Component({
  selector: 'hashtag-selector',
  styleUrls: ['hashtag-selector.component.scss'],
  templateUrl: 'hashtag-selector.component.html',

  encapsulation: ViewEncapsulation.None,
  providers: [HashTagService]
})
export class HashtagSelectorComponent implements OnInit, OnDestroy {

  @ViewChild('hashSelect') hashSelect: ElementRef;
  @Input() private selectedValue: string;

  private hashtagSubscription: Subscription;
  private tags: HashTag[];

  constructor(public appState: AppState,
              private hashTagService: HashTagService,
              private messageService: MessageService,
              private  configService: AppConfigService) {
  }

  public ngOnInit(): void {

    let parentTag = this.configService.getApp<string>("hashtag");
    this.hashtagSubscription =
      this.hashTagService.getData(parentTag)
        .subscribe(tags => this.setSelected(tags));
  }

  private setSelected(tags: HashTag[]): void {
    this.tags = tags;
    this.selectedValue = tags[0].hashTag;
    this.messageService.changeHashTag(this.selectedValue);
  }

  private trackByFn(index, item): number {
    return item.id;
  }

  public ngOnDestroy(): void {
    this.hashtagSubscription.unsubscribe();
  }

  public onChange(value: string): void {
    this.messageService.changeHashTag(value);
  }
}
