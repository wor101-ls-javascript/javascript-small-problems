// In an earlier exercise, we created a school object. It works, however, it can still be improved. 
// The following are improvements for you to implement in the solution provided:

//   - Make the list students private. Right now, anyone can gain access to it and manipulate it.
//   - Make the constraint for allowed values for years a private variable. 
//     As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative.
//   - Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access.

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
      return this.courses;
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

const newSchool = function () {
  let students = [];
  let allowedYear = (year) => ['1st', '2nd', '3rd', '4th', '5th'].includes(year);
  let getCourse = function(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  };

  return {
    addStudent(name, year) {
      console.log(year);
      console.log(['1st', '2nd', '3rd', '4th', '5th'].includes(year));
      if (allowedYear(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
  
    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },
  
    addGrade(student, courseName, grade) {
      const course = getCourse(student, courseName)
  
      if (course) {
        course.grade = grade;
      }
    },
  
    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },
  
    courseReport(courseName) {
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);
  
      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);
  
        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;
  
        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  }
};
const school = newSchool();

let foo = createStudent('foo', '3rd');
school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo,'Advanced Math', 90 );
console.log(foo.listCourses());
school.getReportCard(foo);