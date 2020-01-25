
const id_1= {"name": "Adam Rabbani Adnan","age":17, "address":"Jakarta", "hobbies":'utak atik', "is_married":false,"list_school" :{"name":"Universitas Lampung","year_in":2014,"year_out":2019,"major":"electrical engineering"},"skills":{"skill_name":"programming","level":"beginner"},"interest_in_coding":true}
const id_2= {"name": "Akram","age":15, "address":"Jakarta", "hobbies":"programming", "is_married":false,"list_school" :{"name":"SMP 1","year_in":2014,"year_out":2017,"major":"science"},"skills":{"skill_name":"gaming","level":"expert"},"interest_in_coding":true}
const id_3= {"name": "Azzam","age":14, "address":"Jakarta", "hobbies":"programming", "is_married":false,"list_school" :{"name":"SMP 1","year_in":2014,"year_out":2017},"skills":{"skill_name":"gaming","level":"expert"},"interest_in_coding":true}
var array_json = [id_1,id_2, id_3]

function biodata(name, age){
//var array_raw = array_id
this.json = (array_raw)=>{for(var i = 0; i<array_raw.length; i++){

    if (array_raw[i].name == name && array_raw[i].age ==age && array_raw[i].list_school.major == null){
        array_raw[i].list_school.major = null
        return array_raw[i]
    } 
    else if(array_raw[i].name == name && array_raw[i].age ==age) {
        return array_raw[i]
    }
}
}}

var obj1 = new biodata("Adam Rabbani Adnan",17)
var obj2 = new biodata("Azzam",14) //doesnt contain major on list_school


console.log(obj1.json(array_json))

console.log(obj2.json(array_json))
