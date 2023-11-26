
import Transition from "./../models/transition.js";
import {responder} from "./../util.js";

const postApiTransiton = async (req, res) => {
    const { amount, type, description, category } = req.body
    const savedata = new Transition({
        amount,
        type,
        description,
        category
    })

    try {
        const saved = await savedata.save()

        return responder({
            res,
            success:true,
            message:'Transition saved',
            data: saved
        })
    }
    catch (e) {
        return responder({
            res,
            success:false,
            message:e.message
        });
    }
}

const getApiTransition = async (req, res) => {
    const transitionFind = await Transition.find()
    try {
        return responder({
            res,
            success:true,
            message:"Successfully fetched all transactions",
            data:transitionFind
        });
    }
    catch (e) {
        return responder({
            res,
            success:false,
            message :e.message
        });
    }
}

export {postApiTransiton, getApiTransition}