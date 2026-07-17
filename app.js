const start = document.getElementById("start");

start.addEventListener("click", () => {

    document.querySelector(".card").innerHTML = `

    <h1>💪 Séance du jour</h1>

    <h2 id="exo">Échauffement</h2>

    <div id="temps" style="
        font-size:70px;
        text-align:center;
        color:#1976d2;
        margin:30px 0;
    ">
    60
    </div>

    <div style="
        width:100%;
        height:18px;
        background:#ddd;
        border-radius:10px;
        overflow:hidden;
    ">

        <div id="barre"
        style="
        width:100%;
        height:100%;
        background:#1976d2;
        ">
        </div>

    </div>

    <p style="margin-top:25px;text-align:center;font-size:22px">

    Respire calmement 😊

    </p>

    `;

    const exercices=[
        ["Échauffement",60],
        ["Assis - Debout",40],
        ["Développé épaules",40],
        ["Curl biceps",40],
        ["Rotation du buste",40],
        ["Marche sur place",60],
        ["Étirements",60]
    ];

    let numero=0;

    function lancer(){

        if(numero>=exercices.length){

            document.querySelector(".card").innerHTML=`

            <h1>🎉 Bravo Antoine !</h1>

            <h2>Séance terminée</h2>

            <button onclick="location.reload()">

            Retour à l'accueil

            </button>

            `;

            return;

        }

        let exo=exercices[numero][0];
        let duree=exercices[numero][1];

        document.getElementById("exo").innerHTML=exo;

        let restant=duree;

        let timer=setInterval(()=>{

            document.getElementById("temps").innerHTML=restant;

            document.getElementById("barre").style.width=
            (restant/duree*100)+"%";

            restant--;

            if(restant<0){

                clearInterval(timer);

                numero++;

                lancer();

            }

        },1000);

    }

    lancer();

});

  },1000);

}
