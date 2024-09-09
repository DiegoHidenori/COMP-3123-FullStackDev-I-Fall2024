function Student(sid, name) {
    this.sid = sid
    this.name = name
}

Student.prototype.display = function() {
    console.log(this.sid)
    console.log(this.name)
}

let s = new Student(1, 'Diego')