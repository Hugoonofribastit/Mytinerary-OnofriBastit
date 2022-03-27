const Itineraries = require('../models/itineraries')

const commentsControllers = {

    addComment: async (req, res) => {
        const {itineraryId,comment} = req.body.comment
        const user = req.user._id
        try {
            const nuevoComment = await Itineraries.findOneAndUpdate({_id:itineraryId}, {$push: {comments: {comment: comment, userID: user}}}, {new: true}).populate("autor", {name:1}).populate("comments.userID", {name:1})
            res.json({ success: true, response:{nuevoComment}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Itineraries.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            console.log(newComment)
            res.json({ success: true, response:{newComment}, message:"tu comentario ha sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itineraries.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    
}
module.exports = commentsControllers