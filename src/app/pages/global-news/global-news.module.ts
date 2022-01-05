import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNewsRoutingModule } from './global-news-routing.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [CommonModule, GlobalNewsRoutingModule, HttpClientModule],
  providers: [HttpRequestService],
})
export class GlobaNewsModule {}
