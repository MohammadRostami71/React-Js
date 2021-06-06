import {Component} from "react";

class ErrorBoundary extends Component{
    constructor() {
        super();
        this.state ={
            hasError:false
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true});
    }
    render() {
        if (this.state.hasError) {
            return <p>Some Thing is Wrong !</p>
        }
        return this.props.children
    }
}
export default ErrorBoundary;