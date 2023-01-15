export default function Button({text,link}) {

  const id = "Button";
  
  return(
    <div>
      <button id={id} onClick={()=>{window.open(link)}}>{text}</button>
    </div>

    
  );

  
}