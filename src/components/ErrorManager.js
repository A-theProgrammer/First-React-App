import React, {Component} from "react";

class ErrorManager extends Component{
    constructor(props){
        super();
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})        
    }


    render(){
        const {hasError}=this.state;
        if(hasError){
            return <h1>Oooops!!!There is an Error!!</h1>
        }
        return this.props.children
    }
}

export default ErrorManager