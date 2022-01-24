    const baseBtn = document.querySelector("#baseline-btn")
    const leadBtn = document.querySelector("#leading-btn")
    const stackBtn = document.querySelector("#stacked-btn")
    const closeBtn = document.querySelector("#close-btn")
    const snackbar = document.querySelector(".snackbar")
    const simpleDialog = document.querySelector("#simple-dialog")
    const simpleDiv = document.querySelector("#simple-dialog-div")
    const alertDialog = document.querySelector("#alert-dialog")
    const alertDiv = document.querySelector("#alert-dialog-div")
    const alertCloseBtn = document.querySelector(".alert-close-btn")
    const dialog = document.querySelector('.dialog')
    const simpleCloseBtn = document.querySelector(".simple-close-btn")

    simpleDialog.addEventListener("click",()=>{
        simpleDiv.style.display = "flex"
                
    })

    alertDialog.addEventListener("click",()=>{
        dialog.style.display = "flex" 
        // alertDiv.style.flexDirection ="column"   
                
    })
    alertCloseBtn.addEventListener("click",()=>{
        alertDiv.style.display="none";
    })


    simpleCloseBtn.addEventListener("click",()=>{
        // dialog.style.display = "none";
        simpleDiv.style.display="none";
    })


        baseBtn.addEventListener("click",()=>{
            snackbar.style.visibility = "visible";
            snackbar.id="baseline-div";
        })

        leadBtn.addEventListener("click",()=>{
            snackbar.style.visibility = "visible";
            snackbar.id="leading-div";
        })

        stackBtn.addEventListener("click",()=>{
            snackbar.style.visibility="visible";
            snackbar.id="stacked-div";
            snackbar.textAlign = "left"
            snackbar.innerHTML = `
            Can't send photo. Retry in 5 seconds.
            <br>
        <button class="btn">READ</button> 
        <i class="fa fa-close " id="close-btn"></i>
            `
        })

        closeBtn.addEventListener("click",()=>{
            snackbar.style.visibility = "hidden";
        })


