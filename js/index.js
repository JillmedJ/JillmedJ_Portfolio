

// Kod för text-box i Contact me-section.
let usersCommunication;
document.getElementById("text-box-submit").onclick = function(){
    // Hämta värdet från input-fältet
    usersCommunication = document.getElementById("text-box").value;
    // Logga värdet, inte en sträng
    console.log(usersCommunication);

    document.getElementById("output").textContent = usersCommunication;

    document.getElementById("text-box-h2").textContent = `Din kommunikation: ${usersCommunication}`;
}

// #####################################################################

console.log($0);
{/* <h2 id="text-box-h2">Kommunicera med mig!</h2>

                <label>Vad vill du förmedla? </label>
                
                <input id="text-box">
                <button id="text-box-submit">Submit</button>
                <p id="output"> </p> */}