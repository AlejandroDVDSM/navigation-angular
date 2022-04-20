import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieID: number | undefined
  movieName: string | undefined
  movieRelease: string | undefined
  movieRunningTime: string | undefined
  movieDirector: string | undefined
  movieScriptwriter: string | undefined
  movieIMDBRating: string | undefined
  movieMetascoreRating: string | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieID = this.route.snapshot.params['id']
    this.movieName = this.route.snapshot.params['name']
    this.movieRelease = this.route.snapshot.params['release']
    this.movieRunningTime = this.route.snapshot.params['runningTime']
    this.movieDirector = this.route.snapshot.params['director']
    this.movieScriptwriter = this.route.snapshot.params['scriptwriter']
    this.movieIMDBRating = this.route.snapshot.params['imdbRating']
    this.movieMetascoreRating = this.route.snapshot.params['metascoreRating']
  }

}
