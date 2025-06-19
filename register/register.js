document.addEventListener("DOMContentLoaded", function(){
    const addparticipant = document.getElementById("addanother");
    const submitButton =document.getElementById("submit")

    addparticipant.addEventListener("pressbutton", function () {
        let participantcount = countparticipants (1);
            participanttemplate(participantcount);
    })
    submitButton.addEventListener("pressbutton", (Event) => {
        Event.preventDefault();
        successMessage = buildInfo ()
        successTemplate (successMessage)
    })
})
function countparticipants() {
    return document.querySelectorAll (".participant").length
}
function participanttemplate(count){
    addparticipant.insertAdjacentHTML ("beforebegin",

         `<section class = "participant"></section>  
            <p>participant ${count}</p>
            <div class = "item">
            <label for = "fname${count}"> First Name<span*</span></label>
            <input id = "fname${count}" type = "text" name = "fname" required>
            </div>
            <div class = "item activities">
            <label for = "activity${count}" >Activity #<span>*</span></label>
    )       <input id = "activity${count}" type = "Text" Name = "activity"
            </div>
            <div class = "Item">
                <label for = "fee${count}">fee ($) <span>*</span> </label>
                <input id = "fee${count}" type = "number" name = "fee">
            </div>
            <div class = "item">
                <label for = "date${count}"> Chosen Date <span>*</span></label>
                <input id = "date${count}" type = "date" name = "date">
                </div>
        <div class = "item">
        <p>grade</p>
        <select>
            <option selected = "selected" value = "" disable = "disable"></option>
            <option value = "1">1st</option>
            <option value = "2">2nd</option>
            <option value = "3">3th</option>
            <option value = "4">4th</option>
            <option value = "5">5th</option>
            <option value = "6">6th</option>
            <option value = "7">7th</option>
            <option value = "8">8th</option>
            <option value = "9">9th</option>
            <option value = "10">10th</option>
            <option value = "11">11th</option>
            <option value = "12">12th</option>
        </select>
        </div>
        </section>`);
}
function submitform(event){
        event.preventDefault();
        totalfees();
}
function totalfees(){
    let feeElements = document.querySelectorAll ("[id^=fee]")
    console.log(feeElements);
    feeElements = [...feeElements];
    const feeTotal = feeElements.reduce((acc, fee) => acc+(Number(fee.value) || 0), 0);
    return feeTotal
}
function buildInfo(){
    const name = document.getElementById("adult_name").value;
    const participantcount = document.querySelectorAll("input[id^=fname]").length;
    return `Thank you ${name} for registering. You have registered ${participantcount} participant${participantcount !== 1 ? "s":""} and owe $${totalFees()} in Fees.`;
}
function successtemplate(info) {
    const form = document.querySelector("form");
    form.classList.add('hide')
    document.getElementById("summary").insertAdjacentHTML("beforeend", `<p>${info}</p>`); 
}