class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i = i + 1) {
            total = total + this.scores[i];
        }
        return total / this.scores.length;
    }

    getLetterGrade() {
        let avg = this.getAverage();
        if (avg >= 90) {
            return "A";
        } else if (avg >= 80) {
            return "B";
        } else if (avg >= 70) {
            return "C";
        } else if (avg >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

function analyzeClass(students) {
    console.log("------- STUDENT REPORT -------");

    let classTotal = 0;
    let topStudent = students[0];

    for (let i = 0; i < students.length; i = i + 1) {
        let student = students[i];
        let avg = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(student.name + " - Average: " + avg.toFixed(1) + " | Grade: " + grade);

        classTotal = classTotal + avg;

        if (avg > topStudent.getAverage()) {
            topStudent = student;
        }
    }

    let classAverage = classTotal / students.length;

    console.log("-----------------------------------");
    console.log("Class Average: " + classAverage.toFixed(1));
    console.log("Top Student: " + topStudent.name + " with " + topStudent.getAverage().toFixed(1));
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

const students = studentData.map(function (x) {
    return new Student(x.name, x.scores);
});

analyzeClass(students);
