import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private service: HttpRequestService) {}

  // aray de resultados
  public globalNewsResults: any = [];

  ngOnInit(): void {
    this.service.getGlobalNews().subscribe((result) => {
      console.log(result);
      this.globalNewsResults = result.articles;
    });
  }
}
