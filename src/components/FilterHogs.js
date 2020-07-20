import React from 'react'

class FilterHogs extends React.Component {

    render() {
        return (
            <div style={{display:'block'}}>
                <div>
                    <label>Greased</label>
                    <input onChange={this.props.handleGreased} type="checkbox" checked={this.props.greased}/>
                </div>
                <div>
                    <label>Sort by Name</label>
                    <input onChange={this.props.handleSortName} type="checkbox" checked={this.props.sortByName}/>
                </div>
                <div>
                    <label>Sort by Weight</label>
                    <input onChange={this.props.handleSortWeight} type="checkbox" checked={this.props.sortByWeight}/>
                </div>
            </div>
        )
    }
}

export default FilterHogs