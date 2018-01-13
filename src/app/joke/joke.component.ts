import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';

import { JokeResponse } from '../models/jokeResponse';
import { Joke } from '../models/joke';
import { OnInit } from '@angular/core';

@Component ({
    selector: 'app-joke-container',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit  {
    private jokeService: JokeService;
    private jokeList: Joke[];

     jokeNo = 5;

    constructor(jokeService: JokeService) {
        this.jokeService = jokeService;
        this.jokeList = new Array<Joke>();
     }

    ngOnInit() {
        this.getJokes();
    }

    getJokes() {
       this.jokeService.getJokes(this.jokeNo).subscribe(jokeResponse => {
           jokeResponse.value.forEach(joke => {
                this.jokeList.push(joke);
           });
      });
    }

    deleteJokes() {
        while (this.jokeList.length > 0) { this.jokeList.pop(); }
    }
}

