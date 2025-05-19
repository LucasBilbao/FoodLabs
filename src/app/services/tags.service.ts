import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UriBuilder } from '../utils/uriBuilder';
import { Tag } from '../interfaces/tag.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private tags$$: Subject<Tag[]> = new Subject<Tag[]>();
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  public get tags$(): Observable<Tag[]> {
    return this.tags$$.asObservable();
  }

  public set tags$(value: Tag[]) {
    this.tags$$.next(value);
  }

  public get isLoading$(): Observable<boolean> {
    return this.isLoading$$.asObservable();
  }

  public set isLoading$(value: boolean) {
    this.isLoading$$.next(value);
  }

  public getTags() {
    const uri = new UriBuilder().setPath('tags').build();
    this.isLoading$$.next(false);
    this.http.get<Tag[]>(uri).subscribe((tags) => {
      this.isLoading$$.next(false);
      this.tags$$.next(tags);
    });
  }
}
