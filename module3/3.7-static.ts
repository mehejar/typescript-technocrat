{
    // static
    // static use korle this. use kora jabe na class er name dhore call korte parbe
    class Counter {
      static  count: number = 0;

        Increment(){
           return Counter.count = Counter.count + 1
        }

        Decrement(){
            return Counter.count = Counter.count -1
        }

    }

    const count1 = new Counter
    console.log(count1.Increment()) // 1 different memory
    console.log(count1.Increment()) // 1 different memory
    console.log(count1.Increment()) // 1 different memory

    const decrement1 = new Counter
    console.log(decrement1.Decrement()) // 1 different memory
}