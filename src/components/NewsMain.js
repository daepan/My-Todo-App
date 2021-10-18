import React from "react";
import NewsList from "./NewsList";
import Categories from "./Categories";


const NewsMain = ({match})=>{
    
    const category=match.params.category||'all';

    return (
        <div>
            <Categories />
            <NewsList category={category}/>
        </div>
    )
}


export default NewsMain