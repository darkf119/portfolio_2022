const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ID':
            return {
                ...state,
                theme: action.id
            };
        case 'SET_TITLE':
            return {
                ...state,
                theme: action.title
            };
        case 'SET_FEATURED':
            return {
                ...state,
                theme: action.isFeatured
            };
        case 'SET_MAIN_IMG':
            return {
                ...state,
                theme: action.featuredImg
            };
        case 'SET_OVERVIEW':
            return {
                ...state,
                theme: action.overview
            };
        case 'SET_CONTRIBUTORS':
            return {
                ...state,
                theme: action.contributors
            };
        case 'SET_SKILLS':
            return {
                ...state,
                skills: action.skills
            };
        case 'SET_TECH_SPECS':
            return {
                ...state,
                techSpecs: action.techSpecs
            };
        case 'SET_PROCESS':
            return {
                ...state,
                process: action.process
            };

        default:
            return state;
    }
};

export default reducer;