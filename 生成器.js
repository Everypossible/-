function* foo(){
    console.log(3333)
    yield;
    console.log(4444)
}

const it = foo();
it.next();
it.next();