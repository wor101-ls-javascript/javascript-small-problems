function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount})
      return amount;
    },
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }
      balance -= amount;
      transactions.push({type: 'withdrawl', amount})
      return amount;
    },
    number() {
      return number;
    },
    balance() {
      return balance;
    },
    transactions() {
      return transactions;
    },
  };
}

function makeBank() {
  let accounts = [];
  return { 
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    }
  };
}


//let account = makeAccount();
let bank = makeBank();
let account = bank.openAccount();
console.log(bank.accounts);
console.log(account.balance());
console.log(account.deposit(17));

let secondAccount = bank.openAccount();
console.log(secondAccount.number());
console.log(account.transactions());

// let source = bank.openAccount();
// console.log(source.deposit(10));

// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// console.log(source.balance);
// console.log(destination.balance);


// let account = bank.openAccount();
// console.log(account.number);
// console.log(bank.accounts);
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);



//console.log(account.balance);
// console.log(account.deposit(12));
// console.log(account.balance);
// console.log(account.deposit(10));
// console.log(account.balance);
// account.deposit(78);
// console.log('');
// console.log(account.balance);
// console.log(account.withdraw(19));
// console.log(account.balance);
// console.log('');
// console.log(account.withdraw(91));
// console.log(account.balance);
// console.log(account.transactions);
// console.log(bank.accounts);
