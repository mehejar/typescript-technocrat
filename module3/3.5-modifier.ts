{
// Access Modifier
class BankAccount {
  public readonly id: number;
   public name: string;
   protected _balance: number;


    constructor(id: number, name: string, _balance: number){
        this.id = id,
        this.name = name,
        this._balance= _balance
    }

    addDeposit(amount: number){
return this._balance = this._balance + amount
    }

    getBalance(){
        return this._balance
    }
}

const goribManushAccount = new BankAccount(442, "Gorib manush", 12000)
// goribManushAccount.balance = 0; // cant change bcz private property
goribManushAccount.addDeposit(500)

const balanceC = goribManushAccount.getBalance()
console.log(balanceC)


}