import ImageContainer from "./ImageContainer"

export default function Content({text,title,image}) {
  
  const id = "Content";
  
  return(
    <div id={id}>
      {image}
      <h1>{title}</h1>
     
         
      <h3>{text}</h3>
      
    </div>
  );
  
};