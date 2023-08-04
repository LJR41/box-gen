import React,{useState} from 'react';

const DisplayColor = (props) => {
    // const [newColor, setNewColor] =useState([props.current])

    // setNewColor([...newColor, props.current])
    // console.log(newColor, props.current)

    return(
        
        <div style={{display:'inline-flex', alignContent:'center', justifyContent: 'center', flexWrap: 'wrap'}}>
            {props.current.map((eachColor, Idx) =>{
                return (
                    
                    <div style = {{background:eachColor, height:100, width:100, margin: 25, alignItems:'center'}}>
                        
                        {Idx}
                    </div>
                )
            })}
            
            
        </div>
    )

}
export default DisplayColor