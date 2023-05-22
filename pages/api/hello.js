

export default function handler(req, res){
    if (req.method == "GET"){
        return res.status(200).json({user: "teste", senha: "4458794523"})
    } else {
        return res.status(400).json({})
    }
}