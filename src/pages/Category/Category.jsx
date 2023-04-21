import React from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import Newscard from '../Shared/NewsCard/Newscard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    console.log(id);
    return (
        <div>
            <h2>This is a Category: {categoryNews.length}</h2>

            {
                categoryNews.map(news => <Newscard key={news._id} news={news}></Newscard>)
            }
        </div>
    );
};

export default Category;