// Create a school object. The school object uses the student object from the previous exercise. 
// It has methods that use and update information about the student. 
// Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
// Implement the following methods for the school object:

//   - addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".

//   - enrollStudent: Enrolls a student in a course.

//   - addGrade: Adds the grade of a student for a course.

//   - getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.

//   - courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. 
// Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(this.name + ' is a ' + this.year + ' student');
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, note) {
      let courseIndex = this.getCourseIndex(code);
      let course = this.courses[courseIndex];
      if (course.note) {
        course.note += '; ' + note;
      } else {
        course.note = note;
      }
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }

      });
    },
    updateNote(code, note) {
      let courseIndex = this.getCourseIndex(code);
      let course = this.courses[courseIndex];
      if (course) {
        course.note = note;
      }
    },
    getCourseIndex(code) {
      let courseIndex = -1;
      this.courses.forEach((course, index) => {
        if (course.code === code) {
          courseIndex = index;
        }
      });
      return courseIndex;
    },
  };
}

let school = {
  students: [],
  addStudent(student) {
    this.students.push(student);
  },
  enrollStudent(studentName, course) {
    let student = this.getStudent(studentName);
    student.addCourse(course);
  },
  addGrade(studentName, code, grade) {
    let student = this.getStudent(studentName);
    let courseIndex = student.getCourseIndex(code);
    student.courses[courseIndex].grade = grade;
  },
  getReportCard(studentName) {
    let student = this.getStudent(studentName);
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(course.name + ': ' + course.grade);
      } else if (course) {
        console.log(course.name + ': In progress');
      }

    });
  },
  courseReport(courseName) {
    let courseResults = [];
    let gradeTotal = 0;
    this.students.forEach(student => {
      let selectedCourse = student.courses.filter(course => course.name === courseName)[0];
      if (selectedCourse) {
        let grade = selectedCourse.grade;
        if (typeof grade === 'number') {
          courseResults.push(`${student.name}: ${grade}`);
          gradeTotal += grade;
        }
      }
    });
  
    if (courseResults.length > 0) {
      console.log('=' + courseName + '=');
      courseResults.forEach(result => console.log(result));
      console.log('---');
      console.log(`Course Average: ${parseInt(gradeTotal / courseResults.length, 10)}`);
    }
  },
  getStudent(studentName) {
    return this.students.filter(student => student.name === studentName)[0];
  },
};

let foo = createStudent('foo', '3rd');
school.addStudent(foo);
school.enrollStudent('foo', { name: 'Math', code: 101, });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102, });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.addGrade('foo', 101, 95);
school.addGrade('foo',102, 90 );
//foo.listCourses();
//school.getReportCard('foo');

let bar = createStudent('bar', '1st');
school.addStudent(bar);
school.enrollStudent('bar', { name: 'Math', code: 101, });
school.addGrade('bar', 101, 91);
//console.log(bar);
//school.getReportCard('bar');


let qux = createStudent('qux', '2nd');
school.addStudent(qux);
school.enrollStudent('qux', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, });
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);
//console.log(qux);
//school.getReportCard('qux');
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

