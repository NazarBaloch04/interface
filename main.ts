
interface objectType {
    fname: string,
    age: number,
    func:()=>void,
    hobbies: string[],
    socialMedia: {
        channel1: string,
        channel2: string
    }

}

let object = {
    fname: "Nazar Baloch",
    age: 19,
    func: ()=>{
        console.log("Hello wORLD");
        },
    hobbies : ["Book Reading", "Playing Cricket"],
    socialMedia: {
        channel1:" faceBook",
        channel2: "Google"
    }
}
console.log(object);
console.log(object.func());

