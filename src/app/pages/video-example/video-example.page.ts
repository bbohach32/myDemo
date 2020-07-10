import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
const YTPlayer = require('yt-player')

interface Video {
  url: any,
  author: string,
  title: string
}

@Component({
  selector: 'video-example',
  templateUrl: './video-example.page.html',
  styleUrls: ['./video-example.page.scss'],
})

export class VideoExamplePage implements OnInit {
  // @ViewChild("player", {static: true}) playerCanvas: ElementRef;

  videoList: Video[] = [{
    // First Set
    url: 'https://ytcropper.com/embed/Jr5f07c81390707/loop/noautoplay/', // dead and co
    title: 'Iko Iko',
    author: 'Dylan'
  }, {
    url: 'https://www.youtube.com/embed/zFqS5A8Bb9U',  // dead and co
    title: 'Next Time You See Me',
    author: 'Chris'
  }, {
    url: 'https://www.youtube.com/embed/20dic8S3cWI', // slow - grateful
    title: 'Wharf Rat',
    author: 'Corey'
  }, {
    url: 'https://www.youtube.com/embed/2jTe3md_hjw', // grateful
    title: 'Masterpiece',
    author: 'Lisa'
  }, {
    url: 'https://www.youtube.com/embed/hIoCJMjIqaw', // slow - oteil
    title: 'If I Had The World To Give',
    author: 'Leah'
  }, {
    url: 'https://www.youtube.com/embed/GUu4bFEatPY', // grateful
    title: 'Liberty',
    author: 'Chris'
  }, {
    url: 'https://www.youtube.com/embed/O0--9hSUncM', // dead and co
    title: 'Althea',
    author: 'Kayla'
  }, 
  // Second Set
  {
    url: 'https://www.youtube.com/embed/2kQ1D7EpTjI', // grateful
    title: 'Countdown/Sugar Mag',
    author: 'Cheek'
  }, {
    url: 'https://www.youtube.com/embed/MHU5FywUBEk', // slower - brent
    title: 'Blow Away',
    author: 'Dylan'
  }, {
    url: 'https://www.youtube.com/embed/KN1bE-I1PnU', // slow - dead and co
    title: 'Dear Prudence',
    author: 'Lisa'
  }, {
    url: 'https://www.youtube.com/embed/MzLevPoUZoU', // grateful
    title: 'Brown-Eyed Women',
    author: 'Corey'
  }, {
    url: 'https://www.youtube.com/embed/G6vLwgQOF7o', // slow - grateful
    title: 'Loser',
    author: 'Dylan'
  }, {
    url: 'https://www.youtube.com/embed/HN23zIehs_M', // dead and co
    title: 'Drums',
    author: 'Cheek'
  }, {
    url: 'https://www.youtube.com/embed/6VfD2xit3rE', // grateful
    title: 'Space',
    author: 'Cheek'
  }, {
    url: 'https://www.youtube.com/embed/M45iNO3JA6Y', // dead and co
    title: 'New Speedway Boogie',
    author: 'Corey'
  }, {
    url: 'https://www.youtube.com/embed/fGAlqjM_zvA', // slow -> fast - end of third set before encore - grateful
    title: 'Stella/Sugar Mag Reprise',
    author: 'Cheek'
  }, 
  //Encore 
  {
    url: 'https://www.youtube.com/embed/kql3bwirqrA',  // slower - dead and co
    title: 'The Weight',
    author: 'Chris'
  }, {
    url: 'https://www.youtube.com/embed/xh9PlAflK00', // slower - dead and co
    title: 'Hard Rain',
    author: 'Lisa'
  }]

  ytPlaylist: Video = {
    url: 'https://www.youtube.com/embed/videoseries?wmode=opaque&list=PLvk1TvsE5YPOWWjUgNDe-iqmDw6wySeUQ&modestbranding=1',
    title: 'The Playlist',
    author: 'Cheek'
  }
  //player = YTPlayer
  // playerHTML: any;

  constructor(
    private sanitizer: DomSanitizer,
  ) { 
  }

  ngOnInit() {
    // this.playerHTML = this.playerCanvas.nativeElement
    // this.onYouTubeIframeAPIReady()
    this.ytPlaylist.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytPlaylist.url);

    for (let video of this.videoList) {
      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
    }

  }

  // onYouTubeIframeAPIReady() {
  //   this.player = new YTPlayer( this.playerHTML, {
  //     events: { 'onStateChange': this.onPlayerStateChange(Event) },            
  //   });
  // }

  // onPlayerStateChange(event: any) {
  //   console.log("Made it here")
  //   switch(event.data) {
  //     case 0:               
  //             this.playerHTML.src = this.videoList[5].url;
  //             this.onYouTubeIframeAPIReady();                           
  //     break;
  //   case 1:
  //       alert('video playing from ' + this.player.getCurrentTime());
  //     break;
  //   case 2:
  //       alert('video paused at ' + this.player.getCurrentTime());
  //     break;
  // }
  // }

}
