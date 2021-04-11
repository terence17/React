import React from 'react'

// function Greet(){
//     return <div><h1>COME ON!!!!</h1> <p>LETS BE HAVING YOU</p></div>
// }


// const Greet = (props) => {
// console.log(props)
// return(
//     <div>
//         <h1>COME ON {props.name}. Do you know that this guy has scored {props.Goals} Goals !!!!</h1>
//          <p>LETS BE HAVING YOU</p>
//         {props.children}
//     </div>    
    
//     ) 
// }

// const Greet = ({name, Goals}) => {
//     return(
//         <div>
//             <h1>COME ON {name}. Do you know that this guy has scored {Goals} Goals !!!!</h1>
//         </div>    
        
//         ) 
//     }

const Greet = (props) => {
    const {name, Goals} = props
    return(
        <div>
            <h1>COME ON {name}. Do you know that this guy has scored {Goals} Goals !!!!</h1>
        </div>    
        
        ) 
    }

// export const Greet = () => <div><h1>COME ON!!!!</h1> <p>LETS BE HAVING YOU</p></div>

export default Greet
