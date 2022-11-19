window.onload = function()
{
    const body = document.getElementsByTagName("body")[0];
    const rightside_input = document.getElementById("rs-color");
    const leftside_input = document.getElementById("ls-color");
    const statusText = document.getElementById("status");
    changeColorGradient();

    rightside_input.addEventListener("input", changeColorGradient);
    leftside_input.addEventListener("input", changeColorGradient);

    function changeColorGradient()
    {
        let x = "linear-gradient(to right, " + leftside_input.value + ", " + rightside_input.value + ")";
        body.style.background = x;
        statusText.innerHTML = x;
    }
}