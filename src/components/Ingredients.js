import React from 'react'
import './ingredients.css'

class Ingredients extends React.Component{
    render(){
        console.log(this.props.ingredients);
        return <div className="ingredients">
                    <h1 className="ingredientsTitle">Ingredients</h1>
                    <div className="wrap1">
                        <div className="wrap2">
                            {this.props.ingredients.map((ingredient) => {
                        return <div className="ingredientsLoop">
                                    <div>
                                        <ol>
                                            <li> -> {ingredient}</li>
                                        </ol>
                                    </div>      
                                </div>
                        
                    })}
                        </div>
                    </div>
               </div>
    }
}

export default Ingredients
