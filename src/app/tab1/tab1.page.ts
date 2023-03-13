import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { link } from 'fs';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(postService:PostService) {}

  exibirPost(): void{
   // return this.httpClient.post(linkDaApi, data)
  }

  

  ngOnInit(): void {
  

  }



}
