// Business Logic

BankAccount.prototype.assignId = function () {
  this.currentid += 1;
  return this.currentid;
};

BankAccount.prototype.addAccount = function (name, balance) {
  BankAccount.id = this.assignId;
};

BankAccount.prototype.balance = function () {
  return this.name + "has an account balance of $" + this.balance;
};

BankAccount.prototype.deposit = function (amount) {
  return (this.balance += amount);
};

BankAccount.prototype.withdraw = function (amount) {
  return (this.balance -= amount);
};

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

//User Interface Logic
function attachContactListeners() {
  $("#deposit").on("click",".deposit",function(){
    let deposit = $("input#depositamount").val();
    theaccount.deposit(deposit);
    console.log(theaccount.balance);
})




}
$(document).ready(function(){
  $("form#createAccount").submit(function(event){
event.preventDefault();
const name = $('input#customer-name').val();
let balance = $('input#starting-balance').val();
let theaccount = new BankAccount(name,balance);
$("#balance").html(theaccount.balance);
// console.log(theaccount.balance+theaccount.name);

  })
});