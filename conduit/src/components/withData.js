import React from "react";
function withData(Comp,url){
    return class Count extends React.Component{
        state={
            data:null,

        }
        componentDidMount(){
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({data})
            })
        }
        render(){
            return<Comp data={this.state.data}/>;
        }
}

}
export default withData;