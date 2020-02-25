function Course(name, teacher, credits, grade) {
  this.name = name;
  this.teacher = teacher;
  this.credits = credits;
  this.grade = grade;
}

let mahmud = "Mahmud Al Hakim";
let sigrun = "Sigrun Olafsdottir";
let robert = "Robert Kärrbrant";

let javaUtv = Course("Java-utveckling", mahmud, 20, "VG");
let objp = Course("Objektorienterad programmering och Java", sigrun, 55, "VG");
let ooad = Course("Objektorienterad analys och design", robert, 15, "VG");
let dbtek = Course("Databasteknik och Java", sigrun, 30, "IG");

let courses = [javaUtv, objp, ooad, dbtek];
Console.log(courses);
