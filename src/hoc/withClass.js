import React from 'react';

const withClass = (WrappedCompnent, className) => {
    return (props)=>(
<div className = {className}>
    
    <WrappedCompnent/>
    </div>
    )
}
    


export default withClass;