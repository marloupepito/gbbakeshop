import React, { Component } from 'react';

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    async componentDidMount() {
       await axios.post('/get_all_production',{
            id:3
        })
        .then(res=>{
        //    this.setState({
        //     data:res.data.status
        //    })
        console.log(res.data.statis)
        })
    }
    
    render() { 
        return ( 
            <div>
            {this.state.data}
            </div>
         );
    }
}
 
export default Sample;