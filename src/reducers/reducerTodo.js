// const initialState = {
//     tasksList: [
//       {
//         id: 1,
//         description: "task1",
//         isDone: false,
//       },
//       {
//         id: 2,
//         description: "task2",
//         isDone: false,
//       },
//     ],
//   };
  
//   function reducer(state = initialState, { type, payload }) {
//     switch (type) {
//       case "ADD":
//         return {
//           ...state,
//           tasksList: [...state.tasksList, payload],
//         };
//       case "TOGGLE":
//         return {
//           ...state,
//           tasksList: state.tasksList.map((task) =>
//             task.id === payload ? { ...task, isDone: !task.isDone } : task
//           ),
//         };
//       case "DELETE":
//         return {
//           ...state,
//           tasksList: state.tasksList.filter((task) => task.id !== payload),
//         };
//       case "EDIT":
//         return {
//           ...state,
//           tasksList: state.tasksList.map((task) =>
//             task.description === payload.description
//               ? { ...task, description: payload.newDescription }
//               : task
//           ),
//         };
//       default:
//         return state;
//     }
//   }

const todo = (state = [],action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,{
                    taskId: action.paylod.taskId,
                    task: action.paylod.task
                }
            ];
            default:
                return state;
    }
}
  
  export default reducer;