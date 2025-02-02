import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - iNews`;;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseddata = await data.json();
        this.props.setProgress(70);
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }
    //COMPONENTDIDMOUNT RUNS AFTER RENDER METHOD
    async componentDidMount() {
        this.updateNews();
    }

    HandlePre = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    HandleNext = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };
        
    render() {
            return(
            <>
            <h1 className="text-center">iNews - Top Headlines from {this.props.category}</h1>
            { this.state.loading && <Spinner /> }
            <InfiniteScroll
                        dataLength = { this.state.articles.length }
                        next = { this.fetchMoreData }
                        hasMore = { this.state.articles.length !== this.state.totalResults }
                        loader = {< Spinner />}
                        >
                        <div className="container">
                            <div className="row" >
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4 " key={element.url}>
                                        <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description : ""}
                                         urlToImage={element.urlToImage} newsURL={element.url} 
                                         author={element.author} date={element.publishedAt} 
                                         source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
            </InfiniteScroll>
            </>

                        /* <div className="container d-flex justify-content-between my-3">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePre}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNext}>Next &rarr;</button>
                    </div> */  
        )
    }
}

export default News
