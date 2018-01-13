import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { ChildComponent } from './joke/child.component';
import { JokeService } from './services/joke.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }