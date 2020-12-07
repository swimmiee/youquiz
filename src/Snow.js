import React from 'react';
const Snow = ({children}) => {
    const maxFontSize=20;
    let arr = new Array(200).fill(0)

    const Snowflake = ({id, style}) =>{
        const flake='٭';
        return(
          <p className='Snowflake' id={`item${id}`} style={style}>
            {flake}
          </p>
        )
    }

    return (
    <>
    <noscript> Don't open this html dom!!!!</noscript>
        <div id="snow">
        {
            arr.map((el, i)=>{
            const animationDelay = `${(Math.random()*16).toFixed(2)}s`;
            const size = maxFontSize-10*Math.random();
            const fontSize = `${(size > 0 ? size : .1).toFixed(2)}px`;
                let style = {
                    animationDelay,
                    fontSize
                    }
                return <Snowflake key={i} id={i} style={style}/>;
            })
        }
        </div>
        {children}
    </>
    )
}

export default Snow;