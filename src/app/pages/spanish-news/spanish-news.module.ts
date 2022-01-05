import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpanishNewsRoutingModule } from './spanish-news-routing.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    SpanishNewsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HttpRequestService],
})
export class SpanishNewsModule {}
