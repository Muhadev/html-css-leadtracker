
let myLeads = []

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

// myLeads = JSON.stringify(myLeads)

// console.log (typeof myLeads)
let oldLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads", "www.w3school.com")

// console.log( localStorage.getItem("myLeads") )


// localStorage.setItem("myName", "Runge Moa")

// let Name = localStorage.getItem("myName")
// console.log(Name)   

// localStorage.clear()

// let leadsFromLocalStorage = JSON.parse(localStorage.setItem("myLeads") )
// console.log()

// [lead1, lead2] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// check if leadsFromLocalStorage is truthy
// if so, set myLeads to its value and call renderleads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads) 
}

// const tabs = [
//     {url:"http://www.w3school.com"}
// ]

tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id  // or do whatever you need
   
     })
   
deleteBtn.addEventListener("dblclick", function(){
    // console.log("double clicked!")
    localStorage.clear ()
    myLeads = []
    render(myLeads)
})

// console.log(leadsFromLocalStorage)

// console.log( localStorage.getItem("myLeads") )

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // save the mlleads array to localStorage
    // ps: remember stringify,JSON

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
    // To verify that it work
    console.log( localStorage.getItem("myLeads") )
})
function render(leads) {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += 
    `<li>
        <a target= '_blank' href= '${leads[i]}'>
        ${leads[i]} 
        </a>
        </li>`

}
ulEl.innerHTML = listItems
}











