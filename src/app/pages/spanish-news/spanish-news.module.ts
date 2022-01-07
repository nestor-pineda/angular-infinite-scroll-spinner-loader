import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpanishNewsRoutingModule } from './spanish-news-routing.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './../../shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    SpanishNewsRoutingModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule,
  ],
  providers: [
    HttpRequestService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
})
export class SpanishNewsModule {}
