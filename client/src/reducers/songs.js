export default (songs = [{
    title: 'Parasites',
    url: 'https://soundcloud.com/joseph-haefling/parasites',
    description: {
        genres: ['Doom Core']
    },
    likeCount: {
        type: 0,
        default: '0'
    },
    createdAt: {
        type: 'now',
    }
}], action) => {
    switch(action.type) {
        case "FETCH_SONGS": 
            return action.payload
        case "CREATE_SONG":
            return [...songs, action.payload]
        default: 
        return songs
    }
}