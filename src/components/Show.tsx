import React , { useState } from 'react';
const dummy = [
    {
        ID: '270562201720589',
        individualEventUrl: 'https://www.facebook.com/events/270562201720589',
        title: 'Round 199: Beasley, Devon Dodgson, Noble Monyei, Devonnie Black, Paul Nunn',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, December 14, 2021 at 7:30 PM PST',
        urlsFromDescription: [
          'www.beasleydotcom.com/',
          'www.devondodgson.com/',
          'dearlydepartedseattle.com/',
          'www.instagram.com/devonnieblack/',
          'www.instagram.com/creativityinacan/',
          'www.abbeypresents.org',
          'www.theround.org',
          'http://www.fremontabbey.org/artsconnect',
          'http://www.fremontabbey.org/rent',
          'http://www.abbeypresents.org',
          'www.abbeypresents.org/respect'
        ],
        venueName: 'Fremont Abbey Arts Center',
        venueUrl: 'https://www.facebook.com/FremontAbbey/'
      },
      {
        ID: '570913374355981',
        individualEventUrl: 'https://www.facebook.com/events/570913374355981',
        title: "Live at the 'Shed feat. Beasley",
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Saturday, November 13, 2021 at 12:00 PM – 2:00 PM PST',
        urlsFromDescription: [ '#headtotheshed' ],
        venueName: 'Watershed Pub & Kitchen',
        venueUrl: 'https://www.facebook.com/watershedpub/'
      },
      {
        ID: '1083534639057132',
        individualEventUrl: 'https://www.facebook.com/events/1083534639057132'
      },
      {
        ID: '986031515570361',
        individualEventUrl: 'https://www.facebook.com/events/986031515570361',
        title: 'Goodtime Hustle / Don Ugly / Beasley at The Funhouse',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, September 28, 2021 at 7:00 PM – 10:30 PM PDT',
        urlsFromDescription: [
          'https://www.facebook.com/goodtimehustle',
          'https://www.facebook.com/donugly',
          'https://www.facebook.com/Beasleydotcom/'
        ],
        venueName: 'Funhouse Seattle',
        venueUrl: 'https://www.facebook.com/thefunhouseseattle/'
      },
      {
        ID: '488493038885704',
        individualEventUrl: 'https://www.facebook.com/events/488493038885704',
        title: "Beasley at Logan's in Roslyn",
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Saturday, July 17, 2021 at 7:00 PM – 10:00 PM PDT',
        urlsFromDescription: [ 'https://www.beasleydotcom.com' ],
        venueName: "Logan's Restaurant",
        venueUrl: 'https://www.facebook.com/LogansCasual'
      },
      {
        ID: '401175257647903',
        individualEventUrl: 'https://www.facebook.com/events/401175257647903',
        title: 'Melanie Horsnell and Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, February 16, 2021 at 8:00 PM PST',
        urlsFromDescription: []
      },
      {
        ID: '810079079457230',
        individualEventUrl: 'https://www.facebook.com/events/810079079457230',
        title: 'The Round (175) featuring musicians Kate Dinsmore, Beasley, Cody Kilpatrick, guest+ spoken word poet Devonnie Black & live painter SIENNA',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, December 10, 2019 at 7:30 PM – 9:30 PM PST',
        urlsFromDescription: [
          'http://www.katedinsmoremusic.com/',
          'http://www.BEASLEYdotCOM.com',
          'https://codykilpatrickmusic.bandcamp.com/',
          'http://definingdevonnie.com/',
          'www.siennadawn.com',
          'www.fremontabbey.org/volunteer',
          'www.abbeyarts.me/respect',
          'http://www.fremontabbey.org/artsconnect',
          'http://www.fremontabbey.org/rent',
          'http://www.abbeyarts.me'
        ],
        venueName: 'Fremont Abbey Arts Center',
        venueUrl: 'https://www.facebook.com/FremontAbbey/'
      },
      {
        ID: '2427294834196693',
        individualEventUrl: 'https://www.facebook.com/events/2427294834196693',
        title: 'Max Brown Music Sessions',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Sunday, November 10, 2019 at 6:00 PM – 7:00 PM UTC+01',
        urlsFromDescription: [ 'www.beasleydotcom.com' ],
        venueName: 'Max Brown Hotel Canal District',
        venueUrl: 'https://www.facebook.com/MaxBrownHotelCanalDistrict/'
      },
      {
        ID: '944704335890811',
        individualEventUrl: 'https://www.facebook.com/events/944704335890811'
      },
      {
        ID: '709031349612119',
        individualEventUrl: 'https://www.facebook.com/events/709031349612119',
        title: 'Sam Parkin, Full Step, Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Sunday, October 20, 2019 at 8:00 PM PDT',
        urlsFromDescription: [],
        venueName: 'The Sunset',
        venueUrl: 'https://www.facebook.com/sunsetseattle/'
      },
      {
        ID: '1192935904219204',
        individualEventUrl: 'https://www.facebook.com/events/1192935904219204',
        title: 'Hiawatha Night Market Pop-Up',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Saturday, October 12, 2019 at 4:00 PM – 10:00 PM PDT',
        urlsFromDescription: [
          'https://www.instagram.com/marketpopup/',
          'https://www.instagram.com/hiawathaartclub/',
          'https://www.instagram.com/outre_online/',
          'https://www.instagram.com/bitchfitvintage/',
          'https://www.instagram.com/bellyflopp/',
          'https://www.instagram.com/markymarkstyle/',
          'https://www.instagram.com/geenaraeee/',
          'https://www.instagram.com/unrulypatchouli/',
          'https://www.instagram.com/babygrrl_bk/',
          'Bunchascrunch',
          'https://www.instagram.com/bunchascrunch/',
          'https://instagram.com/oliverstellfox/',
          'https://instagram.com/stvnlndqst/',
          'Beasleydotcom',
          'https://www.instagram.com/beasleydotcom/',
          'https://instagram.com/halleygregmusic/',
          'Among Authors',
          'https://www.instagram.com/amongauthors/',
          'https://www.facebook.com/events/379396462962934/?notif_t=plan_user_joined&notif_id=1569908107740525',
          'https://www.instagram.com/dogcrush/',
          'https://www.instagram.com/nowyoureshattered/',
          'https://www.instagram.com/tangerine.tarot/',
          'https://www.instagram.com/patricktoney/',
          'Cake_life_everyday',
          'https://www.instagram.com/hiawathaartclub/'
        ]
      },
      {
        ID: '701137943693810',
        individualEventUrl: 'https://www.facebook.com/events/701137943693810',
        title: 'Beasley at The Keg and I',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, October 4, 2019 at 7:00 PM – 9:00 PM PDT',
        urlsFromDescription: [],
        venueName: 'The Keg and I',
        venueUrl: 'https://www.facebook.com/thekegandi/'
      },
      {
        ID: '344050679616524',
        individualEventUrl: 'https://www.facebook.com/events/344050679616524',
        title: 'The Two Tides, Craig Marker, Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Wednesday, July 24, 2019 at 7:30 PM PDT',
        urlsFromDescription: [
          'https://www.ticketweb.com/event/the-two-tides-craig-marker-sunset-tavern-tickets/9585225?REFERRAL_ID=twfb'
        ],
        venueName: 'The Sunset',
        venueUrl: 'https://www.facebook.com/sunsetseattle/'
      },
      {
        ID: '288432341861899',
        individualEventUrl: 'https://www.facebook.com/events/288432341861899',
        title: 'Drew Martin, Young Chhaylee, Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, February 26, 2019 at 8:00 PM PST',
        urlsFromDescription: [
          'https://www.ticketweb.com/event/drew-martin-young-chhaylee-beasley-sunset-tavern-tickets/9003065?REFERRAL_ID=twfb'
        ],
        venueName: 'The Sunset',
        venueUrl: 'https://www.facebook.com/sunsetseattle/'
      },
      {
        ID: '964182237111270',
        individualEventUrl: 'https://www.facebook.com/events/964182237111270',
        title: 'The Round: Debbie Miller, Beasley, Jaspar Lepak, poet, painter',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, February 12, 2019 at 7:30 PM – 9:30 PM PST',
        urlsFromDescription: [
          'Debbie Miller',
          'Jaspar Lepak',
          'Beasleydotcom',
          'www.fremontabbey.org/volunteer',
          'www.abbeyarts.me/respect',
          'http://www.fremontabbey.org/artsconnect',
          'http://www.fremontabbey.org/rent',
          'http://www.abbeyarts.me'
        ],
        venueName: 'Fremont Abbey Arts Center',
        venueUrl: 'https://www.facebook.com/Fremont-Abbey-Arts-Center-768675286817132/'
      },
      {
        ID: '1992237957739546',
        individualEventUrl: 'https://www.facebook.com/events/1992237957739546',
        title: 'Beasley at Club Rio',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Sunday, February 3, 2019 at 9:00 PM MST',
        urlsFromDescription: [],
        venueName: 'Club Rio',
        venueUrl: 'https://www.facebook.com/moabclubrio/'
      },
      {
        ID: '390326718438092',
        individualEventUrl: 'https://www.facebook.com/events/390326718438092',
        title: 'Jenna Talbott, Mel Soul, and Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Saturday, February 2, 2019 at 5:00 PM MST',
        urlsFromDescription: [],
        venueName: 'The Spur Bar and Grill',
        venueUrl: 'https://www.facebook.com/thespurbarandgrill/'
      },
      {
        ID: '373910066725722',
        individualEventUrl: 'https://www.facebook.com/events/373910066725722',
        title: 'Beasley At The Spur During Sundance',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, February 1, 2019 at 8:15 PM MST',
        urlsFromDescription: [ '#Sundance' ],
        venueName: 'The Spur Bar and Grill',
        venueUrl: 'https://www.facebook.com/thespurbarandgrill/'
      },
      {
        ID: '2167436259947897',
        individualEventUrl: 'https://www.facebook.com/events/2167436259947897',
        title: 'Matthew Perryman Jones/ Molly Parden/Beasley - Ballard Homestead',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Thursday, January 10, 2019 at 7:30 PM – 10:00 PM PST',
        urlsFromDescription: [
          'www.ballardhomestead.org/rent',
          'fremontabbey.org',
          'http://www.fremontabbey.org/artsconnect',
          'http://www.fremontabbey.org/rent',
          'http://www.abbeyarts.me'
        ]
      },
      {
        ID: '217446475665418',
        individualEventUrl: 'https://www.facebook.com/events/217446475665418',
        title: 'Beasley and Barrow',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, January 4, 2019 at 7:30 PM – 9:30 PM PST',
        urlsFromDescription: [],
        venueName: 'Squirrel Tree Restaurant',
        venueUrl: 'https://www.facebook.com/squirreltreeresort/'
      },
      {
        ID: '324371181721447',
        individualEventUrl: 'https://www.facebook.com/events/324371181721447',
        title: 'Dennis Dabbs, Chris & Liana, Beasley at Alberta Street Pub',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Thursday, December 27, 2018 at 9:00 PM PST',
        urlsFromDescription: [ 'Beasleydotcom.com' ],
        venueName: 'Alberta Street Pub',
        venueUrl: 'https://www.facebook.com/albertastreetpub/'
      },
      {
        ID: '520538601779357',
        individualEventUrl: 'https://www.facebook.com/events/520538601779357',
        title: 'Beasley at Berkley Cafe in Raleigh, NC',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Thursday, December 20, 2018 at 7:30 PM EST',
        urlsFromDescription: [],
        venueName: 'Berkeley Cafe',
        venueUrl: 'https://www.facebook.com/berkeleyraleigh/'
      },
      {
        ID: '183574035918516',
        individualEventUrl: 'https://www.facebook.com/events/183574035918516',
        title: 'Beasley, Zoey, and Banjo Boombox at Brew',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Thursday, October 18, 2018 at 7:00 PM – 10:00 PM PDT',
        urlsFromDescription: [ 'beasleydotcom.com' ],
        venueName: 'Brew',
        venueUrl: 'https://www.facebook.com/brewcoffeeandbeer/'
      },
      {
        ID: '238120816856874',
        individualEventUrl: 'https://www.facebook.com/events/238120816856874',
        title: 'Beasley at Simple Pleasures cafe',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, October 16, 2018 at 7:00 PM PDT',
        urlsFromDescription: [ 'beasleydotcom.com' ],
        venueName: 'Simple Pleasures Cafe',
        venueUrl: 'https://www.facebook.com/Simple-Pleasures-Cafe-111319895562806/'
      },
      {
        ID: '812680145606335',
        individualEventUrl: 'https://www.facebook.com/events/812680145606335',
        title: 'Beasley PDX House Show',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, October 12, 2018 at 8:00 PM – 11:00 PM PDT',
        urlsFromDescription: [
          'https://www.youtube.com/watch?v=PxS2LgncM7Y&t=1s',
          'www.beasleydotcom.com'
        ]
      },
      {
        ID: '1907671215990148',
        individualEventUrl: 'https://www.facebook.com/events/1907671215990148',
        title: 'Noah Byrd (Single Release!), Erika Lundahl, Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Tuesday, October 9, 2018 at 8:00 PM PDT',
        urlsFromDescription: [
          'https://www.ticketweb.com/event/noah-byrd-erika-lundahl-beasley-sunset-tavern-tickets/8686975?REFERRAL_ID=twfb'
        ],
        venueName: 'The Sunset',
        venueUrl: 'https://www.facebook.com/sunsetseattle/'
      },
      {
        ID: '329035491175194',
        individualEventUrl: 'https://www.facebook.com/events/329035491175194',
        title: 'Friday Night House Shows at Caffe Umbria',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, August 24, 2018 at 7:30 PM – 9:00 PM PDT',
        urlsFromDescription: [ 'Debbie Miller', 'Beasleydotcom' ]
      },
      {
        ID: '217772772215468',
        individualEventUrl: 'https://www.facebook.com/events/217772772215468',
        title: 'We Are The West / Noah Byrd / Beasley',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Sunday, August 5, 2018 at 8:00 PM PDT',
        urlsFromDescription: [],
        venueName: 'Sea Monster Lounge',
        venueUrl: 'https://www.facebook.com/Seamonsterlounge/'
      },
      {
        ID: '261478034620922',
        individualEventUrl: 'https://www.facebook.com/events/261478034620922',
        title: 'Quinn DeVeaux, Beasley, Young-Chhaylee, Sean Croizier',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, July 27, 2018 at 8:00 PM – 11:55 PM PDT',
        urlsFromDescription: [],
        venueName: 'Conor Byrne Pub',
        venueUrl: 'https://www.facebook.com/ConorByrnePub/'
      },
      {
        ID: '519428598413648',
        individualEventUrl: 'https://www.facebook.com/events/519428598413648',
        title: 'Beasley, The Native Sibling, Drew Martin, Honey Mustard (All Unplugged)',
        imageUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/5NLcMdzgqQP.png',
        dateTime: 'Friday, January 26, 2018 at 8:00 PM – 10:30 PM PST',
        urlsFromDescription: [
          'http://www.fremontabbey.org/artsconnect',
          'http://www.fremontabbey.org/rent',
          'http://www.abbeyarts.me'
        ]
      }      
]
function Show(){
    const [shows, setShows] = useState(dummy)
    return (
        <>
            {
            shows.map(showDetails => {
                return(
                    <div>
                        <img src={showDetails.imageUrl}/>
                        <ul>
                            <li>{showDetails.title}</li>
                            <li>{showDetails.dateTime}</li>
                        </ul>
                        <a href={showDetails.venueUrl}>{showDetails.venueName}</a>

                    </div>
                )
            })
            }
        </>
    )


}

export default Show;



















