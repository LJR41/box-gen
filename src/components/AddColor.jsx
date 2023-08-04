import React,{useState} from 'react';


const AddColor = (props) => {
    const [color, setColor] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.newColor(color)
        setColor("")
        
    }

    const changeColor = (e) =>{
        setColor(e.target.value)
        
    }
    return(
        <div>
            <form action="">
                <label htmlFor="">Color</label>
                <input type="text" name='color' onChange={changeColor} value={color}/>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )

}

export default AddColor