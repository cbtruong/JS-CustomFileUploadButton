let fileInput = document.getElementById("file-input");
let fileList =document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change",()=>{
    //console.log(fileInput.files);
    fileList.innerHTML = "";
    numOfFiles.textContent=`${fileInput.files.length} File Selected`;

    for (i of fileInput.files){
        let listItem=document.createElement("li");
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML=`<p>${i.name}</p> <p>${fileSize/1024}KB</p>`;
        if (i.size>=1024)
            listItem.innerHTML=`<p>${i.name}</p> <p>${(fileSize/1024).toFixed(1)}KB</p>`;
        fileList.appendChild(listItem);
        console.log(i)
    }
})