import Button from "../Components/Button"

export default function Product({name,description,image,link}) {
  const id="Product"
return(
  <div id={id} style={{backgroundImage:image,backgroundSize:"100% 100%",height:"300px",maxWidth:"300px"}}>
    <a href={link} target="_blank">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <Button 
        text="BUY NOW"
        
        
        
      />
    </a>
  </div>
)
  
};