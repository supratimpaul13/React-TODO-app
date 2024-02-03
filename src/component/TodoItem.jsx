import PropTypes from 'prop-types';


const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
    updateHandler: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string, 
      PropTypes.number])
  };

export default TodoItem;