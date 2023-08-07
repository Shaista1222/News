import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BlogItems from './BlogItems'
import { Link } from 'react-router-dom'
import './Blogs.css'
const Blogs = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)

    }
    useEffect(() => {
        updateNews()
    }, [])

    //hanle previous click
    const handlePreviousClick = () => {
        setPage(page - 1)
        updateNews()
    }
    //hanle next click
    const hanleNextClick = () => {
        setPage(page + 1)
        updateNews()
    }

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}><u style={{ textDecorationColor: "red", }}>NEWS</u> </h1>
            <div className="container">
                <ul className='mystyle' >
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/business">business</Link></li>
                    <li><Link to="/entertainment">entertainment</Link></li>
                    <li><Link to="/health">health</Link></li>
                    <li><Link to="/science">science</Link></li>
                    <li><Link to="/sports">sports</Link></li>
                    <li><Link to="/technology">technology</Link></li>
                    <li><Link to="/bitcoins">bitcoins</Link></li>
                    <li><Link to="/crypto">crypto</Link></li>
                    <li><Link to="/fitness">fitness</Link></li>
                    <li><Link to="/food">food</Link></li>
                    <li><Link to="/jobs">jobs</Link></li>
                </ul>
            </div>
            <div className="container " style={{ marginTop: '35px' }}>

                <div className="row">
                    {/* //if we ave data ten proceed */}
                    {articles && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <BlogItems title={element.title
                                ? element.title.length > 30
                                    ? element.title.slice(0, 30) + "..."
                                    : element.title
                                : ""} description={element.description
                                    ? element.description.length > 150
                                        ? element.description.slice(0, 150) + "..."
                                        : element.description
                                    : ""}
                                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-danger" onClick={handlePreviousClick}>&larr;Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark " onClick={hanleNextClick}>Next&rarr;</button>
            </div>
        </>
    )
}

Blogs.defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
}
Blogs.defaultProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default Blogs