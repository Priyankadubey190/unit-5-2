import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:5,
  });
    // Create add and remove functions here that changes the
    // state.
   
    const handlebooks = (value)=>{
      setInv({...inv,books:inv.books+value});
    }
    const handlenotebooks = (value)=>{
      setInv({...inv,notebooks:inv.notebooks+value});
    }
    const handlepens = (value)=>{
      setInv({...inv,pens:inv.pens+value});
    }
    const handleinkpens = (value)=>{
      setInv({...inv,inkpens:inv.inkpens+value});
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handlebooks(1)}>+</button>
        <button className="circlularButton"  onClick={()=>{if((inv.books)>=1)handlebooks(-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handlenotebooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>{if(inv.notebooks>=1)handlenotebooks(-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handlepens(1)}>+</button>
        <button className="circlularButton" onClick={()=>{if(inv.pens>=1)handlepens(-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handleinkpens(1)}>+</button>
        <button className="circlularButton" onClick={()=>{if(inv.inkpens>=1)handleinkpens(-1)}}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};
