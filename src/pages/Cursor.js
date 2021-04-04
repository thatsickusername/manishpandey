import React,{useState} from 'react';
import '../css/Cursor.css'

function Cursor() {

    const [CursorX, setCursorX] = useState()
    const [CursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    } )

    return (
        <div className="Cursor" 
            style={{
                left: CursorX +'px',
                top: CursorY +'px'
            }}>
            
        </div>
    );
}

export default Cursor;