import React from 'react'

const Hello=()=>{
    // return (
        // <div className='dummyClass>
//             <h1>hello aryan</h1>
        // </div>
    // )
    // not jxs simple case...
    return React.createElement(
        'div',
        {id: 'hello', className:'dummyClass'},
        React.createElement('h1',null,'hello aryan')
    )
}
export default Hello