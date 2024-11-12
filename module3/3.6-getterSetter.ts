{
    // Access Modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;


        constructor(id: number, name: string, _balance: number) {
            this.id = id,
                this.name = name,
                this._balance = _balance
        }
        // =====Setter====//
        set deposit(amount:number){
             this._balance = this._balance + amount
        }

        // addDeposit(amount: number) {
        //     return this._balance = this._balance + amount
        // }

        // ===GETTER====//
        get Balance(){
            return this._balance
        }

        // getBalance() {
        //     return this._balance
        // }
    }

    const goribManushAccount = new BankAccount(442, "Gorib manush", 12000)
    // goribManushAccount.balance = 0; // cant change bcz private property
    // goribManushAccount.addDeposit(500)

    goribManushAccount.deposit = 500

    // const balanceC = goribManushAccount.getBalance()
    const balanceC = goribManushAccount.Balance // function er moto use korchi
    console.log(balanceC)


}