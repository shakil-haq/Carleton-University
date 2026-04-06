const semesterData = {
  fall24: [
    { crn: "30507", sub: "BIT", c: "1000", s: "A", t: "Mathematics I for NET", cam: "Main", g: "B", att: "0.500", earn: "0.500", gpa: "0.500", pts: "4.00" },
    { crn: "30520", sub: "BIT", c: "1400", s: "A", t: "Intro to Programming", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "32083", sub: "ECON", c: "1001", s: "C", t: "Intro to Microeconomics", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "34474", sub: "NET", c: "1001", s: "A", t: "Computer Tech Basics", cam: "Main", g: "B-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "3.50" },
    { crn: "34480", sub: "NET", c: "1002", s: "A", t: "Networking Fundamentals", cam: "Main", g: "C+", att: "0.500", earn: "0.500", gpa: "0.500", pts: "3.00" }
  ],
  winter25: [
    { crn: "10511", sub: "BIT", c: "1001", s: "A", t: "Mathematics II for NET", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "10517", sub: "BIT", c: "1006", s: "B", t: "Achieving Success", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "10518", sub: "BIT", c: "1007", s: "A", t: "Physics for NET", cam: "Main", g: "B-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "3.50" },
    { crn: "10528", sub: "BIT", c: "2000", s: "A", t: "Probability", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "14189", sub: "NET", c: "1006", s: "A", t: "Routing and Switching", cam: "Main", g: "A-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "5.00" }
  ],
  summer25: [
    { crn: "20828", sub: "BIT", c: "1400", s: "A", t: "Intro to Programming", cam: "Main", g: "B", att: "0.500", earn: "0.500", gpa: "0.500", pts: "4.00" },
    { crn: "21208", sub: "BIT", c: "2400", s: "A", t: "Intermediate Programming", cam: "Main", g: "C", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.50" }
  ],
  fall25: [
    { crn: "30505", sub: "BIT", c: "2001", s: "A", t: "Intro to Business", cam: "Main", g: "B-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "3.50" },
    { crn: "30774", sub: "CCDP", c: "2004", s: "C", t: "Comm Skills", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "34067", sub: "NET", c: "2000", s: "A", t: "Intermediate Networking", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "34071", sub: "NET", c: "2008", s: "A", t: "DevOps", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" },
    { crn: "34076", sub: "NET", c: "2010", s: "A", t: "Desktop Environments", cam: "Main", g: "C-", att: "0.500", earn: "0.500", gpa: "0.500", pts: "2.00" }
  ],
  winter26: [] // Empty
};

const selectionView = document.getElementById('selection-view');
const gradesView = document.getElementById('grades-view');
const tbody = document.getElementById('grades-tbody');
const termSelect = document.getElementById('termSelect');

// SUBMIT BUTTON LOGIC
document.getElementById('submitBtn').addEventListener('click', function() {
  const term = termSelect.value;
  if (!term) {
    alert("Please select a term");
    return;
  }

  const data = semesterData[term];
  
  if (data.length === 0) {
    alert("Winter 2026 grades are not yet available.");
    return;
  }

  // Switch Views
  selectionView.classList.add('hidden');
  gradesView.classList.remove('hidden');
  
  // Fill Table
  tbody.innerHTML = "";
  data.forEach(d => {
    const row = `<tr>
      <td>${d.crn}</td><td>${d.sub}</td><td>${d.c}</td><td>${d.s}</td>
      <td>${d.t}</td><td>${d.cam}</td><td>${d.g}</td><td>${d.att}</td>
      <td>${d.earn}</td><td>${d.gpa}</td><td>${d.pts}</td>
    </tr>`;
    tbody.insertAdjacentHTML('beforeend', row);
  });
});

// "SELECT ANOTHER TERM" LOGIC
document.getElementById('resetBtn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent page refresh
  
  // Switch Views back
  gradesView.classList.add('hidden');
  selectionView.classList.remove('hidden');
  
  // Reset dropdown to default
  termSelect.selectedIndex = 0;
});