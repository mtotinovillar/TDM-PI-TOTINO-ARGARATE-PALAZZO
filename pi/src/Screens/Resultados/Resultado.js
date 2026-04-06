import React, {Component} from 'react';

class Resultados extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>Resultados de: {this.props.match.params.busqueda}</div>
        )
    }
}
export default Resultados