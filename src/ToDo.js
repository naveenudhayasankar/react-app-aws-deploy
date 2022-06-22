import { useState } from "react";

function ToDo(){
    const [items, setItems] = useState([])
    const [currItem, setCurrItem] = useState('')
    const [textDec, setTextDec] = useState(false)

    const handleClick = () => {
        if(!currItem) return
        console.log(currItem)
        let temp = items
        temp.push(currItem)
        setItems([...temp])
        console.log(items)
    }

    const handleCheck = (e) => {
        setTextDec(!textDec)
        if(textDec){
            e.target.style.removeProperty('text-decoration', 'line-through')
        } 
        else{
            e.target.style.setProperty('text-decoration', 'line-through')
        }
    }

    return(
        <div>
        <input type='text' onChange={(e) => setCurrItem(e.target.value)}/> 
        <br/>
        <button onClick={handleClick}>Add Item</button>
        <br/>
        <div> 
            {
                items.map((i, index) => {
                 return(<div key={index} onClick={handleCheck}>{i}</div>)   
                })
            }
        </div>
        </div>
    )
}

export default ToDo