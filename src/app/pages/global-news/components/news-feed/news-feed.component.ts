import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { Inews } from 'src/app/pages/models/news.interface';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private service: HttpRequestService) {}

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

  ngOnInit(): void {
    this.service.getGlobalNews().subscribe((result) => {
      console.log(result);
      this.newsResults = result.articles;
    });
  }
}
