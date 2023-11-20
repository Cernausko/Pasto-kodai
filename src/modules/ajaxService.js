const ajaxService =(address, city)=>{
    const url= "https://api.postit.lt/v2/?city=";
    const key ="19i395MIl804sPv8ZLCi";
    return fetch(`${url}${city}&address=${address}&key=${key}`)
    .then(respone=>respone.json())

}

export default ajaxService