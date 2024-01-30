import React from 'react';
import { Image } from 'react-bootstrap';
import Section from '../UI/Section';

const About = () => {
  return (
    <Section>
      <h1 className='fs-4 fw-bold'>ABOUT US</h1>
      <div>
        <Image
          src='https://r4.wallpaperflare.com/wallpaper/162/230/485/concert-entertainment-guitars-hetfield-wallpaper-3950283d112a6d0bf6a758bfb061261d.jpg'
          width={200}
          height={200}
          roundedCircle
          className='mx-5 my-3 float-md-start'
        />
        <p>
        Metalllica formed at Rhodes College in 1982 and release their first 45 
        record "Let Me Be" in 1985. The band toured through out the South until 
        taking a break in 1988. They have played a number of shows since then 
        and are thrilled to have Lead Guitarist, Danny Cummings join Lee Booth, 
        Kevin Ferner and Kurt Ruleman for one of the best line-ups ever! 
        For bookings, email <a href='https://www.gmail.com'>v@globalbeyond.com</a>.
        </p>
        <p>
        Over the last thirty plus years, the Cincinnati music scene has experienced 
        many changing faces, styles and trends; however the one constant for the 
        last 30+ years has been Metalllica. A long running favorite, Metalllica 
        have churned out their own brand of “Hard-stompin’, butt-bumpin’, rock-n-rollin’ 
        rhythm and blues” for Cincinnati music fans at about every venue and event 
        imaginable. A high energy blend of classic standards, original selections and 
        newer favorites give Metalllica a broad appeal to all area music fans. 
        A rock solid rhythm section together with smooth soulful vocals give Metalllica 
        a sound that can’t miss. 
        </p>
        <p>
        The list of events and venues Metalllica have played reads like an “A-list” 
        entertainment guide. The featured act at the “Celebrate-88 Cincinnati” 
        bicentennial New Years Celebration, The Great Inland Seafood Festival, Taste of 
        Cincinnati, Party in the Park, Pepsi Jammin’ on Main, Sawyer Point Pavilion, 
        Season Good Pavilion, Van Gogh Series and countless street festivals and fairs 
        are part of the event list. Venues include, Bogarts, The Redmoor, Belterra Park 
        Casino, O'neal's Tavern, Hot Shots, Kilgores, MLT's, One Eyed Jacks, Rick’s Tavern, 
        Million’s Cafe, East End Cafe, Jefferson Hall, Local 1207, Sycamore Gardens, 
        R&B Cafe, and too many more to mention. Event and club names and ownership have 
        often changed, but Metalllica have remained a constant.
        </p>
      </div>
    </Section>
  );
};

export default About;