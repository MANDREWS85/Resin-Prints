import Content from "./Content"
import ImageContainer from "./ImageContainer"

export default function ContentContainer({text,title,image}) {
  
  const id = "ContentContainer";
  
  return(
    <div id={id}>
 
      <Content
        image={image}
        title={title}
        text={text}
      />
      
      <div>
      
      </div>
      
    </div>
  );
  
};