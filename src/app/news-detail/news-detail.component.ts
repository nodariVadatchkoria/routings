import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news: any;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.news = this.newsService.news.find(news => news.id === +id)
      })

    const queryParams = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe(params =>{

    })

    const fragment = this.route.snapshot.fragment;
    this.route.fragment.subscribe(params =>{

      console.log(queryParams);
      console.log(params);
      console.log(fragment);
    })
  }
}
