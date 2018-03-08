import map from 'lodash/map';
import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {title: ''};
  }

  updateTitle(e) {
    const {target: {value:title=""}} = e;
    this.setState({title});
  }

  addTodo(e) {
    if(this.state.title.replace(/\s/,'') == '') {
      this.setState({ error: 'Title cannot be be blank'});
    } else {
      this.props.addTodo(this.state.title);
      this.setState({title: '', error: null});
    }
  }

  render() {
    const {todos, toggleComplete} = this.props;
    const {title, error} = this.state;

    return (
      <div className="todos-page">
        <h1>Todos</h1>
        <div>
          <label for="todo_title">Title</label>
          <input id="todo_title" value={title} type="text" onChange={this.updateTitle} />
          <button onClick={this.addTodo} >Add Todo</button>
          { error ? (<div className="error">{ error }</div>) : null }
        </div>
        <ul className="todos">
          { map(todos, ({title, complete, id}) => (
            <li key={id||'none'}
                className={ complete ? 'todo complete' : 'todo' }
                onClick={ () => toggleComplete(id, complete) }>
              {title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: (id, complete) => {
    dispatch({type: "Todo.update", params: {id}, payload: {complete: !complete}});
  },
  addTodo: (title) => {
    dispatch({type: "Todo.add", payload: {title}});
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
