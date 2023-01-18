import React from 'react';
import List from './List';
import './style.css' ;

class Todolist extends React.Component {

     constructor() {
          super();
          this.state = {
               term: "",
               items: []
          }
     }

     onChangeHandler = (e) => {
          this.setState({
               term: e.target.value
          });
     }

     onDeleteHandler = (index) => {
          const deleteTask = [...this.state.items];
          deleteTask.splice(index, 1);
          this.setState({
               items: deleteTask
          })
     }

     onFormHandler = (e) => {
          e.preventDefault();
          this.setState({
               term: '',
               items: [...this.state.items, ...this.state.term]
          });
     }

     render() {
          return (
               <>
                    <div>
                         <form action="">
                              <div>
                                   <input type="text" value={this.state.term} placeholder='Enter a term...'
                                        onChange={this.onChangeHandler}
                                   />
                                   <button onClick={this.onFormHandler} >Add Item </button>
                              </div>
                         </form>
                    </div>
                    <List deleteTask={this.onDeleteHandler} items={this.state.items} />
               </>
          )
     }


}

export default Todolist;