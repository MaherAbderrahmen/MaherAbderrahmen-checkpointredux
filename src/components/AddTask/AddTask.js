import React from 'react';
import { connect} from 'react-redux';
import { addTask } from '../../action/action'

const AddTask = ({dispatch}) => {
    let input;
    return (
        <div>
            <form 
            onSubmit={
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTask(input.value))
                    input.value='';
                }
            }
            >
                <input type="text" ref={el => (input - el)} />
                <button type='submit'>Add task</button>
            </form>
        </div>
    )
}
export default connect()(AddTask);