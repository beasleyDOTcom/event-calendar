import React , { useState } from 'react';

interface Performance {
  "ID": string,
  "individualEventUrl": string,
  "title": string | null,
  "pageTitle": string | null,
  "imageUrl": string | null,
  "previewImage": string | null,
  "dateTime": string | null,
  "urlsFromDescription": string[] | null,
  "venueName": string | null,
  "venueUrl": string | null,
}

const dummy: Array<Performance> = [{"ID":"270562201720589","individualEventUrl":"https://www.facebook.com/events/270562201720589","title":"Round 199: Beasley, Devon Dodgson, Noble Monyei, Devonnie Black, Paul Nunn","pageTitle":"Round 199: Beasley, Devon Dodgson, Noble Monyei, Devonnie Black, Paul Nunn","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/c103.0.206.206a/p206x206/264500515_3028645400718572_7451861523995737653_n.png?_nc_cat=103&ccb=1-5&_nc_sid=b386c4&_nc_ohc=3Gwwe7LP-yEAX81VBeT&_nc_ht=scontent-sea1-1.xx&oh=00_AT9EJLWiFsIyO_PMZBfhPgkv3vxBcukk-9ciIDl4TdUo1w&oe=61E6B323","dateTime":"Tuesday, December 14, 2021 at 7:30 PM PST","urlsFromDescription":["www.beasleydotcom.com/","www.devondodgson.com/","dearlydepartedseattle.com/","www.instagram.com/devonnieblack/","www.instagram.com/creativityinacan/","www.abbeypresents.org","www.theround.org","http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeypresents.org","www.abbeypresents.org/respect"],"venueName":"Fremont Abbey Arts Center","venueUrl":"https://www.facebook.com/FremontAbbey/"},{"ID":"570913374355981","individualEventUrl":"https://www.facebook.com/events/570913374355981","title":"Live at the 'Shed feat. Beasley","pageTitle":"Live at the 'Shed feat. Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/c52.0.206.206a/p206x206/242829026_2012904468858257_3241609518415317024_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b386c4&_nc_ohc=e05W60ucECYAX_2WF2w&_nc_ht=scontent-sea1-1.xx&oh=00_AT8EOy98qIt8lx6Y56WQWWUplCSREABqypbvez2fUc5lJQ&oe=61E56A8E","dateTime":"Saturday, November 13, 2021 at 12:00 PM – 2:00 PM PST","urlsFromDescription":["#headtotheshed"],"venueName":"Watershed Pub & Kitchen","venueUrl":"https://www.facebook.com/watershedpub/"},{"ID":"1083534639057132","individualEventUrl":"https://www.facebook.com/events/1083534639057132"},{"ID":"986031515570361","individualEventUrl":"https://www.facebook.com/events/986031515570361","title":"Goodtime Hustle / Don Ugly / Beasley at The Funhouse","pageTitle":"Goodtime Hustle / Don Ugly / Beasley at The Funhouse","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/c33.0.206.206a/p206x206/231715593_862321037729323_2561958057584610585_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b386c4&_nc_ohc=tq288Tb09E8AX-4kR_k&_nc_ht=scontent-sea1-1.xx&oh=00_AT_wKh_V-hVxHLR0Knr71z-qco2QNKC_uGHNcTQPM7hl2A&oe=61E67962","dateTime":"Tuesday, September 28, 2021 at 7:00 PM – 10:30 PM PDT","urlsFromDescription":["https://www.facebook.com/goodtimehustle","https://www.facebook.com/donugly","https://www.facebook.com/Beasleydotcom/"],"venueName":"Funhouse Seattle","venueUrl":"https://www.facebook.com/thefunhouseseattle/"},{"ID":"488493038885704","individualEventUrl":"https://www.facebook.com/events/488493038885704","title":"Beasley at Logan's in Roslyn","pageTitle":"Beasley at Logan's in Roslyn","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c52.0.206.206a/p206x206/203283370_4949863695030146_6328160389234390768_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=b386c4&_nc_ohc=3zqJacROtnEAX9K9jCX&_nc_ht=scontent-sea1-1.xx&oh=00_AT9Hsvhk6F9Fp8uF3bspSm8v_zdlZxC1_pvbEK74pCxuxQ&oe=62079251","dateTime":"Saturday, July 17, 2021 at 7:00 PM – 10:00 PM PDT","urlsFromDescription":["https://www.beasleydotcom.com"],"venueName":"Logan's Restaurant","venueUrl":"https://www.facebook.com/LogansCasual"},{"ID":"401175257647903","individualEventUrl":"https://www.facebook.com/events/401175257647903","title":"Melanie Horsnell and Beasley","pageTitle":"Melanie Horsnell and Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"810079079457230","individualEventUrl":"https://www.facebook.com/events/810079079457230","title":"The Round (175) featuring musicians Kate Dinsmore, Beasley, Cody Kilpatrick, guest+ spoken word poet Devonnie Black & live painter SIENNA","pageTitle":"The Round (175) featuring musicians Kate Dinsmore, Beasley, Cody Kilpatrick, guest+ spoken word poet Devonnie Black & live painter SIENNA","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c103.0.206.206a/p206x206/78637486_10157732441044834_6772520589446873088_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b386c4&_nc_ohc=5VkmydshMQMAX8JbQ91&_nc_ht=scontent-sea1-1.xx&oh=00_AT8-dskFwdT72oiefS671aeydRJe7M8OzqRpOZTs90hHng&oe=6208861F","dateTime":"Tuesday, December 10, 2019 at 7:30 PM – 9:30 PM PST","urlsFromDescription":["http://www.katedinsmoremusic.com/","http://www.BEASLEYdotCOM.com","https://codykilpatrickmusic.bandcamp.com/","http://definingdevonnie.com/","www.siennadawn.com","www.fremontabbey.org/volunteer","www.abbeyarts.me/respect","http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeyarts.me"],"venueName":"Fremont Abbey Arts Center","venueUrl":"https://www.facebook.com/FremontAbbey/"},{"ID":"2427294834196693","individualEventUrl":"https://www.facebook.com/events/2427294834196693","title":"Max Brown Music Sessions","pageTitle":"Max Brown Music Sessions","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c80.0.206.206a/p206x206/75302668_1279681895572791_6627067072381714432_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=b386c4&_nc_ohc=Ff8XtYDluZUAX8LaT1Q&_nc_ht=scontent-sea1-1.xx&oh=00_AT8hfDAdGDEydojOq5rZ-r7cXgCdx2SoBzL2HZvDGIkZFw&oe=6207BE84","dateTime":"Sunday, November 10, 2019 at 6:00 PM – 7:00 PM UTC+01","urlsFromDescription":["www.beasleydotcom.com"],"venueName":"Max Brown Hotel Canal District","venueUrl":"https://www.facebook.com/MaxBrownHotelCanalDistrict/"},{"ID":"944704335890811","individualEventUrl":"https://www.facebook.com/events/944704335890811"},{"ID":"709031349612119","individualEventUrl":"https://www.facebook.com/events/709031349612119","title":"Sam Parkin, Full Step, Beasley","pageTitle":"Sam Parkin, Full Step, Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c44.0.206.206a/p206x206/72184706_10158953512584447_2039407002223902720_n.png?_nc_cat=107&ccb=1-5&_nc_sid=b386c4&_nc_ohc=oaehgy6O10sAX-TY7iI&_nc_ht=scontent-sea1-1.xx&oh=00_AT9vC81FB3wVjD-6lihti3DGEZaB8IgMUsTIWJaO9FMUkQ&oe=62062708","dateTime":"Sunday, October 20, 2019 at 8:00 PM PDT","urlsFromDescription":[],"venueName":"The Sunset","venueUrl":"https://www.facebook.com/sunsetseattle/"},{"ID":"1192935904219204","individualEventUrl":"https://www.facebook.com/events/1192935904219204","title":"Hiawatha Night Market Pop-Up","pageTitle":"Hiawatha Night Market Pop-Up","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"701137943693810","individualEventUrl":"https://www.facebook.com/events/701137943693810","title":"Beasley at The Keg and I","pageTitle":"Beasley at The Keg and I","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c45.0.206.205a/p296x100/71138587_2614316235278265_5350503075754803200_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b386c4&_nc_ohc=DfWgCY2GYYIAX8m74wp&_nc_ht=scontent-sea1-1.xx&oh=00_AT_gzxI6vcz8p0VaZOrtx84Do4S3LoGy1knbaNr3czOAAA&oe=6206C2BA","dateTime":"Friday, October 4, 2019 at 7:00 PM – 9:00 PM PDT","urlsFromDescription":[],"venueName":"The Keg and I","venueUrl":"https://www.facebook.com/thekegandi/"},{"ID":"344050679616524","individualEventUrl":"https://www.facebook.com/events/344050679616524","title":"The Two Tides, Craig Marker, Beasley","pageTitle":"The Two Tides, Craig Marker, Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c37.0.206.206a/p206x206/66231505_436258320553917_7256665774251573248_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=b386c4&_nc_ohc=a7Nvrrp1xlgAX_QrJvB&_nc_ht=scontent-sea1-1.xx&oh=00_AT88PjSuM7qmkH2pUDFpWnWSrxTnAg1GBGX9_R-xk292dg&oe=620721F5","dateTime":"Wednesday, July 24, 2019 at 7:30 PM PDT","urlsFromDescription":["https://www.ticketweb.com/event/the-two-tides-craig-marker-sunset-tavern-tickets/9585225?REFERRAL_ID=twfb"],"venueName":"The Sunset","venueUrl":"https://www.facebook.com/sunsetseattle/"},{"ID":"288432341861899","individualEventUrl":"https://www.facebook.com/events/288432341861899","title":"Drew Martin, Young Chhaylee, Beasley","pageTitle":"Drew Martin, Young Chhaylee, Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c53.0.206.206a/p206x206/49543250_10158136873344447_8284756042970038272_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b386c4&_nc_ohc=4nnPm6GE7NMAX9-V88n&_nc_ht=scontent-sea1-1.xx&oh=00_AT_bOuaHfGzu8CZYWFY36tWeFp9pY4C4IO6_RVwHOFDq2A&oe=6205F5C6","dateTime":"Tuesday, February 26, 2019 at 8:00 PM PST","urlsFromDescription":["https://www.ticketweb.com/event/drew-martin-young-chhaylee-beasley-sunset-tavern-tickets/9003065?REFERRAL_ID=twfb"],"venueName":"The Sunset","venueUrl":"https://www.facebook.com/sunsetseattle/"},{"ID":"964182237111270","individualEventUrl":"https://www.facebook.com/events/964182237111270","title":"The Round: Debbie Miller, Beasley, Jaspar Lepak, poet, painter","pageTitle":"The Round: Debbie Miller, Beasley, Jaspar Lepak, poet, painter","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c0.37.206.206a/p206x206/51987076_10156993405659834_6670620965635883008_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=b386c4&_nc_ohc=IcIJAcYQaZkAX-QxzvN&_nc_ht=scontent-sea1-1.xx&oh=00_AT9JCC4bqDl0OcIERX60fOrfiew13Sf4H6DOYwJYAEI6SQ&oe=62084336","dateTime":"Tuesday, February 12, 2019 at 7:30 PM – 9:30 PM PST","urlsFromDescription":["Debbie Miller","Jaspar Lepak","Beasleydotcom","www.fremontabbey.org/volunteer","www.abbeyarts.me/respect","http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeyarts.me"],"venueName":"Fremont Abbey Arts Center","venueUrl":"https://www.facebook.com/Fremont-Abbey-Arts-Center-768675286817132/"},{"ID":"1992237957739546","individualEventUrl":"https://www.facebook.com/events/1992237957739546","title":"Beasley at Club Rio","pageTitle":"Beasley at Club Rio","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c145.0.206.206a/p206x206/50863027_2291347254522755_7379105739853266944_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=b386c4&_nc_ohc=Zrkyt-2j5k4AX-qkyqn&_nc_ht=scontent-sea1-1.xx&oh=00_AT-hEbGBUAzIHGZuolkp5dYlZfi8Zjcat0NYWLExS06rgA&oe=62083B03","dateTime":"Sunday, February 3, 2019 at 9:00 PM MST","urlsFromDescription":[],"venueName":"Club Rio","venueUrl":"https://www.facebook.com/moabclubrio/"},{"ID":"390326718438092","individualEventUrl":"https://www.facebook.com/events/390326718438092","title":"Jenna Talbott, Mel Soul, and Beasley","pageTitle":"Jenna Talbott, Mel Soul, and Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"373910066725722","individualEventUrl":"https://www.facebook.com/events/373910066725722","title":"Beasley At The Spur During Sundance","pageTitle":"Beasley At The Spur During Sundance","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"2167436259947897","individualEventUrl":"https://www.facebook.com/events/2167436259947897","title":"Matthew Perryman Jones/ Molly Parden/Beasley - Ballard Homestead","pageTitle":"Matthew Perryman Jones/ Molly Parden/Beasley - Ballard Homestead","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c103.0.206.206a/p206x206/43498487_10161005789665261_8107149292625461248_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b386c4&_nc_ohc=q8OKwJy20acAX_pLi0Y&_nc_ht=scontent-sea1-1.xx&oh=00_AT-ISAnNK3w8l7MzvUWLYiSqlKdLBOpG7s_g0xllriL3Ew&oe=620773B9","dateTime":"Thursday, January 10, 2019 at 7:30 PM – 10:00 PM PST","urlsFromDescription":["www.ballardhomestead.org/rent","fremontabbey.org","http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeyarts.me"]},{"ID":"217446475665418","individualEventUrl":"https://www.facebook.com/events/217446475665418","title":"Beasley and Barrow","pageTitle":"Beasley and Barrow","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c145.0.206.206a/p206x206/45838410_2229669200690561_7365136118204858368_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b386c4&_nc_ohc=U9Ci7NAu6UMAX-m6xRU&_nc_ht=scontent-sea1-1.xx&oh=00_AT8t1ni4hu3b9rIhdopPoTzH6UoC5x7shXWi-ZbKysGymA&oe=620542E0","dateTime":"Friday, January 4, 2019 at 7:30 PM – 9:30 PM PST","urlsFromDescription":[],"venueName":"Squirrel Tree Restaurant","venueUrl":"https://www.facebook.com/squirreltreeresort/"},{"ID":"324371181721447","individualEventUrl":"https://www.facebook.com/events/324371181721447","title":"Dennis Dabbs, Chris & Liana, Beasley at Alberta Street Pub","pageTitle":"Dennis Dabbs, Chris & Liana, Beasley at Alberta Street Pub","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c87.0.206.206a/p206x206/46810004_10214070601583919_3412241578394124288_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=b386c4&_nc_ohc=PNKK8Vz089MAX-ikGi0&_nc_ht=scontent-sea1-1.xx&oh=00_AT-zvlaH0AcTdzaoJIgGzzKVASyqVYEQ0oqNvHShQDLizQ&oe=6207BF17","dateTime":"Thursday, December 27, 2018 at 9:00 PM PST","urlsFromDescription":["Beasleydotcom.com"],"venueName":"Alberta Street Pub","venueUrl":"https://www.facebook.com/albertastreetpub/"},{"ID":"520538601779357","individualEventUrl":"https://www.facebook.com/events/520538601779357","title":"Beasley at Berkley Cafe in Raleigh, NC","pageTitle":"Beasley at Berkley Cafe in Raleigh, NC","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"183574035918516","individualEventUrl":"https://www.facebook.com/events/183574035918516","title":"Beasley, Zoey, and Banjo Boombox at Brew","pageTitle":"Beasley, Zoey, and Banjo Boombox at Brew","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c145.0.206.206a/p206x206/44112857_2214078958916252_2565728280544018432_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=b386c4&_nc_ohc=NJARwncDRqAAX-WagYn&_nc_ht=scontent-sea1-1.xx&oh=00_AT-_6dsd2IHK5o8RxNSns97WedVo7Rd5RoIikMKF_0Oi8w&oe=6207E8ED","dateTime":"Thursday, October 18, 2018 at 7:00 PM – 10:00 PM PDT","urlsFromDescription":["beasleydotcom.com"],"venueName":"Brew","venueUrl":"https://www.facebook.com/brewcoffeeandbeer/"},{"ID":"238120816856874","individualEventUrl":"https://www.facebook.com/events/238120816856874","title":"Beasley at Simple Pleasures cafe","pageTitle":"Beasley at Simple Pleasures cafe","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"812680145606335","individualEventUrl":"https://www.facebook.com/events/812680145606335","title":"Beasley PDX House Show","pageTitle":"Beasley PDX House Show","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"1907671215990148","individualEventUrl":"https://www.facebook.com/events/1907671215990148","title":"Noah Byrd (Single Release!), Erika Lundahl, Beasley","pageTitle":"Noah Byrd (Single Release!), Erika Lundahl, Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c52.0.206.206a/p206x206/44680884_2174534656119085_5026743544719605760_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b386c4&_nc_ohc=pKNHPhm1UgwAX-e0kn1&_nc_ht=scontent-sea1-1.xx&oh=00_AT-veZ-j4fZEixCvuEoGVg6gppSse--IQ02ezmJhzuo-6g&oe=6206F313","dateTime":"Tuesday, October 9, 2018 at 8:00 PM PDT","urlsFromDescription":["https://www.ticketweb.com/event/noah-byrd-erika-lundahl-beasley-sunset-tavern-tickets/8686975?REFERRAL_ID=twfb"],"venueName":"The Sunset","venueUrl":"https://www.facebook.com/sunsetseattle/"},{"ID":"329035491175194","individualEventUrl":"https://www.facebook.com/events/329035491175194","title":"Friday Night House Shows at Caffe Umbria","pageTitle":"Friday Night House Shows at Caffe Umbria","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c26.0.206.206a/p206x206/39777373_10156240604495873_5461257036639502336_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b386c4&_nc_ohc=JTuJxxLuW70AX_0Obpj&_nc_ht=scontent-sea1-1.xx&oh=00_AT9JD4nBi8QqIhpCv5ORdANspmYL1ra9hSZ9HZRuNofgkg&oe=62062595","dateTime":"Friday, August 24, 2018 at 7:30 PM – 9:00 PM PDT","urlsFromDescription":["Debbie Miller","Beasleydotcom"]},{"ID":"217772772215468","individualEventUrl":"https://www.facebook.com/events/217772772215468","title":"We Are The West / Noah Byrd / Beasley","pageTitle":"We Are The West / Noah Byrd / Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c0.20.206.206a/p206x206/37809398_2114406395465245_583710953451814912_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=b386c4&_nc_ohc=d5NnHeRgGDcAX8aF0Tw&_nc_ht=scontent-sea1-1.xx&oh=00_AT8mvc6HscY48ucVIV9aQoCVXgihgmBB7A17ZtzIw532Zg&oe=62062942","dateTime":"Sunday, August 5, 2018 at 8:00 PM PDT","urlsFromDescription":[],"venueName":"Sea Monster Lounge","venueUrl":"https://www.facebook.com/Seamonsterlounge/"},{"ID":"261478034620922","individualEventUrl":"https://www.facebook.com/events/261478034620922","title":"Quinn DeVeaux, Beasley, Young-Chhaylee, Sean Croizier","pageTitle":"Quinn DeVeaux, Beasley, Young-Chhaylee, Sean Croizier","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/c52.0.206.206a/p206x206/36460244_2119081875082628_8553887373866303488_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=b386c4&_nc_ohc=xfDp7gagwEwAX_bNAh_&_nc_oc=AQmFcpHVGV8qKZuLK4iaAdjoW-gAzcnGnF8cmExpsN0suqDjgJZpmHg1afHlrQBvUFA&_nc_ht=scontent-sea1-1.xx&oh=00_AT9xXsy6fYN2X-Vgyi7K44IgTwRUIQBn12fyqYgK8mhOsQ&oe=62050708","dateTime":"Friday, July 27, 2018 at 8:00 PM – 11:55 PM PDT","urlsFromDescription":[],"venueName":"Conor Byrne Pub","venueUrl":"https://www.facebook.com/ConorByrnePub/"},{"ID":"519428598413648","individualEventUrl":"https://www.facebook.com/events/519428598413648","title":"Beasley, The Native Sibling, Drew Martin, Honey Mustard (All Unplugged)","pageTitle":"Beasley, The Native Sibling, Drew Martin, Honey Mustard (All Unplugged)","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/c103.0.206.206a/p206x206/25188643_10159737529270261_8332783413941563292_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b386c4&_nc_ohc=NU95Zk_36EIAX-OOSKE&_nc_ht=scontent-sea1-1.xx&oh=00_AT_JD1d5v8On88K6L-jD2CRsHRvc_WrykSl5tpmStS4hpA&oe=620544D0","dateTime":"Friday, January 26, 2018 at 8:00 PM – 10:30 PM PST","urlsFromDescription":["http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeyarts.me"]},{"ID":"141308273225919","individualEventUrl":"https://www.facebook.com/events/141308273225919","title":"Elkupine Artist Showcase","pageTitle":"Elkupine Artist Showcase","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/c0.37.206.206a/p206x206/26758437_926276464195090_2828143291409176491_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b386c4&_nc_ohc=Q9MOyv79t4sAX_mtwBe&_nc_ht=scontent-sea1-1.xx&oh=00_AT8SfRN4cBHsz2ycYtn-B-dugu_6YtKMg_bAf6gUFnWPog&oe=6205CA90","dateTime":"Monday, January 22, 2018 at 5:00 PM – 8:00 PM MST","urlsFromDescription":[],"venueName":"The Cabin Park City","venueUrl":"https://www.facebook.com/TheCabinParkCity/"},{"ID":"566092867067139","individualEventUrl":"https://www.facebook.com/events/566092867067139","title":"Beasley * Ladyslipper * Hewitt Station","pageTitle":"Beasley * Ladyslipper * Hewitt Station","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/p206x206/24831141_1501320986649970_1681872834576755000_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=b386c4&_nc_ohc=j2_shxPKnVgAX88LhEF&_nc_ht=scontent-sea1-1.xx&oh=00_AT8DcZZhzVCOuLKNprlM3g5bEueiFyjmphIRafpA1rP60w&oe=620807F0","dateTime":"Saturday, January 13, 2018 at 7:00 PM – 10:00 PM CST","urlsFromDescription":["Beasleydotcom","LadySlipper","Hewitt Station"],"venueName":"Wussow's Concert Cafe","venueUrl":"https://www.facebook.com/wussowsconcertcafe/"},{"ID":"1494462274000120","individualEventUrl":"https://www.facebook.com/events/1494462274000120","title":"Beasely at the Birdhouse!","pageTitle":"Beasely at the Birdhouse!","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c0.53.206.206a/p206x206/26170012_10200447506847288_3881323155449773696_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=b386c4&_nc_ohc=AZbwTCyDUWcAX_MK1xc&_nc_ht=scontent-sea1-1.xx&oh=00_AT8yHsFc-lnrysmVLggOAvDxmuOfE1a6Xuv5o_tb7hVHcQ&oe=6206FC36","dateTime":"Thursday, January 11, 2018 at 7:30 PM – 10:00 PM EST","urlsFromDescription":["#EmbraceYourCallingTour","beasleydotcom.com"]},{"ID":"2033074920283862","individualEventUrl":"https://www.facebook.com/events/2033074920283862","title":"Beasley Plays Petoskey!","pageTitle":"Beasley Plays Petoskey!","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c0.53.206.206a/p206x206/26196462_10159780151490287_3904946921526884451_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=b386c4&_nc_ohc=NxKxe4-0f8kAX92Ei-B&_nc_ht=scontent-sea1-1.xx&oh=00_AT_BKSWRyufNRWPfH-epO8xRttq1AQlF-3HSWqc_v6o0tg&oe=6208B2F5","dateTime":"Wednesday, January 10, 2018 at 7:30 PM EST","urlsFromDescription":[],"venueName":"Pour Kitchen & Bar","venueUrl":"https://www.facebook.com/pourkitchenandbar/"},{"ID":"140058346694842","individualEventUrl":"https://www.facebook.com/events/140058346694842","title":"Beasley and Friends music night","pageTitle":"Beasley and Friends music night","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c145.0.206.206a/p206x206/25550132_10104107939059402_672987120497916709_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b386c4&_nc_ohc=fvTUCbcYV5UAX-O6HgA&_nc_ht=scontent-sea1-1.xx&oh=00_AT8gb6nXaxCzkQpM73PFTM6SdSMiUa0fRPrDRFwBabkY_Q&oe=6207924E","dateTime":"Wednesday, December 27, 2017 at 6:00 PM – 8:00 PM CST","urlsFromDescription":[],"venueName":"The Creme Coffee House","venueUrl":"https://www.facebook.com/thecremecoffee/"},{"ID":"139778243389021","individualEventUrl":"https://www.facebook.com/events/139778243389021","title":"Beasley and JDR sing songs at Preservation","pageTitle":"Beasley and JDR sing songs at Preservation","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c145.0.206.206a/p206x206/25498019_10104102271821592_4487391651130701358_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=b386c4&_nc_ohc=u1JpbhccwGwAX-COrr1&_nc_ht=scontent-sea1-1.xx&oh=00_AT977dB5oEE4gIIQ7cm0zHivn2QT1Xm0_NyB1SuM74y1Sw&oe=620874F8","dateTime":"Friday, December 22, 2017 at 8:00 PM – 10:00 PM CST","urlsFromDescription":["#EmbraceYourCalling","http://beasleydotcom.com."],"venueName":"Preservation Tasting Room and Bottle Shop","venueUrl":"https://www.facebook.com/preservationbg/"},{"ID":"134283157276034","individualEventUrl":"https://www.facebook.com/events/134283157276034","title":"Acoustic Night At The Red Room","pageTitle":"Acoustic Night At The Red Room","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/p206x206/24131512_1776933955703479_6422731095764792729_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=b386c4&_nc_ohc=bYdqaQqpzM0AX8zXN9X&_nc_ht=scontent-sea1-1.xx&oh=00_AT98H4GODT-tA91fZV8lgk7SYQPFEamG2WXq0uH6nLGB1g&oe=62052C7B","dateTime":"Friday, December 8, 2017 at 7:00 PM – 1:00 AM CST","urlsFromDescription":["Beasleydotcom","AdamMarie","Friendship Bracelets - TX","Rookie of the Year","Paris Avenue","TRAVLR","The Red Room"]},{"ID":"312970562512045","individualEventUrl":"https://www.facebook.com/events/312970562512045","title":"The Littlest Birds / Taylor Murphy & Josh Beasley","pageTitle":"The Littlest Birds / Taylor Murphy & Josh Beasley","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/c80.0.206.206a/p206x206/21994320_1653534434678033_4123844087343446386_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b386c4&_nc_ohc=iRJUpXC4Pm0AX-WQEdS&_nc_ht=scontent-sea1-1.xx&oh=00_AT8KL9Zok8fzPMGxgElnmf6PUgYOERipsVN-GqCy-oe4IQ&oe=62082023","dateTime":"Sunday, December 3, 2017 at 3:00 PM – 5:00 PM PST","urlsFromDescription":["The Littlest Birds"],"venueName":"Moon & Sixpence Music and Art House","venueUrl":"https://www.facebook.com/moonhousemodesto/"},{"ID":"144992362792446","individualEventUrl":"https://www.facebook.com/events/144992362792446","title":"Beasley, BanjoBoomBox, Matt Bailey, and Zory","pageTitle":"Beasley, BanjoBoomBox, Matt Bailey, and Zory","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/s206x206/23415499_1975317122792438_1599381065278328971_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=b386c4&_nc_ohc=EHh_p-tAw4IAX-O2NAs&_nc_ht=scontent-sea1-1.xx&oh=00_AT8jXB8BMxX1hUuGFmpfDbxem6v1I7LdtargwJUw4EI6Hw&oe=6205FD44","dateTime":"Friday, December 1, 2017 at 6:30 PM PST","urlsFromDescription":["www.BEASLEYdotCOM.com"]},{"ID":"132174317443477","individualEventUrl":"https://www.facebook.com/events/132174317443477","title":"Willder, Crystal and Quiet, Beasley $8/21+","pageTitle":"Willder, Crystal and Quiet, Beasley $8/21+","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/c0.28.206.206a/p206x206/23120210_10156791357803852_8287796016564454167_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b386c4&_nc_ohc=4pfQXSY-8j0AX9juvLS&_nc_ht=scontent-sea1-1.xx&oh=00_AT_dxmccdPzY-ciR4ZHt6qyN70_oKRhTBMTGeUx-UXPuXQ&oe=6206454E","dateTime":"Friday, November 17, 2017 at 8:00 PM – 12:00 AM PST","urlsFromDescription":["Willder","crystal & Quiet","Beasleydotcom"],"venueName":"Skylark West Seattle","venueUrl":"https://www.facebook.com/skylarkwestseattle/"},{"ID":"1518333881538204","individualEventUrl":"https://www.facebook.com/events/1518333881538204","title":"Round 149 feat Eli West, Beasley, Elena Loper, Troy Osaki","pageTitle":"Round 149 feat Eli West, Beasley, Elena Loper, Troy Osaki","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c67.0.206.206a/p206x206/22308854_10155764800149834_2501435432391337249_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=b386c4&_nc_ohc=ldJcTUwv5YQAX_iAxia&_nc_ht=scontent-sea1-1.xx&oh=00_AT98Mn4d7XYfz5bNAeSODgYJr5ku0b_a6cmKumbMfmJjpQ&oe=62063A59","dateTime":"Tuesday, October 24, 2017 at 8:00 PM – 10:30 PM PDT","urlsFromDescription":["Eli West sings & plays","Cahalen Morrison & Eli West","Beasleydotcom","Elena Loper","Cooper Stoulil","Troy Osaki","https://elidoes.bandcamp.com/releases","http://eliwest.fyi/","http://www.beasleydotcom.com/","https://www.facebook.com/ElenaLoperMusic/","https://hayleydayis.squarespace.com/","http://troyosaki.tumblr.com/","https://www.youtube.com/watch?v=ctes2EszLrQ","https://www.youtube.com/watch?v=Qzl0fZTSbBk","https://www.youtube.com/watch?v=M5RuuRic6ks","www.ballardhomestead.org/rent","fremontabbey.org","http://www.fremontabbey.org/artsconnect","http://www.fremontabbey.org/rent","http://www.abbeyarts.me"]},{"ID":"938570356243340","individualEventUrl":"https://www.facebook.com/events/938570356243340","title":"Beasley in Bolwing Green, KY","pageTitle":"Beasley in Bolwing Green, KY","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/p206x206/15726904_1774462722877880_4152107635404061067_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b386c4&_nc_ohc=xucKnz_oFpkAX9dzpXn&_nc_oc=AQk775cYmHXAGWxnL4-bXeK1heJbZ2nXkdNmFqmQvDcoCzkjBJ7SppSelkvdKEK6pVQ&_nc_ht=scontent-sea1-1.xx&oh=00_AT-Ui4v7f2hOj4DjSlG2tLWTDiTC0PazoillYBCDwQVB1A&oe=6205CD26","dateTime":"Thursday, December 29, 2016 at 7:00 PM – 9:00 PM CST","urlsFromDescription":[],"venueName":"White Squirrel Brewery","venueUrl":"https://www.facebook.com/whitesquirrelbrewery/"},{"ID":"260629481020503","individualEventUrl":"https://www.facebook.com/events/260629481020503","title":"Beasley in Duluth!","pageTitle":"Beasley in Duluth!","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png"},{"ID":"686573861512497","individualEventUrl":"https://www.facebook.com/events/686573861512497","title":"Sam Parkin at Seamonster Lounge!","pageTitle":"Sam Parkin at Seamonster Lounge!","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.30497-1/c37.0.126.126a/84668831_168042434612076_74269678289027072_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=wV-K__1-LFMAX-a5Ogr&_nc_ht=scontent-sea1-1.xx&oh=00_AT8eQAvEZ0Y-Gh04TMVRuSU8ohA4vEHob7eDUrpAE_2q4Q&oe=6206D21C","dateTime":"Saturday, December 3, 2016 at 8:00 PM – 9:00 PM PST","urlsFromDescription":["http://soundcloud.com/samparkin"],"venueName":"Sea Monster Lounge","venueUrl":"https://www.facebook.com/Seamonsterlounge/"},{"ID":"1063071650450957","individualEventUrl":"https://www.facebook.com/events/1063071650450957","title":"Seattle Acoustic Fest","pageTitle":"Seattle Acoustic Fest","imageUrl":"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Dia1UpmBC8o.png","previewImage":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/c45.0.206.205a/p296x100/14079687_1688491958141624_2165554014218626429_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=b386c4&_nc_ohc=yxHYBFZBD0EAX-ZdMQj&_nc_ht=scontent-sea1-1.xx&oh=00_AT9-Fzl3WdNl_u-Km-dv6t76b8Lu8gCu_qfZHXVlf3vjSg&oe=6204CDF8","dateTime":"Sunday, August 28, 2016 at 2:45 PM – 3:15 PM PDT","urlsFromDescription":[],"venueName":"All Pilgrims Christian Church","venueUrl":"https://www.facebook.com/allpilgrims.christianchurch/"}]
function Show(){
    const [shows, setShows] = useState(dummy)
    return (
        <>
            {
            shows.map(showDetails => {
                return(
                    <div>
                        <img src={showDetails.previewImage}/>
                        <ul>
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



















