import data from "../data";

export default function handler(req,res) {

    const { trendingId } = req.query;
    const { Trending } = data;

    if(trendingId){
        const trendingItem = Trending.find(value => value.id == trendingId)
        return res.status(200).json(trendingItem)
    }
    return res.status(404).json({error : "Trending Item Not Found"})
}