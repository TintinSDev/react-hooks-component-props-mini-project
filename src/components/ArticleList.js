import React from 'react';

function ArticleList({posts}) {
    return (
        <main>
            <h1>Articles</h1>

            <ul>

                {posts.map((post) => (

                    <li key={post.id}>{post.title} </li>

                ))}
            </ul>
                
            
        </main>
    );
}

export default ArticleList;