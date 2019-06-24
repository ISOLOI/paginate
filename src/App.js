import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import Posts from './components/Posts/Posts'
import Pagination from './components/Pagination/Pagination'
import axios from 'axios'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState([false])
  const [currentPage, setCurrentPage] = useState([1])
  const [postsPerPage] = useState([10])
  const url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setPosts(res.data)
        setLoading(false)
      }
      fetchPosts()
    }, [])

    //get current posts
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
//Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="container">
      <h1>React paginate demo</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
      postsPerPage={postsPerPage}
      totalPosts={posts.length} 
      paginate={paginate} />
    </div>
  )

}




export default App;
