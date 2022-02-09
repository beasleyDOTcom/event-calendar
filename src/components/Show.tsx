import * as React from 'react';

interface SinglePerformance {
  "ID": string,
  "individualEventUrl": string,
  "title"?: string,
  "image"?: string,
  "dateTime"?: string,
  "urlsFromDescription"?: string[],
  "venueName"?: string,
  "venueUrl"?: string,
}

interface AppProps {
    arrayOfShows: SinglePerformance[]
}

function Show({arrayOfShows}: AppProps){
    let arrayInReverse: SinglePerformance[] = [];

    for( let i = arrayOfShows.length - 1; i >= 0; i--){

        arrayInReverse.push(arrayOfShows[i]);

    }

    function showDetails (singleEvent: SinglePerformance): React.ReactElement {
        return(

            <div key={singleEvent.ID}>
                <img src={singleEvent.image}/>
                <ul>
                    <li>{singleEvent.dateTime}</li>
                </ul>
                <a href={singleEvent.venueUrl}>{singleEvent.venueName}</a>

            </div>
        )
    }
    return (
        <>
            {
                arrayInReverse.map(showDetails)
            }
        </>
    )


}

export default Show;













