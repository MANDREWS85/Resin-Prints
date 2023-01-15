import Content from "./Content"

export default function ImageContainer({image,height,width}) {
  
  const id = "ImageContainer";
  
  return(
    <div id={id} onClick={() => (console.log("DOING SOMETHNG",))} style={{backgroundImage:image,height:height,width:width,backgroundSize: 'cover',borderRadius:"25px",margin:"auto"}}> 
      
    </div>
  );
  
};