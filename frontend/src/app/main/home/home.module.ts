import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesListComponent } from './messages-list';
import { MessageComponent } from './messages-list/message/message.component';
import { HomeComponent } from './home.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import {HashtagSelectorComponent} from "./hashtag-selector/hashtag-selector.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HomeComponent,
        MessageComponent,
        MessagesListComponent,
        HashtagSelectorComponent
    ],
    imports: [
        CommonModule,
        LazyLoadImageModule,
        Ng2FilterPipeModule,
        FormsModule
    ],
    providers: [

    ]
})
export class HomeModule {
}
