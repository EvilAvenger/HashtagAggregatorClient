import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class SearchService {

  private searchConfirmedSource = new Subject<string>();

  public searchConfirmed$ = this.searchConfirmedSource.asObservable();

  public confirmSearch(text: string) {
    this.searchConfirmedSource.next(text);
  }
}
