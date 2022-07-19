import data from "../data";

export default function handler(req,res) {

    const { popularId } = req.query;
    const { Popular } = data;

    if(popularId) {
        const popularItem = Popular.find(value => value.id == popularId)
        return res.status(200).json(popularItem)
    }
    return res.status(404).json({error : "Popular Item Not Found "})

}