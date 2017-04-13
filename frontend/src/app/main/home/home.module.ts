import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesListComponent } from './messages-list';
import { MessageComponent } from './messages-list/message/message.component';
import { HomeComponent } from './home.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {Ng2FilterPipeModule} from "ng2-filter-pipe";

import {FormsModule} from "@angular/forms";
import {MessageService} from "./shared/message.service";

@NgModule({
    declarations: [
        HomeComponent,
        MessageComponent,
        MessagesListComponent
    ],
    imports: [
        CommonModule,
        LazyLoadImageModule,
        Ng2FilterPipeModule,
        FormsModule
    ],
    providers: [
      MessageService
    ]
})
export class HomeModule {
}
