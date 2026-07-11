async function checkAccount(){

    const bank =
        document.getElementById("bank").value;


    const account =
        document.getElementById("account").value;


    const result =
        document.getElementById("result");


    result.innerHTML = "Memproses...";


    try {

        const response = await fetch(
            "/api/check-account",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                    "x-api-key":"demo123"
                },

                body:JSON.stringify({

                    bank_code:bank,

                    account_number:account

                })
            }
        );


        const data = await response.json();


        if(data.data.valid){

            result.innerHTML = `
            <h3>Hasil</h3>

            Bank :
            ${data.data.bank_name}
            <br>

            Nama :
            ${data.data.account_name}
            <br>

            Status :
            <span class="valid">
            VALID
            </span>
            `;

        }
        else {

            result.innerHTML = `
            <h3>Hasil</h3>

            Rekening tidak ditemukan

            <br>

            Status :
            <span class="invalid">
            INVALID
            </span>
            `;

        }


    }
    catch(error){

        console.error(error);

        result.innerHTML =
        "Gagal terhubung ke API";

    }

}


// Pasang event tombol
document
.getElementById('checkButton')
.addEventListener(
    'click',
    checkAccount
);