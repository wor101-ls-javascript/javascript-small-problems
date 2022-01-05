// Start by creating a new object, invoices. 
// The object requires a property named unpaid; unpaid should be an array that is initially empty.
let invoices = {
  unpaid: [],
  add: function(name, amount) {
    this.unpaid.push({ name, amount });
  },
};

// Now that we have a way to store our unpaid invoices, we should have a way to compute the total amount of all unpaid invoices. 
// Create a method on the invoices object named totalDue that iterates over the unpaid array and computes the total amount for its contents. 
// Return the total at the end of the method.

invoices.totalDue = function() {
  return this.unpaid.reduce((total, item) => total + item.amount, 0);
};

invoices.paid = [];

invoices.payInvoice = function(name) {
  let newUnpaid = [];
  this.unpaid.forEach((item, index) => {
    if (item.name === name) {
      this.paid.push(this.unpaid.slice(index, index + 1)[0]);
    } else {
      newUnpaid.push(this.unpaid.slice(index, index + 1)[0]);
    }
  });
  this.unpaid = newUnpaid;
};

invoices.totalPaid = function() {
  return this.paid.reduce((total, item) => total + item.amount, 0);
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices);

// console.log(invoices.unpaid);
console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());