import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { Inews } from 'src/app/pages/models/news.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  constructor(
    private service: HttpRequestService,
    private spinner: NgxSpinnerService
  ) {}

  public title: string = 'English News';

  // aray de resultados
  public newsResults: Inews[] = [
    {
      urlToImage: '',
      title: '',
      description: '',
      url: '',
    },
  ];

  // throttle = 0;
  // distance = 2;

  ngOnInit(): void {
    this.service.getGlobalNews().subscribe((result) => {
      this.newsResults = result.articles;
    });
  }

  onScroll(): void {
    this.service.getGlobalNews().subscribe((result) => {
      this.newsResults.push(...result.articles);
    });
  }
}
