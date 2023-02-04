import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

     constructor(props) {
          super(props)

          this.state = {
               post: []
          }
     }

     componentDidMount() {
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(reponse => {
               console.log(reponse)
               this.setState({
                    post : reponse.data
               })
          })
          .catch((error) => {
               console.log(error) ;
          })
     }

     render() {
          const { post } = this.state ;
          return (
               <div>
                    {
                         post.map(post => <div key = {post.id} > {post.title}  </div> )
                    }
               </div>
          )
     }
}

export default PostList;