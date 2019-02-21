class BankAccount {
  constructor (name, balance, interestRate) {
    this.name = name;
    this.balance = balance;
    this.interestRate = interestRate;
  }

  addInterest() {
    this.balance = (this.balance + (this.balance * this.interestRate));
    console.log(`Thank you ${this.name}! Your new balance is ${this.balance}.`);
  }
}

class BankAccountWithFee extends BankAccount {
  constructor (name, balance, interestRate, fee) {
    super(name, balance, interestRate);
    this.fee = fee;
    }
  
  applyFee() {
    this.balance -= (this.balance - this.fee);
    console.log(`After applying the $${this.fee} bank fee, your balance is $${this.balance}. Please come back soon ${this.name}!`);
  }
}

let sugarMama = new BankAccount ('Sugar Mama', 1000, 0.08)
sugarMama.addInterest();
let richyRich = new BankAccountWithFee ('Richy Rich', 100, 0.1, 1.00);
richyRich.addInterest();
richyRich.applyFee();


