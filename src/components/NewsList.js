import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './lib/usePromise';

const NewsListBlock = styled.div`
    
    aligin-item:center;
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin: 0 auto;
    margin-top: 2rem;
    color:white;
    @media scrren and(max-width: 768px){
        width:100%;
        padding-left:1rem;
        padding-right:1rem;
    }
`;

const NewsList = ({category}) => {
    const [loading , response, error] = usePromise(()=>{
        const query = category === 'all'?'' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3ed3d506daf245dbaa6ccd075e27b47e`,);
    }, [category]);
            


    if (loading) {
        return <NewsListBlock>대기중입니다</NewsListBlock>
    }
    if (!response) {
        return null;
    }
    if(error){
        return <NewsListBlock>ERROR!!</NewsListBlock>
    }

    const {articles} = response.data;
    return (
        <div>

            <NewsListBlock>
                {articles.map((article) => (
                    <NewsItem key={article.url} article={article} />
                ))}
            </NewsListBlock>
        </div>
    );
};

export default NewsList;