const User = require('../model/UserModel')




const addPoints = async (req, res) => {
    const userId = req.params.id;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $inc: { points: randomNumber } }, 
            { new: true, useFindAndModify: false } 
        );

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json({ msg: "Points Added", points: user.points });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }
}


const assignRanks = (data)=>{
    
    let rank = 1 ;
    let i =0; 
    let j = i+1 ;
    let n = data.length;
    let rankArr = [];
    while(i<n && j<=n)
    {
        if(data[i]!=data[j])
        {
         rankArr.push(rank);
         rank++ ;
         j++;
         i=j-1; 
        }
        else if(data[i]==data[j])
        {
            rankArr.push(rank);
            j++;
        }
    }
    return rankArr
}



const getAllUser = async(req,res)=>{
    try {
        const user = await User.find().sort({points:-1});
        const points = user.map((itm)=>itm.points)
        const ranks  = assignRanks(points)
        const bulkOps = user.map((user, index) => {
            return {
                updateOne: {
                    filter: { _id: user._id },  
                    update: { $set: { rank: ranks[index] } }  
                }
            };
        });

        await User.bulkWrite(bulkOps);
        return res.status(200).json(user)

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }
}

const addUser =async(req,res)=>{
    try {
        console.log(req.body)
        const user = await User.create(req.body)
        return res.status(201).json({ user: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }
}


module.exports = {addPoints,getAllUser,addUser}