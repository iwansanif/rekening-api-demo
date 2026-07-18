console.log("BANK.JS LOADED");

window.BANK_API_URL = "http://127.0.0.1:3000/api/banks";

window.BANK_API_KEY = "demo123";


async function loadBanks() {


    try {


        const response = await fetch(
            window.BANK_API_URL,
            {
                headers:{
                    "x-api-key": window.BANK_API_KEY
                }
            }
        );


        const result = await response.json();

	console.log("API RESPONSE:", result);

        const table =
            document.getElementById("bankTable");


        table.innerHTML = "";


        result.data.forEach(
            (bank,index)=>{


                table.innerHTML += `

                <tr>

                <td>${index+1}</td>

                <td>${bank.code}</td>

                <td>${bank.short_name}</td>

                <td>${bank.name}</td>

                <td>

                ${
                    bank.active
                    ?
                    '<span class="badge bg-success">Aktif</span>'
                    :
                    '<span class="badge bg-secondary">Nonaktif</span>'
                }

                </td>

                </tr>

                `;


            }
        );


    }

    catch(error){


        console.error(error);


        document.getElementById("bankTable")
        .innerHTML = `

        <tr>

        <td colspan="5"
        class="text-danger text-center">

        Gagal mengambil data

        </td>

        </tr>

        `;


    }


}


loadBanks();

async function createBank(){


    const data = {

        code:
        document.getElementById("bankCode").value,

        short_name:
        document.getElementById("bankShortName").value,

        name:
        document.getElementById("bankName").value

    };


    try {


        const response = await fetch(

            window.BANK_API_URL,

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json",

                    "x-api-key":
                    window.BANK_API_KEY

                },

                body:
                JSON.stringify(data)

            }

        );


        const result =
        await response.json();



        console.log(result);



        if(result.success){


            alert("Bank berhasil ditambahkan");


            location.reload();


        }

        else {


            alert(result.message);


        }


    }

    catch(error){

        console.error(error);

        alert("Terjadi kesalahan");

    }


}