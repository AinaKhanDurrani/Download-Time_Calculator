

function MyTime() {
    let fileSizeGB = document.getElementById("size");
    let internetSpeedMbps = document.getElementById("speed");

    let fileSizeMB = (fileSizeGB.value) * 1024;
    let speed = ( internetSpeedMbps.value);

    let time = (fileSizeMB * 8) / speed;
    let sec = time % 60;
    let min = time / 60;
    let hour;
    if (min > 59) {
        hour = min / 60;
        min = min % 60;
    }

    document.getElementById("result").innerHTML = hour.toFixed(0) + " hours  " + min.toFixed(0) + " min   " + sec.toFixed(0) + " sec";
}

function clearIfEmpty(currentFieldId, otherFieldId) {
    var currentField = document.getElementById(currentFieldId);
    var otherField = document.getElementById(otherFieldId);

    if (currentField.value === "") {
        otherField.value = "";
    }
}