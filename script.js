let detailsShown = document.getElementById('results');
async function getCountryHolidays (countryCode){
    try {
        let response = await fetch (`https://calendarific.com/api/v2/holidays?api_key=O3HZWVvnYwYZ1aabFlnFSFtQRYIllz4k&country=${countryCode}&year=2023`)
        let data = await response.json();

        let countryName = data.response.holidays[1].country.name ;
        let list = document.getElementById('list');
        detailsShown.innerHTML =`<h3 style="text-align:center;">Entered Country : ${countryName} </h3>
        <br>`;
        let lists = document.createElement('ul')
            for (let i=0; i<data.response.holidays.length;i++){
                    let date = data.response.holidays[i].date.iso;
                    let festivel = data.response.holidays[i].name ;
                    let listsone = document.createElement('li');
                    listsone.innerHTML = `<li style="padding-left:25px;">${date} : ${festivel}</li>`
                    lists.appendChild(listsone);
                    detailsShown.appendChild(lists);
               }
                       
        }catch (error){
            console.log('Error :',error);
        }
    }

let button = document.getElementById('button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let countryCode = document.getElementById('countryCode').value;
    getCountryHolidays(countryCode);  
})

