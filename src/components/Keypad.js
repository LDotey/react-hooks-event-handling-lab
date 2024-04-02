// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function handleEvent(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            type="password"
            name="INPUT"
            onChange={handleEvent}
            placeholder="INPUT" />
        </div>
    )
}

export default Keypad;