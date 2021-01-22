export default (favorites = [{greeting: 'hiiiiiii'}], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload
        case "CREATE":
            return [...favorites, action.payload]
        default: 
            return favorites
    }
}