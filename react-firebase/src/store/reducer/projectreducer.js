const initState ={
    projects: [
        {id: 1, title: 'big projet', content:'reat and redux and mongo db'},
        {id: 2, title: 'small projet', content:'reat and redux and firebase'},
        {id: 3, title: 'in process', content:'nothing'},
    ]
}


const projectreducer= (state=initState, action)=> {

switch (action.type) {
    case 'CREATE_PROJECT':
    console.log('Project created', action.project);
   return state;
   case 'CREATE_PROJECT_ERROR':
   console.log('create project error', action.err);
   return state;
   default:
   return state;
}
}
export default projectreducer