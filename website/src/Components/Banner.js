export default function Banner({linkTitle,text,link,image}) {

  const id = "Banner";
  
  return(
    <div id={id} style={{backgroundImage:{image}, border:"solid"}}>
      <a href={link}> <h1>{linkTitle}</h1> </a>
      <h3>{text}</h3>
    </div>

    
  );

  
}