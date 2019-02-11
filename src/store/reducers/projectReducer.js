const initstate = {
    projects: [
        {id: '1', title: 'Title of Proj 1', content: 'Contenet of the project 1'},
        {id: '2', title: 'Title of Proj 2', content: 'Contenet of the project 2'},
        {id: '3', title: 'Title of Proj 3', content: 'Contenet of the project 3'},
    ]
}

const projectReducer = (state = initstate, action) => {
    switch(action.type){
        case 'CREATE_PROJECT': 
            return state;
        case 'CREATE_PROJECT_ERROR': 
            return state;
        default: 
            return state;
    }   
}

export default projectReducer