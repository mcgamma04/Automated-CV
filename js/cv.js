const generateCv = document.querySelector(".btnGenerate")

function myCv(){
    document.getElementById("btnEdu").style.display = "none"
    document.getElementById("btnWork").style.display = "none"
    document.getElementById("btnSkill").style.display = "none"
    document.getElementById("btnCert").style.display = "none"
    document.querySelector(".btnGenerate").style.display="none"
     document.querySelector(".btnDownload").style.display="block"


    //alert("Thanks!!!")
    // Personal Data Input
     let fullname = document.querySelector(".name").value
     let addres = document.querySelector(".address").value
     let pno = document.querySelector(".phone-no").value
     let mail = document.querySelector(".email").value

     // Personal Data Output
     //document.querySelector(".pp").innerHTML=""
     document.getElementById("name").innerHTML = fullname;
     document.getElementById("address").innerHTML = addres;
     document.getElementById("phone-no").innerHTML = pno;
     document.getElementById("email").innerHTML = mail;
     


     //Objective Input
     let objective = document.querySelector(".obj").value;

     //Objective Output
     document.getElementById("objOutput").innerHTML = objective;




     // Education Data Input

     //Tertiary Input value
     let ter = document.querySelector(".ter1").value
     let ter2 = document.querySelector(".terAddr1").value
     let ter3 = document.querySelector(".terDg1").value
     let ter4 = document.querySelector(".terStartYr").value
     let ter5 = document.querySelector(".terEndYr").value

     //Tertiary output
     document.querySelector("#ter1").innerHTML=ter
     document.getElementById("terAddr1").innerHTML = ter2;
     document.getElementById("terDg1").innerHTML = ter3;
     document.getElementById("terStartYr").innerHTML = ter4;
     document.getElementById("terEndYr").innerHTML = ter5;
    


     //Secondary Input value
     let sec1 = document.querySelector(".secNm").value
     let sec2 = document.querySelector(".secondaryAdd").value
     let sec3 = document.querySelector(".secDg").value
     let sec4 = document.querySelector(".secStartYr").value
     let sec5 = document.querySelector(".secEndYr").value

     //Secondary output
     document.querySelector("#secNm").innerHTML=sec1
     document.getElementById("secondaryAdd").innerHTML = sec2;
     document.getElementById("secDegr").innerHTML = sec3;
     document.getElementById("secStartYr").innerHTML = sec4;
     document.getElementById("secEndYr").innerHTML = sec5;
     
     


     
     //Working Experience
    //  let work1 = document.querySelector(".ter1").value
    //  let work2 = document.querySelector(".terAddr1").value
    //  let work3 = document.querySelector(".terDg1").value
    //  let work4 = document.querySelector(".terStartYr").value
    //  let work5 = document.querySelector(".terEndYr").value


    //Summary Input
     let summ = document.querySelector(".summary").value;

     //Summary Output
     document.getElementById("summary").innerHTML = summ;
     
}
generateCv.addEventListener('click',myCv);




//Working Experience Creation Form
let i;
let workEx;
let workAdd = document.getElementById("btnWork")
function workExpForm(){
    workEx = prompt("How many work experience do you have?")
    for(i = 0; i < workEx; i++){
        let add = i + 1;
        //console.log(add)

        //Create Filed for Title
        let wkTitle = document.getElementById("workExp")
        let title = document.createElement("input")
        title.setAttribute("type","text")
        title.setAttribute("class","worktitle"+add++)
        title.setAttribute("id","details")
        title.setAttribute("placeholder","Organazition/Company")
        wkTitle.appendChild(title)
        // console.log(wkTitle)
        // console.log(title)

        //Create filed for Start year
        let wkSyrs = document.getElementById("workStartYr2") 
        let startyr = document.createElement("input")
        startyr.setAttribute("type","text")
        startyr.setAttribute("class","strYr"+add++)
        startyr.setAttribute("id","details")
        startyr.setAttribute("placeholder","Start Year")
        startyr.setAttribute("style","width:150px")
        wkSyrs.appendChild(startyr)

        //Create filed for End year
        let wkEyrs = document.getElementById("workEndYr") 
        let endyr = document.createElement("input")
        endyr.setAttribute("type","text")
        endyr.setAttribute("class","endYr"+add++)
        endyr.setAttribute("id","details")
        endyr.setAttribute("placeholder","End Year")
        endyr.setAttribute("style","width:150px")
        wkEyrs.appendChild(endyr)
        console.log(wkEyrs)
        console.log(endyr)
    //    let formCreate = document.getElementById("workEndYr") 
    }
}

workAdd.addEventListener('click',workExpForm)



//Key Skills Creation Form
let k;
let keySkill;
let skillAdd = document.getElementById("btnSkill")
function skillForm(){
    keySkill = prompt("How many skills do you have?")
    for(k = 0; k < keySkill; k++){
        let ad = k + 1;
        //console.log(add)

        //Create Filed for Title
        let kkk = document.getElementById("skil")
        let kekS = document.getElementById("key")
        let inputSkill = document.createElement("input")
        inputSkill.setAttribute("type","text")
        inputSkill.setAttribute("class","keySkills"+ad++)
        inputSkill.setAttribute("id","details")
        inputSkill.setAttribute("placeholder","Enter Your skills here?")
        kkk.appendChild(kekS)
        kekS.appendChild(inputSkill)
        console.log(kekS)
        console.log(inputSkill)
        console.log(kkk)

        //Create filed for Start year
        // let wkSyrs = document.getElementById("workStartYr2") 
        // let startyr = document.createElement("input")
        // startyr.setAttribute("type","text")
        // startyr.setAttribute("class","strYr"+add++)
        // startyr.setAttribute("id","details")
        // startyr.setAttribute("placeholder","Start Year")
        // startyr.setAttribute("style","width:150px")
        // wkSyrs.appendChild(startyr)

        // //Create filed for End year
        // let wkEyrs = document.getElementById("workEndYr") 
        // let endyr = document.createElement("input")
        // endyr.setAttribute("type","text")
        // endyr.setAttribute("class","endYr"+add++)
        // endyr.setAttribute("id","details")
        // endyr.setAttribute("placeholder","End Year")
        // endyr.setAttribute("style","width:150px")
        // wkEyrs.appendChild(endyr)
        // console.log(wkEyrs)
        // console.log(endyr)
    //    let formCreate = document.getElementById("workEndYr") 
    }
}

skillAdd.addEventListener('click',skillForm)




//Working Experience Creation Form
// function workForm(){
//     //For span
//     document.querySelector("#am").style.display="none"
//     let wkCompany = document.getElementById("workEx2")
//     let creatCompany = document.createElement("input")
//     creatCompany.setAttribute("type","text")
//     creatCompany.setAttribute("class","wkr")
//     creatCompany.setAttribute("id","details")
//     creatCompany.setAttribute("placeholder", "Organazition/Company")
//     wkCompany.appendChild(creatCompany)
//     //console.log(wkCompany)
//     //alert("Good")
//     //let start = document.getElementById("workSrtYr2")
//     let wkSrtYr = document.getElementById("workStartYr2")
//     let creatStrYr = document.createElement("input")
//     creatStrYr.setAttribute("type","text")
//     creatStrYr.setAttribute("class","wkr")
//     creatStrYr.setAttribute("id","details")
//     creatStrYr.setAttribute("placeholder", "Start Year")
//     creatStrYr.setAttribute("style", "width:150px")
//   // start.appendChild(wkSrtYr)
//     wkSrtYr.appendChild(creatStrYr)
//     //console.log(wkSrtYr)
//     //console.log(start)
//     //console.log(creatStrYr)

// //     let end = document.getElementById("workEndYr")
// //     let wkEndYr = document.getElementById("workStartYr2")
// //     let creatEndYr = document.createElement("input")
// //     creatEndYr.setAttribute("type","text")
// //     creatEndYr.setAttribute("class","wkr")
// //     creatEndYr.setAttribute("id","details")
// //     creatEndYr.setAttribute("placeholder", "End Year")
// //     creatEndYr.setAttribute("style", "width:150px")
// //    end.appendChild(wkEndYr)
//    // wkSrtYr.appendChild(creatEndYr)
// }
// document.getElementById("btnWork").addEventListener('click',workForm);