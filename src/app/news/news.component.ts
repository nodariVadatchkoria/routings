import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../services/news.service";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[] =[]
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.news
  }
}
