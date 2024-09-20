
const checkRank =(data)=>{
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
    
    console.log(rankArr)
}

data = [76,45,45,45,43,34,34,21]

checkRank(data)

