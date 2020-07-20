import React from 'react'

class HogCard extends React.Component {

    state = {
        cardDetails: true,
        hidden: false
    }
    
    handleClick = () => {
        this.setState({
            cardDetails: !this.state.cardDetails
        })
    }

    hideHog = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    isHidden = () => {
        if (this.state.hidden) {
            return {display: "none"}
        } else {
            return {display: "block"}
        }
    }

    render() {
        const fileName = this.props.hog.name.toLowerCase().split(" ").join("_")
        const pigImage = require(`../hog-imgs/${fileName}.jpg`)
        return (    
            <div className="card">    
                <div onClick={this.handleClick} style={this.isHidden()}>
                            <div className="image">
                                <img src={pigImage} alt=""/>
                            </div>
                                <div className="header">
                                    {this.props.hog.name}
                                </div>                            <div>
                            {
                                this.state.cardDetails ?
                                    <div className="description">
                                    <p>Specialty: {this.props.hog.specialty}</p>
                                    <p>{this.props.hog.greased === true ? "Greased" : "Not Greased"}</p>
                                    <p>Weight: {this.props.hog.weight}</p>
                                    <p>Medal: {this.props.hog['highest medal achieved']}</p>
                                </div>
                                : null
                            }
                            </div> 
                </div>
                <button onClick={this.hideHog}>{this.state.hidden ? "Show" : "Hide"} this Hog</button>
            </div>
        )
    }
}

export default HogCard