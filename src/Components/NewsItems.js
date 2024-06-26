import React, { Component } from 'react'

export class NewsItems extends Component {
    constructor() {
        super();
        console.log("Hello! I am a constructor")
    }

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className='my-3'>
                    <div className="card">
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1', left: '90%'}}>
                            {source}
                        </span>
                        <img src={!imageUrl ? "https://i.timesnowhindi.com/stories/Virat-Kohli-Cover-Drive.jpg" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-footer text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</p>
                            <a href={newsUrl} target='__blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems
