const search = () => {
    const seachbar = document.getElementById("search-bar").value.toUpperCase();
    const products = document.querySelectorAll('.product-item');
    const tagName = document.getElementsByTagName('h2');
    
    console.log(seachbar)
    for(let i = 0; i < tagName.length; i++){
        let match = tagName[i];
        console.log();

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(seachbar) > -1){
                products[i].style.display = "";
            }else{
                products[i].style.display = "none";
            }
        }
    }
}   