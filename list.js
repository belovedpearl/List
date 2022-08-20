let data = [
    {
        name: "Sola",
        age:   '15'
    },
    {
        name:  "Ade",
        age:  '10'
    },
    {
        name:  "Tina",
        age:  '17'
    },
    {
        name:  "Ola",
        age:  '12'
    },
    {
        name:  "Ife",
        age:  '18'
    },
    {
        name:  "Hanna",
        age:  '14'
    },
    
]

let infoEl = document.getElementById("info");
let details = data.map(function(item){
    return "<div>" + item.name + " "+ "is "+ item.age + " years old." + "</div>"
})
infoEl.innerHTML = details.join(" ")