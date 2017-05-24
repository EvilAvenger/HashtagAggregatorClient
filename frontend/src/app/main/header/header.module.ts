import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashtagSelectorComponent } from './navbar/hashtag-selector/hashtag-selector.component';
import { AuthModule } from '../shared/auth.module';
import { SharedModule } from '../shared/shared.module';
import { Collapse } from './navbar/navbar-collapse.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HashtagSelectorComponent,
    Collapse
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {

}
