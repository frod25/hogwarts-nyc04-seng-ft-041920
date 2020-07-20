import React from 'react'
import HogCard from './HogCard'

class HogList extends React.Component {

    renderHogs = (hogs) => {
        if (this.props.greased) {
            let greasedHogs = hogs.filter((hog, idx) => hog.greased)
            return this.handleSort(greasedHogs).map((hog, idx) => <HogCard key={idx} hog={hog}/>)
        } else {
            return this.handleSort(hogs).map((hog, idx) => <HogCard key={idx} hog={hog}/>)
        }
    }

    handleSort = (hogs) => {
        let sortedHogs = [...hogs]
        if (this.props.sortByWeight) {
            return sortedHogs.sort((a,b) => {
                return (a.weight - b.weight)
            })
        } else if (this.props.sortByName) {
            return sortedHogs.sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        } else if (this.props.sortByName && this.props.sortByWeight) {
            return sortedHogs.sort((a,b) => a.weight - b.weight).sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        } else {
            return hogs
        }
    }

    render() {
        return (
            <div className="ui grid container">
                HogList
                <div className="ui cards">
                    {this.renderHogs(this.props.hogs)}
                </div>
            </div>
        )
    }
}

export default HogList