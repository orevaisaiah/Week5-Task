const metersInput = document.getElementById("meters");

const inchesInput = document.getElementById("inches");

const feetInput = document.getElementById("feet");

const yardsInput = document.getElementById("yards");

const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {

    let input = inputs[i];

    input.addEventListener('input', function(e) {
        
        let value = e.target.value;
        
        switch (e.target.name) {

            case "meters":
                document.getElementById("meters-lab").innerHTML = " Enter Value in meters";
                document.getElementById("inches-lab").innerHTML = "Value in inches [in]";
                document.getElementById("feet-lab").innerHTML = "Value in feet [ft]";
                document.getElementById("yards-lab").innerHTML = "Value in yards [yd]";
                inchesInput.value = value * 39.3701;
                feetInput.value = value * 3.2808;
                yardsInput.value = value * 1.09361;
                break;
        
            case "inches":
                document.getElementById("inches-lab").innerHTML = "Enter Value in inches";
                document.getElementById("meters-lab").innerHTML = "Value in meters [m]";
                document.getElementById("feet-lab").innerHTML = "Value in feet [ft]";
                document.getElementById("yards-lab").innerHTML = "Value in yards [yd]";
                metersInput.value = value * 0.0254;
                feetInput.value  = value * 0.0833333;
                yardsInput.value = value * 0.0277778;
                break;

            case "feet":
                document.getElementById("feet-lab").innerHTML = "Enter value in feet";
                document.getElementById("inches-lab").innerHTML = "Value in inches [in]";
                document.getElementById("meters-lab").innerHTML = "Value in meters [m]";
                document.getElementById("yards-lab").innerHTML = "Value in yards [yd]";
                metersInput.value = value * 0.3048;
                inchesInput.value = value * 12;
                yardsInput.value = value * 0.333333;
                break;

            case "yards":
                document.getElementById("yards-lab").innerHTML = "Enter Value in yards";
                document.getElementById("inches-lab").innerHTML = "Value in inches [in]";
                document.getElementById("feet-lab").innerHTML = "Value in feet [ft]";
                document.getElementById("meters-lab").innerHTML = "Value in meters [m]";
                metersInput.value = value * 0.9144;
                inchesInput.value = value * 36;
                feetInput.value = value * 3;
                break;
        }
    })
}
