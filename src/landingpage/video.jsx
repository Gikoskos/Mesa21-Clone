import React from "react";
import ReactDOM from "react-dom";


function makeEmbededYTVideoURL(id, opts) {
    let video_url = 'https://www.youtube.com/embed/' + id + '?';

    for (let opt_name in opts) {
        video_url += opt_name + '=' + opts[opt_name] + '&';
    }

    //if the user wants the video to loop
    //we have to append the playlist parameter with the video's id
    //https://developers.google.com/youtube/player_parameters#loop
    if (opts.loop) {
        video_url += 'playlist=' + id + '&';
    }

    if (!window.location.href.startsWith('file'))
        return video_url += 'origin=' + window.location.href;

    //remove the trailing ampersand
    return video_url.slice(0, video_url.length - 1);
}

export default class IndexVideo extends React.Component {
    constructor(props) {
        super(props);

        this.video_url = makeEmbededYTVideoURL('NPvaz99PvBY', {
            controls: '0',
            showinfo: '0',
            autoplay: '1',
            loop: '1'
        });
    }

    render() {
        return (
            <div className="row" id="mesa21-video-row">
                <a href="https://www.doordash.com/store/103791/?utm_source=partner-link&utm_medium=website&utm_campaign=103791"
                   className="doordash-button"></a>
                <div className="embed-responsive embed-responsive-16by9 mesa21-video">
                    <iframe allow="autoplay; encrypted-media" allowFullScreen src={this.video_url}></iframe>
                </div>
            </div>
        );
    }
}
