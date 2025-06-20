/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// CSE Sem1
import basicElectronicsPdf from '../../Resourses/CSE/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf';
import engineeringPhysicsCSESem1 from '../../Resourses/CSE/Semester1/Engineering Physics/Book/Engineering_Physics.pdf';
import engineeringMathematicsICSESem1 from '../../Resourses/CSE/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf'
import workshopCSEsem1 from '../../Resourses/CSE/Semester1/Workshop/Book/Workshop.pdf'
import programmingForProblemSolvingCSESem1 from '../../Resourses/CSE/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf' // Added based on subject list



// CSE sem2
import communicativeEnglishCSESem2 from '../../Resourses/CSE/Semester2/Communicative English/Book/Communicative_English.pdf';
import engineeringChemistryCSESem2 from '../../Resourses/CSE/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf'; // Added based on subject list
import introductionToWebDesignCSESem2 from '../../Resourses/CSE/Semester2/Introduction To Web Design/Book/Introduction_to_Web_Design.pdf'; // Added based on subject list
import pythonProgrammingCSESem2 from '../../Resourses/CSE/Semester2/Python Programming/Book/Python_Programming.pdf'; // Added based on subject list
import engineeringMathematicsIICSESem2 from '../../Resourses/CSE/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf'


// Civil sem1
import communicativeEnglishCivilSem1 from '../../Resourses/CIVIL/Semester1/Communicative English/Book/Communicative_English.pdf';
import engineeringChemistryCivilSem1 from '../../Resourses/CIVIL/Semester1/Engineering Chemistry/Book/Engineering_Chemistry.pdf'; // Added based on subject list
import engineeringGraphicsDesignCivilSem1 from '../../Resourses/CIVIL/Semester1/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf'; // Added based on subject list
import engineeringMathematicsICivilSem1 from '../../Resourses/CIVIL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf'; // Added based on subject list
import engineeringMechanicsCivilSem1 from '../../Resourses/CIVIL/Semester1/Engineering Mechanics/Book/Engineering_Mechanics.pdf'; // Added based on subject list

// Civil sem2
import buildingMaterialConstructionCivilSem2 from '../../Resourses/CIVIL/Semester2/Building Material & Construction Techniques/Book/Building_Material_&_Construction_Techniques.pdf'; // Added based on subject list
import elementsOfCivilEngineeringCivilSem2 from '../../Resourses/CIVIL/Semester2/Elements Of Civil Engineering/Book/Elements_of_Civil_Engineering.pdf';
import engineeringMathematicsIICivilSem2 from '../../Resourses/CIVIL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf'; // Added based on subject list
import engineeringPhysicsCivilSem2 from '../../Resourses/CIVIL/Semester2/Engineering Physics/Book/Engineering_Physics.pdf'; // Added based on subject list
import engineeringScienceSanitationCivilSem2 from '../../Resourses/CIVIL/Semester2/Engineering Science & Sanitation/Book/Engineering_Science_&_Sanitation.pdf'; // Added based on subject list
import programmingForProblemSolvingCivilSem2 from '../../Resourses/CIVIL/Semester2/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf'; // Added based on subject list


// ECE sem1
import basicElectronicsEceSem1 from '../../Resourses/ECE/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf';
import engineeringMathematicsIEceSem1 from '../../Resourses/ECE/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf'; // Added based on subject list
import engineeringPhysicsEceSem1 from '../../Resourses/ECE/Semester1/Engineering Physics/Book/Engineering_Physics.pdf';
import workshopEceSem1 from '../../Resourses/ECE/Semester1/Workshop/Book/Workshop.pdf'; // Added based on subject list
import programmingForProblemSolvingEceSem1 from '../../Resourses/ECE/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf'; // Added based on subject list

// ECE sem2
import communicativeEnglishEceSem2 from '../../Resourses/ECE/Semester2/Communicative English/Book/Communicative_English.pdf';
import basicElectronicsEceSem2 from '../../Resourses/ECE/Semester2/Basic Electronics/Book/Basic_Electronics.pdf'; // Added based on subject list
import engineeringChemistryEceSem2 from '../../Resourses/ECE/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf'; // Added based on subject list
import engineeringGraphicsDesignEceSem2 from '../../Resourses/ECE/Semester2/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf'; // Added based on subject list
import engineeringMathematicsIIEceSem2 from '../../Resourses/ECE/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_I.pdf'; // Added based on subject list


// EE sem1
import basicElectronicsEeSem1 from '../../Resourses/ELECTRICAL/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf';
import engineeringMathematicsIEeSem1 from '../../Resourses/ELECTRICAL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf'; // Added based on subject list
import engineeringPhysicsEeSem1 from '../../Resourses/ELECTRICAL/Semester1/Engineering Physics/Book/Engineering_Physics.pdf';
import workshopEeSem1 from '../../Resourses/ELECTRICAL/Semester1/Workshop/Book/Workshop.pdf'; // Added based on subject list
import programmingForProblemSolvingEeSem1 from '../../Resourses/ELECTRICAL/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf'; // Added based on subject list

// EE sem2
import communicativeEnglishEeSem2 from '../../Resourses/ELECTRICAL/Semester2/Communicative English/Book/Communicative_English.pdf';
import engineeringChemistryEeSem2 from '../../Resourses/ELECTRICAL/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf'; // Added based on subject list
import engineeringGraphicsDesignEeSem2 from '../../Resourses/ELECTRICAL/Semester2/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf'; // Added based on subject list
import engineeringMathematicsIIEeSem2 from '../../Resourses/ELECTRICAL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf'; // Added based on subject list


// IT sem1
import basicElectronicsItSem1 from '../../Resourses/IT/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf';
import engineeringMathematicsIItSem1 from '../../Resourses/IT/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf'; // Added based on subject list
import engineeringPhysicsItSem1 from '../../Resourses/IT/Semester1/Engineering Physics/Book/Engineering_Physics.pdf';
import workshopItSem1 from '../../Resourses/IT/Semester1/Workshop/Book/Workshop.pdf'
import programmingForProblemSolvingItSem1 from '../../Resourses/IT/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf'; // Added based on subject list

// IT sem2
import communicativeEnglishItSem2 from '../../Resourses/IT/Semester2/Communicative English/Book/Communicative_English.pdf';
import engineeringChemistryItSem2 from '../../Resourses/IT/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf'; // Added based on subject list
import engineeringMathematicsIIItSem2 from '../../Resourses/IT/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf'; // Added based on subject list
import introductionToWebDesignItSem2 from '../../Resourses/IT/Semester2/Introduction To Web Design/Book/Introduction_to_Web_Design.pdf'; // Added based on subject list
import pythonProgrammingItSem2 from '../../Resourses/IT/Semester2/Python Programming/Book/Python_Programming.pdf'; // Added based on subject list

// MECH Sem1
import communicativeEnglishMechSem1 from '../../Resourses/MECHANICAL/Semester1/Communicative English/Book/Communicative_English.pdf';
import engineeringChemistryMechSem1 from '../../Resourses/MECHANICAL/Semester1/Engineering Chemistry/Book/Engineering_Chemistry.pdf';
import engineeringGraphicsDesignMechSem1 from '../../Resourses/MECHANICAL/Semester1/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf';
import engineeringMathematicsIMechSem1 from '../../Resourses/MECHANICAL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf';
import basicElectricalEngineeringMechSem1 from '../../Resourses/MECHANICAL/Semester1/Basic Electrical Engineering/Book/Basic_Electrical_Engineering.pdf';

// MECH sem2
import elementsOfMechanicalEngineeringMechSem2 from '../../Resourses/MECHANICAL/Semester2/Elements Of Mechanical Engineering/Book/Elements_of_Mechanical_Engineering.pdf';
import engineeringMathematicsIIMechSem2 from '../../Resourses/MECHANICAL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf';
import engineeringPhysicsMechSem2 from '../../Resourses/MECHANICAL/Semester2/Engineering Physics/Book/Engineering_Physics.pdf';
import programmingForProblemSolvingMechSem2 from '../../Resourses/MECHANICAL/Semester2/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf';
import workshopMechSem2 from '../../Resourses/MECHANICAL/Semester2/Workshop/Book/Workshop.pdf';


function InsideSubject() {
  const { branch, semester, subject } = useParams();

  const subjectDisplayName = subject
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const getSubjectFolderPath = (subjectParam) => {
    if (subjectParam === 'basic-electronics-engineering') {
      return 'Basic Electronics Engineering';
    }
    if (subjectParam === 'communicative-english') {
      return 'Communicative English';
    }
    let formattedName = subjectParam
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    return formattedName;
  };

  const subjectFolder = getSubjectFolderPath(subject);

  const [selectedPDF, setSelectedPDF] = useState(null);
  const [books, setBooks] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [noMaterialsFound, setNoMaterialsFound] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const capitalizedBranch = branch.toUpperCase();

    let capitalizedSemester;
    if (semester.startsWith('sem')) {
      capitalizedSemester = 'Semester' + semester.slice(3);
    } else {
      capitalizedSemester = 'Semester' + semester;
    }
    const subjectMaterialsMap = {

// Civil

      'CIVIL': {
        'Semester1': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishCivilSem1 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryCivilSem1 },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: engineeringGraphicsDesignCivilSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsICivilSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mechanics': {
            books: [
              { title: "Engineering Mechanics", fileName: engineeringMechanicsCivilSem1 },
            ],
            pyqs: [],
          },
        },


        'Semester2': {
          'Building Material & Construction Techniques': {
            books: [
              { title: "Building Material & Construction Techniques", fileName: buildingMaterialConstructionCivilSem2 },
            ],
            pyqs: [],
          },
          'Elements Of Civil Engineering': {
            books: [
              { title: "Elements of Civil Engineering", fileName: elementsOfCivilEngineeringCivilSem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIICivilSem2 },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: engineeringPhysicsCivilSem2 },
            ],
            pyqs: [],
          },
          'Engineering Science & Sanitation': {
            books: [
              { title: "Engineering Science & Sanitation", fileName: engineeringScienceSanitationCivilSem2 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingCivilSem2 },
            ],
            pyqs: [],
          },
        },

        // 'Semester3': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester4': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester5': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester6': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester7': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester8': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },
      },

      // Cse
    
      'CSE': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: basicElectronicsPdf },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsICSESem1},
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: engineeringPhysicsCSESem1 },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: workshopCSEsem1 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingCSESem1 },
            ],
            pyqs: [],
          },
        },


        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishCSESem2 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryCSESem2 },
            ],
            pyqs: [],
          },
          'Introduction To Web Design': {
            books: [
              { title: "Introduction To Web Design", fileName: introductionToWebDesignCSESem2 },
            ],
            pyqs: [],
          },
          'Python Programming': {
            books: [
              { title: "Python Programming", fileName: pythonProgrammingCSESem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIICSESem2 },
            ],
            pyqs: [],
          },
        },

        // 'Semester3': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester4': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester5': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester6': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester7': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester8': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },
      },

      // ECE

      'ECE': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: basicElectronicsEceSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsIEceSem1 },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: engineeringPhysicsEceSem1 },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: workshopEceSem1 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingEceSem1 },
            ],
            pyqs: [],
          },
        },

        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishEceSem2 },
            ],
            pyqs: [],
          },
          'Basic Electronics': {
            books: [
              { title: "Basic Electronics", fileName: basicElectronicsEceSem2 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryEceSem2 },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: engineeringGraphicsDesignEceSem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIIEceSem2 },
            ],
            pyqs: [],
          },
        },

        // 'Semester3': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester4': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester5': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester6': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester7': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester8': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },
      },

      // EE

      'ELECTRICAL': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics Engineering", fileName: basicElectronicsEeSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsIEeSem1 },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics ", fileName: engineeringPhysicsEeSem1 },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: workshopEeSem1 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingEeSem1 },
            ],
            pyqs: [],
          },
        },


        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishEeSem2 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryEeSem2 },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: engineeringGraphicsDesignEeSem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIIEeSem2 },
            ],
            pyqs: [],
          },
        },

        // 'Semester3': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester4': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester5': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester6': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester7': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester8': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },
      },

      // IT

      'IT': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: basicElectronicsItSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsIItSem1 },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics ", fileName: engineeringPhysicsItSem1 },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: workshopItSem1 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingItSem1 },
            ],
            pyqs: [],
          },
        },


        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishItSem2 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryItSem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIIItSem2 },
            ],
            pyqs: [],
          },
          'Introduction To Web Design': {
            books: [
              { title: "Introduction To Web Design", fileName: introductionToWebDesignItSem2 },
            ],
            pyqs: [],
          },
          'Python Programming': {
            books: [
              { title: "Python Programming", fileName: pythonProgrammingItSem2 },
            ],
            pyqs: [],
          },
        },

      //   'Semester3': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },

      //   'Semester4': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },

      //   'Semester5': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },

      //   'Semester6': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },

      //   'Semester7': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },

      //   'Semester8': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },
      },

      // Mechanical

      'MECHANICAL': {
        'Semester1': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: communicativeEnglishMechSem1 },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: engineeringChemistryMechSem1 },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: engineeringGraphicsDesignMechSem1 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: engineeringMathematicsIMechSem1 },
            ],
            pyqs: [],
          },
          'Basic Electrical Engineering': {
            books: [
              { title: "Basic Electrical Engineering", fileName: basicElectricalEngineeringMechSem1 },
            ],
            pyqs: [],
          },
        },

        'Semester2': {
          'Elements Of Mechanical Engineering': {
            books: [
              { title: "Elements of Mechanical Engineering", fileName: elementsOfMechanicalEngineeringMechSem2 },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: engineeringMathematicsIIMechSem2 },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: engineeringPhysicsMechSem2 },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: programmingForProblemSolvingMechSem2 },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: workshopMechSem2 },
            ],
            pyqs: [],
          },
        },
      

        // 'Semester3': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester4': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester5': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester6': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

        // 'Semester7': {
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        //   'Communicative English': {
        //     books: [
              
        //     ],
        //     pyqs: [],
        //   },
        // },

      //   'Semester8': {
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //     'Communicative English': {
      //       books: [
              
      //       ],
      //       pyqs: [],
      //     },
      //   },
      },


      
  };










    let currentSubjectBooks = [];
    let currentSubjectPyqs = [];
    setNoMaterialsFound(false);

    if (subjectMaterialsMap[capitalizedBranch] &&
        subjectMaterialsMap[capitalizedBranch][capitalizedSemester] &&
        subjectMaterialsMap[capitalizedBranch][capitalizedSemester][subjectFolder]) {

      const materials = subjectMaterialsMap[capitalizedBranch][capitalizedSemester][subjectFolder];

      currentSubjectBooks = materials.books.map(book => ({
        title: book.title,
        link: book.fileName
      }));
      console.log(`Loaded books for ${subjectDisplayName} (Branch: ${capitalizedBranch}, Semester: ${capitalizedSemester}):`, currentSubjectBooks);

      currentSubjectPyqs = materials.pyqs.map(pyq => ({
        title: pyq.title,
        link: pyq.fileName
      }));
    }

    setBooks(currentSubjectBooks);
    setPyqs(currentSubjectPyqs);

  }, [branch, semester, subject, subjectFolder]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults("Please enter a keyword to search.");
      return;
    }

    setLoading(true);
    setSearchResults("");

    try {
      const res = await axios.post('http://localhost:8000/query', {
        prompt: searchQuery,
        model: 'llama-3.3-70b-versatile',
      });

      setSearchResults(res.data.response);
    } catch (error) {
      console.error("API Error:", error);
      setSearchResults("Error fetching response from AI. Ensure your local server is running at http://localhost:8000 and is configured to handle /query requests.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-6 rounded-lg font-inter">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-300 drop-shadow-lg">
        {subjectDisplayName}
      </h2>

      {noMaterialsFound && (
        <div className="bg-red-800 bg-opacity-50 border border-red-600 text-red-100 p-4 rounded-lg mb-8 text-center text-lg shadow-md">
          <p className="font-semibold">No materials found for this subject, semester, and branch combination.</p>
          <p className="text-sm mt-2">
            Please ensure the URL parameters (branch, semester, subject) are correct and match the data defined in the application.
            For example, if you are trying to view "Communicative English", the URL's semester segment should likely be "sem2" (e.g., `/cse/sem2/communicative-english`) or just "2" (e.g., `/cse/2/communicative-english`).
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-blue-500/50 transition duration-300 border border-gray-600">
          <h3 className="text-2xl font-semibold mb-6 text-blue-200 flex items-center">
            <span className="mr-3">📘</span> Books
          </h3>
          <ul className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            {books.length > 0 ? (
              books.map((book, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md hover:bg-gray-600 transition duration-200">
                  <button
                    onClick={() => {
                      console.log("Attempting to set PDF:", book.link);
                      setSelectedPDF(book.link);
                    }}
                    className="text-blue-400 hover:underline hover:text-blue-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                  >
                    {book.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No books available for this subject yet.</li>
            )}
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-purple-500/50 transition duration-300 border border-gray-600">
          <h3 className="text-2xl font-semibold mb-6 text-purple-200 flex items-center">
            <span className="mr-3">📄</span> Previous Year Questions
          </h3>
          <ul className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            {pyqs.length > 0 ? (
              pyqs.map((pyq, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md hover:bg-gray-600 transition duration-200">
                  <button
                    onClick={() => setSelectedPDF(pyq.link)}
                    className="text-purple-400 hover:underline hover:text-purple-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-sm"
                  >
                    {pyq.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No PYQs available for this subject yet.</li>
            )}
          </ul>
        </div>
      </div>

      {selectedPDF && (
        <div className="mt-12 flex flex-col lg:flex-row gap-6 mb-12">
          <div className="bg-gray-900 p-4 rounded-lg w-full lg:w-3/4 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">📄 Viewing PDF</h3>
            <iframe
              key={selectedPDF}
              src={selectedPDF}
              title="PDF Viewer"
              className="w-full h-[500px] border border-gray-700 rounded-md shadow-inner"
              style={{ minHeight: '400px' }}
            ></iframe>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg w-full lg:w-1/4 flex flex-col items-center gap-4 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-center text-yellow-300">🔍 Search Doubts or Keywords</h3>
           <textarea
  placeholder="Search your question..."
  className="h-50 border border-gray-600 rounded-md px-4 py-2 w-full text-white bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200 resize-none overflow-y-auto"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  rows={4}
/>



            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              disabled={loading || searchQuery.trim() === ""}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>

            {searchResults && (
              <div className="mt-2 p-4 border border-green-500 rounded-lg bg-green-900/30 text-white w-full text-center whitespace-pre-wrap overflow-auto max-h-64 custom-scrollbar">
                {searchResults}
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #60a5fa;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
}

export default InsideSubject;
