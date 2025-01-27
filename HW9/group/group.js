const students = [
    { name: 'Sasha', grade: 90 },
    { name: 'Nikita', grade: 90 },
    { name: 'Yan', grade: 90 },
    { name: 'Illia', grade: 85 }
  ];

const groupedByGrade = groupArray(students, student => student.grade);

function groupArray(students, filterGrade) {
    const result = {};
  
    for (const item of students) {
      const key = filterGrade(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    }
  
    return result;
  };
  
  console.log(groupedByGrade);