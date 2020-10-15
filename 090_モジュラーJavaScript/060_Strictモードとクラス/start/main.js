class C {
    constructor() {
        function fn() {
            console.log(this)
        }
        fn()
    }

    method() {
    }
}

const c = new C();
c.method();
