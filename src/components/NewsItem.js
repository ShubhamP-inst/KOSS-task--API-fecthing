import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imageUrl} alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem