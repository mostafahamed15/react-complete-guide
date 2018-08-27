import React, { Component} from 'react';

const withClass = (WrappedCompnent, className) => {
//     return (props)=>(
// <div className = {className}>
    
//     <WrappedCompnent {...props}/>
//     </div>
//     )

return class extends Component {
    render() {
        return (
            <div className = {className}>
        
        <WrappedCompnent {...this.props}/>
        </div>
        )
    }
} 
}
    


export default withClass;