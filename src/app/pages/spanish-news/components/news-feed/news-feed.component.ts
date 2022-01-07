import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { Inews } from 'src/app/pages/models/news.interface';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private service: HttpRequestService) {}

  public title: string = 'Spanish News';
  // array de resultados
  public newsResults: Inews[] = [
    {
      urlToImage: '',
      title: '',
      description: '',
      url: '',
    },
  ];

  ngOnInit(): void {
    this.service.getSpanishNews().subscribe((result) => {
      console.log(result);
      this.newsResults = result.articles;
    });
  }

  onScroll(): void {
    this.service.getSpanishNews().subscribe((result) => {
      this.newsResults.push(...result.articles);
    });
  }
}
