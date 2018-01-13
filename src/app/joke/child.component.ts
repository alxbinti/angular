import {Component, Input} from '@angular/core';
import {JokeComponent} from './joke.component';


@Component ({
selector: 'app-child',
template: `
    <p> {{ jokeNoChild }} from child</p>
`
})
export class ChildComponent {
    @Input() jokeNoChild: number;
}




