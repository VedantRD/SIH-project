import React from 'react'
import Data from './../assets/statesandcities.json'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateName: 'default',
            districtName: 'default'
        }
    }

    render() {
        return (
            <div >
                <select className="p-1" value={this.state.stateName} onChange={(e) => { this.setState({ stateName: e.target.value }) }}>
                    <option value="default">select the state</option>
                    {
                        Data.map(ele => {
                            return ele.states.map(state => {
                                return <option key={state.state} value={state.state}>{state.state}</option>
                            })
                        })
                    }
                </select>
                {(() => {
                    if (this.state.stateName === "default") {
                        return (<select className="p-1 ml-3">
                            <option value="default">select the state first</option>
                        </select>)
                    } else {
                        return (
                            <select className="p-1 ml-3" value={this.state.districtName} onChange={(e) => { this.setState({ districtName: e.target.value }) }}>
                                <option value="default">select the district</option>
                                {
                                    Data.map(ele => {
                                        return ele.states.filter(state => state.state === this.state.stateName).map(item => {
                                            return item.districts.map(district => {
                                                return <option key={district} value={district}>{district}</option>
                                            })
                                        })
                                    })
                                }
                            </select>
                        )
                    }
                })()}
            </div>
        )
    }
}

export default Dropdown