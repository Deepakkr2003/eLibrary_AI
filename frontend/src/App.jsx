import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InsideSubject from './components/InsideSubject/InsideSubject';

// CSE Components
import SubjectForCSE1 from './components/SubjectForCSE/SubjectForCSE1';
import SubjectForCSE2 from './components/SubjectForCSE/SubjectForCSE2';
import SubjectForCSE3 from './components/SubjectForCSE/SubjectForCSE3';
import SubjectForCSE4 from './components/SubjectForCSE/SubjectForCSE4';
import SubjectForCSE5 from './components/SubjectForCSE/SubjectForCSE5';
import SubjectForCSE6 from './components/SubjectForCSE/SubjectForCSE6';
import SubjectForCSE7 from './components/SubjectForCSE/SubjectForCSE7';
import SubjectForCSE8 from './components/SubjectForCSE/SubjectForCSE8';

// ECE Components
import SubjectForECE1 from './components/SubjectForECE/SubjectForECE1';
import SubjectForECE2 from './components/SubjectForECE/SubjectForECE2';
import SubjectForECE3 from './components/SubjectForECE/SubjectForECE3';
import SubjectForECE4 from './components/SubjectForECE/SubjectForECE4';
import SubjectForECE5 from './components/SubjectForECE/SubjectForECE5';
import SubjectForECE6 from './components/SubjectForECE/SubjectForECE6';
import SubjectForECE7 from './components/SubjectForECE/SubjectForECE7';
import SubjectForECE8 from './components/SubjectForECE/SubjectForECE8';

// Civil Components
import SubjectForCivil1 from './components/SubjectForCivil/SubjectForCivil1';
import SubjectForCivil2 from './components/SubjectForCivil/SubjectForCivil2';
import SubjectForCivil3 from './components/SubjectForCivil/SubjectForCivil3';
import SubjectForCivil4 from './components/SubjectForCivil/SubjectForCivil4';
import SubjectForCivil5 from './components/SubjectForCivil/SubjectForCivil5';
import SubjectForCivil6 from './components/SubjectForCivil/SubjectForCivil6';
import SubjectForCivil7 from './components/SubjectForCivil/SubjectForCivil7';
import SubjectForCivil8 from './components/SubjectForCivil/SubjectForCivil8';

// IT Components
import SubjectForIT1 from './components/SubjectForIT/SubjectForIT1';
import SubjectForIT2 from './components/SubjectForIT/SubjectForIT2';
import SubjectForIT3 from './components/SubjectForIT/SubjectForIT3';
import SubjectForIT4 from './components/SubjectForIT/SubjectForIT4';
import SubjectForIT5 from './components/SubjectForIT/SubjectForIT5';
import SubjectForIT6 from './components/SubjectForIT/SubjectForIT6';
import SubjectForIT7 from './components/SubjectForIT/SubjectForIT7';
import SubjectForIT8 from './components/SubjectForIT/SubjectForIT8';

// Electrical Components
import SubjectForElectrical1 from './components/SubjectForElectrical/SubjectForElectrical1';
import SubjectForElectrical2 from './components/SubjectForElectrical/SubjectForElectrical2';
import SubjectForElectrical3 from './components/SubjectForElectrical/SubjectForElectrical3';
import SubjectForElectrical4 from './components/SubjectForElectrical/SubjectForElectrical4';
import SubjectForElectrical5 from './components/SubjectForElectrical/SubjectForElectrical5';
import SubjectForElectrical6 from './components/SubjectForElectrical/SubjectForElectrical6';
import SubjectForElectrical7 from './components/SubjectForElectrical/SubjectForElectrical7';
import SubjectForElectrical8 from './components/SubjectForElectrical/SubjectForElectrical8';

// Mechanical Components
import SubjectForMechanical1 from './components/SubjectForMechanical/SubjectForMech1'
import SubjectForMechanical2 from './components/SubjectForMechanical/SubjectForMech2';
import SubjectForMechanical3 from './components/SubjectForMechanical/SubjectForMech3';
import SubjectForMechanical4 from './components/SubjectForMechanical/SubjectForMech4';
import SubjectForMechanical5 from './components/SubjectForMechanical/SubjectForMech5';
import SubjectForMechanical6 from './components/SubjectForMechanical/SubjectForMech6';
import SubjectForMechanical7 from './components/SubjectForMechanical/SubjectForMech7';
import SubjectForMechanical8 from './components/SubjectForMechanical/SubjectForMech8';


import Login from './Auth/Login';
import Signup from './Auth/Signup';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home />} />
        
        {/* CSE Semesters */}
          <Route path="/cse/sem1" element={<SubjectForCSE1 />} />
          <Route path="/cse/sem2" element={<SubjectForCSE2 />} />
          <Route path="/cse/sem3" element={<SubjectForCSE3 />} />
          <Route path="/cse/sem4" element={<SubjectForCSE4 />} />
          <Route path="/cse/sem5" element={<SubjectForCSE5 />} />
          <Route path="/cse/sem6" element={<SubjectForCSE6 />} />
          <Route path="/cse/sem7" element={<SubjectForCSE7 />} />
          <Route path="/cse/sem8" element={<SubjectForCSE8 />} />

          {/* ECE Semesters */}
          <Route path="/ece/sem1" element={<SubjectForECE1 />} />
          <Route path="/ece/sem2" element={<SubjectForECE2 />} />
          <Route path="/ece/sem3" element={<SubjectForECE3 />} />
          <Route path="/ece/sem4" element={<SubjectForECE4 />} />
          <Route path="/ece/sem5" element={<SubjectForECE5 />} />
          <Route path="/ece/sem6" element={<SubjectForECE6 />} />
          <Route path="/ece/sem7" element={<SubjectForECE7 />} />
          <Route path="/ece/sem8" element={<SubjectForECE8 />} />

          {/* Civil Semesters */}
          <Route path="/civil/sem1" element={<SubjectForCivil1 />} />
          <Route path="/civil/sem2" element={<SubjectForCivil2 />} />
          <Route path="/civil/sem3" element={<SubjectForCivil3 />} />
          <Route path="/civil/sem4" element={<SubjectForCivil4 />} />
          <Route path="/civil/sem5" element={<SubjectForCivil5 />} />
          <Route path="/civil/sem6" element={<SubjectForCivil6 />} />
          <Route path="/civil/sem7" element={<SubjectForCivil7 />} />
          <Route path="/civil/sem8" element={<SubjectForCivil8 />} />

          {/* IT Semesters */}
          <Route path="/it/sem1" element={<SubjectForIT1 />} />
          <Route path="/it/sem2" element={<SubjectForIT2 />} />
          <Route path="/it/sem3" element={<SubjectForIT3 />} />
          <Route path="/it/sem4" element={<SubjectForIT4 />} />
          <Route path="/it/sem5" element={<SubjectForIT5 />} />
          <Route path="/it/sem6" element={<SubjectForIT6 />} />
          <Route path="/it/sem7" element={<SubjectForIT7 />} />
          <Route path="/it/sem8" element={<SubjectForIT8 />} />

          {/* Electrical Semesters */}
          <Route path="/electrical/sem1" element={<SubjectForElectrical1 />} />
          <Route path="/electrical/sem2" element={<SubjectForElectrical2 />} />
          <Route path="/electrical/sem3" element={<SubjectForElectrical3 />} />
          <Route path="/electrical/sem4" element={<SubjectForElectrical4 />} />
          <Route path="/electrical/sem5" element={<SubjectForElectrical5 />} />
          <Route path="/electrical/sem6" element={<SubjectForElectrical6 />} />
          <Route path="/electrical/sem7" element={<SubjectForElectrical7 />} />
          <Route path="/electrical/sem8" element={<SubjectForElectrical8 />} />

          {/* Mechanical Semesters */}
          <Route path="/mechanical/sem1" element={<SubjectForMechanical1 />} />
          <Route path="/mechanical/sem2" element={<SubjectForMechanical2 />} />
          <Route path="/mechanical/sem3" element={<SubjectForMechanical3 />} />
          <Route path="/mechanical/sem4" element={<SubjectForMechanical4 />} />
          <Route path="/mechanical/sem5" element={<SubjectForMechanical5 />} />
          <Route path="/mechanical/sem6" element={<SubjectForMechanical6 />} />
          <Route path="/mechanical/sem7" element={<SubjectForMechanical7 />} />
          <Route path="/mechanical/sem8" element={<SubjectForMechanical8 />} />


        {/* Inside subject dynamic route */}
        <Route path="/:branch/:semester/:subject" element={<InsideSubject />} />

      </Routes>
    </Router>
  );
}

export default App;
