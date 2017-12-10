import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  videos:Array<Video>;

  constructor(){
    this.videos = [
      new Video(1, "Angular", "f8qBeaGe2S4", "Nest components in Angular"),
      new Video(2, "React", "bBiITqaO08E", "Multiple Child Components in React")
    ]
  }
}
