    const students =[
      {
        name:"Beth", 
        age: 17,
        course: "Chemistry",
        score: 50
      },

      {
        name: "Samuel",
        age: 18,
        course: "Physics",
        score: 70
      },

      {
        name: "Stephen",
        age: 18,
        course: "Mathematics",
        score: 78
      },

      {
        name: "Penny",
        age: 18,
        course: "Biology",
        score: 63
      },

      {
        name: "Sandra",
        age:17,
        course: "English",
        score: 46

      }

    ]
       
      function getGrade(score){
        if(score>= 70){
          return "A"
        }
        else if(score>=60){
          return "B"
        }
        else if(score>=50){
          return "C"
        }
         else{
          return "F"
         }
          
      }
        
      function displayStudent(student){
                 const Grade = getGrade(student.score) 
                   student.grade = Grade;
         console.log( `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - grade ${student.grade}` )
      }
          
    

        students.forEach((student)=> {
          displayStudent(student)
        })
         const passedStudents= students.filter((student)=> student.score>=50).map((student)=>  {
         console.log(`${student.name}: ${student.grade}`)})
            
         const StudentNames = students.map((student)=> student.name)
           console.log(StudentNames)