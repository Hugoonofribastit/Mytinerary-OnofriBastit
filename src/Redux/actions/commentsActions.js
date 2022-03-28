import axios from 'axios';

const commentsActions = {

    addComment: (itineraryId, comment) => {
        return async (dispatch, getState) => {
           /*  console.log(comment)
            console.log(itineraryId) */
            try {
                const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/itineraries/comment/'+itineraryId, {...comment}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            
                /* console.log(res.data) */
                return {success:true, response:res}
            } catch (error) {
                console.log(error)
            }
        }
    },
    modifiComment: (commentId, commentObj) => {
        
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put('http://localhost:4000/api/itineraries/comment/'+ commentId, { ...commentObj }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            // dispatch({
            //     type: 'message',
            //     payload: {
            //         view: true,
            //         message: res.data.message,
            //         success: res.data.success
            //     }
            // })

            return {success: true, response: res.data.response}
        }
    },
    // deleteComment: (itineraryId, commentObj) => {
    //     return async (dispatch, getState) => {
    //         console.log(itineraryId)
    //         console.log(commentObj)
    //         try {
    //             const token = localStorage.getItem('token')
    //             const res = await axios.delete(`http://localhost:4000/api/itineraries/comment/${itineraryId}`,
    //             {...commentObj}, 
    //             { headers: { Authorization: "Bearer " + token } })
    //             console.log(res)
    //             /*   dispatch({
    //                   type: 'message',
    //                   payload: {
    //                       view: true,
    //                       message: res.data.message,
    //                       success: res.data.success
    //                   }
    //               }) */
    //               return {success: true}
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    // },
    deleteComment: (itineraryId,commentId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                /* console.log("itineraryId", itineraryId)
                console.log("commentId", commentId)
                console.log("token", token) */
                const res = await axios.delete(`http://localhost:4000/api/itineraries/comment/${itineraryId}/${commentId.commentId}`,{ headers: { Authorization: "Bearer " + token } }
                )
                /* console.log(res) */
                return { success: true };

            } catch (error) {
                console.log(error.message)
            }
        }
    }

}

export default commentsActions;