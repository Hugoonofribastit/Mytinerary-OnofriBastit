const Itineraries = require('../models/itineraries')

const commentsControllers = {

    addComment: async (req, res) => {
        try {
            const nuevoComment = await Itineraries.findOneAndUpdate(
            {_id: req.params.id},
            {$push:
                 {comments:
                     { comment: req.body.comment,
                       userID: req.user._id
                     }
                 }
            }, 
            {new: true}
        ).populate("comments.userID","name")
            res.json({ success: true, response: nuevoComment, message:"gracias por dejarnos tu comentario"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
/*     modifyComment: async (req, res) => {
        const {commentID,comments} = req.body
        console.log(req.body)
        console.log("commentID")
        console.log(commentID)
        console.log("comments")
        console.log(comments)
        const user = req.user._id
        try {
            const modifyComment = await Itineraries.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            console.log(modifyComment)
            res.json({ success: true, response:{modifyComment}, message:"tu comentario ha sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    }, */

    /* modifyComment: async (req, res) => {
        //console.log('REQ.PARAMS')
        //console.log(req.params)
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const {comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Itineraries
            .findOneAndUpdate({"comments._id": commentID}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            res.json({success: true,
                response: {modifyComment},
                message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    }, */

    modifyComment: async (req, res) =>{
        const { comment} = req.body
        try{
            const modifyComment = await Itineraries.findOneAndUpdate(
                {"comments._id":req.params.id},
                {$set:{"comments.$.comment":comment}},
                {new:true}
               
            )
            if (modifyComment) {
                res.json({success: true,
                response: modifyComment})
            }else{
                res.json ({error:"el comentario no se ha encontrado"})
            }
        }catch (error){
            res.json ({success: false,
            response: error.message})
        }
        
    },
    /* deleteComment: async (req, res) => {
        try {
            const deleteComment = await Itineraries.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $pull: {
                        comments: {
                            _id: req.body.commentId
                        }
                    }
                },
                {new: true})
          console.log(deleteComment)
            res.json({ success: true, response: deleteComment, message: "has eliminado el comentario" })

        }catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    }, */


    deleteComment: async (req, res) => {
        try {
            const deleteComment = await Itineraries.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $pull: {
                        comments: {
                            _id: req.params.comment
                        }
                    }
                },
                {new: true})
          console.log(deleteComment)
            res.json({ success: true, response: deleteComment, message: "has eliminado el comentario" })

        }catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    
}
module.exports = commentsControllers