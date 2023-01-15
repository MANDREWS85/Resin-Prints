import Product from "../Products/Product";
import ImageContainer from "../Components/ImageContainer";

import NavBar from "../Components/NavBar";
import ContentContainer from "../Components/ContentContainer";

export default function Home() {
  const id = "Home";
  return(
    <div>
      <p>{id}</p>

      <div>
        <ContentContainer 
          title="Grimdark Scifi Prints"
          text="The grimdark genre of sci-fi as it relates to Warhammer 40K by Games Workshop is a genre that emphasizes a dystopian, anarchic and militarized universe, filled with conflict and war. It focuses heavily on humanity’s fight for survival in a world taken over by the forces of evil. The Imperium of Man, humanity’s last hope against the myriad of hostile aliens and intelligent vile creatures from beyond, are relentlessly engaged in a never-ending war to maintain control 
"
          image=""
          
          
        />

                <ContentContainer 
          title="3d Printed Warhammer 40k Proxy Models"
          text=" Proxy models refer to models which are meant to be used in Warhammer 40k, but are not official models produced by Games Workshop. Often, these models will resemble official models but with different miniatures and components, or can be entirely custom modeled by individuals. The rules and regulations of Warhammer 40k may prohibit or limit the use of proxy models in competitive play. Using 3D printed proxy models in Warhammer 40k is an idea that has been gaining popularity among many players in recent years. With the rise of affordable 3D printers, both commercial and home-built models, it is becoming increasingly easier to produce your own custom models using 3D prints.

Proxy models in Warhammer 40k are inexpensive scratch-built models that are printed out using digital files. These models are made from resin-based filaments and are used to play the game instead 
"
          image=""
          
          
        />


        <ContentContainer 
          title="Chaos Marine Proxy Models"
          text=" There are many options for printing 3D resin proxies of Warhammer 40k models, particularly for the Chaos Marines faction. Popular offerings range from faithful reproductions of iconic models, such as the ubiquitous Space Marines and classic Terminators, to more off-the-wall alternatives such as the feared Chaos Spawn and brutal  Cultists. Many excellent tools, such as software and modelling apps, allow users to easily customize, distort, and create all sorts of grimdark chaos marines
"
          image=""
          
          
        />


        <ContentContainer 
          title="Chaos Marine Chapters"
          text=" Warhammer 40k Chaos marine chapter list




1. Alpha Legion
2. Black Legion
3. Emperor's Children
4. Night Lords
5. Iron Warriors
6. Word Bearers
7. World Eaters
8. Death Guard
9. Thousand Sons
10. Red Corsairs
11. Renegade Chapters
12. Sons Of Malice 
13. Alpha Wolves
14. Crimson Slaughter
15. Flesh Tearers
16. Iron Cobras
17. Knights Of Ruin
18. Raptor
"
          image=""
          
          
        />
        

      </div>
    </div>  
  
  );

  
}