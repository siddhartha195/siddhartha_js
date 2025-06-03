 //objects
 const mysym = Symbol("key1")

        const JsUser = {
            name : "siddhartha",
            age : "20",
            email : "siddhartha@google.com",
            mobile : "4512369870",
            [mysym] : "mykey1",
        }

        console.log(JsUser.email)
        console.log(JsUser.name)
        console.log(JsUser.age)
        console.log(JsUser.mobile)
        console.log(JsUser[mysym])
