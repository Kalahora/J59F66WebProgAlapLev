$(document).ready(function ()
{
    $("#load_data").click(function()
    {
        $("#area").html("");
        $("#area").append("<h2>TOKAJ HEGYALJA EGYETEM</h2>");

        $.getJSON("j59f66_orarend.json",function(data)
        {
            $("#area").append("<b>Cim:</b>");
            $("#area").append("&nbsp;" + data.j59f66_orarend.cím["iranyitoszam"]);
            $("#area").append("&nbsp;" + data.j59f66_orarend.cím["varos"]);
            $("#area").append("&nbsp;" + data.j59f66_orarend.cím["utca"] + "<br><br>");

            $("#area").append("<b>Telefonszám:</b><br><ul>");

            for (let i = 0; i < data.j59f66_orarend["telefonszam"].length; i++)
            {
                $("#area").append("<li>" + data.j59f66_orarend["telefonszam"][i].tipus + ":&nbsp;" + data.j59f66_orarend["telefonszam"][i].szam + "</li>");
            }

            $("#area").append("</ul><br><br>THE, PTI Órarend 2025 ősz<br><br>");

            for(let i = 0; i < data.j59f66_orarend.ora.length; i++)
            {
                $("#area").append("<b>Tárgy:</b>&nbsp;" + data.j59f66_orarend.ora[i].targy + "<br><br>");

                $("#area").append("<b>Idopont:</b><br>&nbsp;DÁtum:&nbsp;" + data.j59f66_orarend.ora[i].idopont.dátum + "<br>&nbsp;Tol:&nbsp" + data.j59f66_orarend.ora[i].tol + "<br>&nbsp;Ig:&nbsp" + data.j59f66_orarend.ora[i].ig);

                $("#area").append("<b>Helyszin:</b>&nbsp;" + data.j59f66_orarend.ora[i].helyszin + "<br><br>");

                $("#area").append("<b>Oktato:</b>&nbsp;" + data.j59f66_orarend.ora[i].oktato + "<br><br>");

                $("#area").append("<b>Szak:</b>&nbsp;" + data.j59f66_orarend.ora[i].szak + "<br><br>");
            }
        });
    });
});

