import React, { Component } from 'react'



export class NewsItem extends Component {
    render() {
        let {title,description,urlToImage,newsURL,author,date,source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}> 
                        {source}
                </span>
                <img src={!urlToImage?"https://blog.printsome.com/wp-content/uploads/coca-cola-marketing.jpg":urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknowen":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
