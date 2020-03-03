const initialState = []

export default function postList (state = initialState, action) {
    switch(action.type) {

        case 'GET_POSTS_BY_LOCATIONS':
            return action.posts

        case 'GOT_UPCOMING':
            return action.upcomingposts

        case 'GOT_USER_POSTS':
            return action.userPosts
            
        default:
            return state
        }
    }