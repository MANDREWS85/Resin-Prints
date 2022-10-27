import Content from "./Content"

export default function ContentContainer({text,title}) {
  
  const id = "ContentContainer";
  
  return(
    <div id={id}>     
      <Content
        title={title}
        text={text}
      />
      
      <div>
      
      </div>
      
    </div>
  );
  
};