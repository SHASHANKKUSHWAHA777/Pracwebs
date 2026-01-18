function debouncepopdiv(){
    //relay the call to popdiv() until ive not been called for 100ms
    //and ive been called atleast once
    timeout = setTimeout(function(){
        popdiv()
    },1000)
}
async function popdiv(){
    const a = document.getElementById("1st").value
    const b = document.getElementById("2nd").value
    // const response = fetch("backendlink")
    // const ans = await response.text()
    //upper ki do lone wala way bhi use kr skte for fetching or we can also use axios lib niche ki do lines
    const response = await axios("http://localhost:8080/sum?a=" + a + "&b=" + b)
    const ans = await response.data
    const element = document.getElementById("finalsum").innerHTML = ans
}
