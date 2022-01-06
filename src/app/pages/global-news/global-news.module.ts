import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNewsRoutingModule } from './global-news-routing.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    GlobalNewsRoutingModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule,
  ],
  providers: [HttpRequestService],
})
export class GlobaNewsModule {}
