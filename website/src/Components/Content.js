export default function Content({text,title}) {
  
  const id = "Content";
  
  return(
    <div id={id}>
      <h1>{title}</h1>
      <h3>{text}</h3>
      
    </div>
  );
  
};