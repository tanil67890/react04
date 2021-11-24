import React from 'react'
import './Heading.css'

class Heading extends React.Component{
    render(){
        return <div>
                    <div className="bodyImg">
                        <img src="https://www.milkmaid.in/sites/default/files/2021-08/Chocolate-Cake-1600x426_0.webp" alt="" />
                    </div>
                    <div className="bodyContent">
                        <h1 className="bodyHeading"> Choclate Cake Recipe</h1>
                    </div>
                </div>
                
    }
}

export default Heading
