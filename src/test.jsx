import React from 'react';
import './test.css'
import { useQuery } from '@tanstack/react-query';
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
};
function Posts() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
    if (isLoading) return <div class="container">
        <div class="card">
            <div class="skeleton shape"></div>
            <div class="content">
                <div class="skeleton text title"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
            </div>
        </div>

        <div class="card">
            <div class="skeleton shape"></div>
            <div class="content">
                <div class="skeleton text title"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
            </div>
        </div>

        <div class="card">
            <div class="skeleton shape"></div>
            <div class="content">
                <div class="skeleton text title"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
                <div class="skeleton text"></div>
            </div>
        </div>
    </div>;
    if (error) return <p>Error: {error.message}</p>;
    return (<>
        <div className='hehe'>
            {data.map(post => (
                <div key={post.id} className='tainer'>
                    <div className='DF'><h4>Name</h4>{post.name}</div>
                    <div className='DF'><h4>Site</h4>{post.website}</div>
                    <div className='DF'><h4>Email</h4>{post.email}</div>
                    <div className='DF'><h4>PH.</h4>{post.phone}</div>

                </div>

            ))}

        </div>
    </>

    );
}
export default Posts;
