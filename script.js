
let api=`https://api.thedogapi.com/v1/breeds?limit=15&page=1&order=Desc`;

let doglists=document.querySelector('#doglists')
let nodogs=document.querySelector('.no-dogs')

let fetchDogList=async()=>{
    try{
        let dogData=await fetch(api)
        let dogInfo=await dogData.json()
        doglists.innerHTML=''
        nodogs.innerHTML=''
        if(dogInfo.length > 0){
        dogInfo.map(dogItem=>{
            displyDog(dogItem)
            console.log(dogItem)
        })
    }
    else{
        nodogs.innerHTML=`<div class="alert alert-primary" role="alert">
       No dog Available
      </div>`
    }
    }
    catch{
        console.log('error')
    }

}



fetchDogList()



let displyDog=(dog)=>{
    
    doglists.innerHTML+=`
    <div class="dogs">
    <div class="img">
        <img src="https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg" alt="">
    </div>
    <div class="name">
        <p>${dog.name}</p>
    </div>
</div>
    `
}

let searchDogByName=async()=>{
try{
    let dogname=document.querySelector('#searchInput').value;
    api=`https://api.thedogapi.com/v1/breeds/search?limit=15&page=1&order=Desc&q=${dogname}`
    fetchDogList()
}
catch{
    console.log("no data")
}

}