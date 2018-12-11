import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card w-50 mx-auto" style={{ marginTop: "200px" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.setup}</h5>
                    <p className="card-text font-weight-bold">{this.props.punchline} <i class="fas fa-laugh-squint"></i></p>
                    <a href="" className="btn btn-danger" onClick={() => { window.location.reload() }}>Reload <i class="fas fa-redo-alt"></i></a>
                </div>
            </div>
        )
    }
}
export default Card;