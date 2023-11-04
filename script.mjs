

function MyTime() {
    let fileSizeGB = document.getElementById("size");
    let internetSpeedMbps = document.getElementById("speed");

    if (isNaN(fileSizeGB.value) || isNaN(internetSpeedMbps.value) || fileSizeGB <= 0 || internetSpeedMbps <= 0) {
        document.getElementById('result').textContent = "Please enter valid file size and internet speed.";
        return;
    }
    else{
        let fileSizeMB = parseFloat(fileSizeGB.value) * 1024;
        let speed = parseFloat(internetSpeedMbps.value);
    
        let time = (fileSizeMB *8)/ speed;
        let min = time/60;
        let hour=min/60;
        let sec=time%60;
        if(hour<1){
            hour=0;
        }
        document.getElementById("result").innerHTML = hour+ " hours  " +min.toFixed(0)+ " min   " +sec.toFixed(0)+" sec";
    }
}

function clearIfEmpty(currentFieldId, otherFieldId) {
    var currentField = document.getElementById(currentFieldId);
    var otherField = document.getElementById(otherFieldId);

    if (currentField.value === "") {
        otherField.value = "";
    }
}