document.addEventListener('DOMContentLoaded', function() {
    const majorKeys = ["C maj", "G maj", "D maj", "A maj", "E maj", "B maj", "F# maj", "C# maj", "Ab maj", "Eb maj", "Bb maj", "F maj"];
    const minorKeys = ["A min", "E min", "B min", "F# min", "C# min", "G# min", "D# min", "A# min", "F min", "C min", "G min", "D min"];
    const phrygianKeys = ["C Phrygian", "G Phrygian", "D Phrygian", "A Phrygian", "E Phrygian", "B Phrygian", "F# Phrygian", "C# Phrygian", "Ab Phrygian", "Eb Phrygian", "Bb Phrygian", "F Phrygian"];

    const majorNotes = {
        "C maj": ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"],
        "G maj": ["G1", "A1", "B1", "C2", "D2", "E2", "F#2", "G2"],
        "D maj": ["D1", "E1", "F#1", "G1", "A1", "B1", "C#2", "D2"],
        "A maj": ["A1", "B1", "C#2", "D2", "E2", "F#2", "G#2", "A2"],
        "E maj": ["E1", "F#1", "G#1", "A1", "B1", "C#2", "D#2", "E2"],
        "B maj": ["B1", "C#2", "D#2", "E2", "F#2", "G#2", "A#2", "B2"],
        "F# maj": ["F#1", "G#1", "A#1", "B1", "C#2", "D#2", "E#2", "F#2"],
        "C# maj": ["C#1", "D#1", "E#1", "F#1", "G#1", "A#1", "B#1", "C#2"],
        "Ab maj": ["Ab1", "Bb1", "C2", "Db2", "Eb2", "F2", "G2", "Ab2"],
        "Eb maj": ["Eb1", "F1", "G1", "Ab1", "Bb1", "C2", "D2", "Eb2"],
        "Bb maj": ["Bb1", "C2", "D2", "Eb2", "F2", "G2", "A2", "Bb2"],
        "F maj": ["F1", "G1", "A1", "Bb1", "C2", "D2", "E2", "F2"]
    };

    const minorNotes = {
        "A min": ["A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2"],
        "E min": ["E1", "F#1", "G1", "A1", "B1", "C2", "D2", "E2"],
        "B min": ["B1", "C#2", "D2", "E2", "F#2", "G2", "A2", "B2"],
        "F# min": ["F#1", "G#1", "A1", "B1", "C#2", "D2", "E2", "F#2"],
        "C# min": ["C#1", "D#1", "E1", "F#1", "G#1", "A1", "B1", "C#2"],
        "G# min": ["G#1", "A#1", "B1", "C#2", "D#2", "E2", "F#2", "G#2"],
        "D# min": ["D#1", "E1", "F#1", "G#1", "A#1", "B1", "C#2", "D#2"],
        "A# min": ["A#1", "B1", "C#2", "D#2", "E2", "F#2", "G#2", "A#2"],
        "F min": ["F1", "G1", "Ab1", "Bb1", "C2", "Db2", "Eb2", "F2"],
        "C min": ["C1", "D1", "Eb1", "F1", "G1", "Ab1", "Bb1", "C2"],
        "G min": ["G1", "A1", "Bb1", "C2", "D2", "Eb2", "F2", "G2"],
        "D min": ["D1", "E1", "F1", "G1", "A1", "Bb1", "C2", "D2"]
    };

    const phrygianNotes = {
        "C Phrygian": ["C1", "Db1", "Eb1", "F1", "G1", "Ab1", "Bb1", "C2"],
        "G Phrygian": ["G1", "Ab1", "Bb1", "C2", "D2", "Eb2", "F2", "G2"],
        "D Phrygian": ["D1", "Eb1", "F1", "G1", "A1", "Bb1", "C2", "D2"],
        "A Phrygian": ["A1", "Bb1", "C2", "D2", "E2", "F2", "G2", "A2"],
        "E Phrygian": ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2"],
        "B Phrygian": ["B1", "C2", "D2", "E2", "F#2", "G2", "A2", "B2"],
        "F# Phrygian": ["F#1", "G1", "A1", "B1", "C#2", "D2", "E2", "F#2"],
        "C# Phrygian": ["C#1", "D1", "E1", "F#1", "G#1", "A1", "B1", "C#2"],
        "Ab Phrygian": ["Ab1", "Bb1", "C2", "Db2", "Eb2", "F2", "Gb2", "Ab2"],
        "Eb Phrygian": ["Eb1", "F1", "G1", "Ab1", "Bb1", "C2", "Db2", "Eb2"],
        "Bb Phrygian": ["Bb1", "C2", "D2", "Eb2", "F2", "G2", "Ab2", "Bb2"],
        "F Phrygian": ["F1", "Gb1", "Ab1", "Bb1", "C2", "D2", "Eb2", "F2"]
    };

    const majorBox = document.getElementById('majorBox');
    const minorBox = document.getElementById('minorBox');
    const majorLabel = document.querySelector('label[for="majorBox"]');
    const minorLabel = document.querySelector('label[for="minorBox"]');
    const pianoRollMajors = document.getElementById('pianoRollMajors');
    const pianoRollMinors = document.getElementById('pianoRollMinors');
    const trackbar = document.getElementById('trackbar');
    const rhymeBox = document.getElementById('rhymeBox');
    const rhymeResults = document.getElementById('rhymeResults');
    const fileInput = document.getElementById('fileInput');
    const thesaurusResults = document.getElementById('thesaurusResults');
    const thesaurusWord = document.getElementById('thesaurusWord');
    const generateButton = document.getElementById('generateButton');

    function createPianoRoll(container, notes) {
    container.innerHTML = '';
    const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const whiteKeyOffsets = [0, 2, 4, 5, 7, 9, 11]; // Posities van witte toetsen in een octaaf
    const blackKeyOffsets = [1, 3, 6, 8, 10]; // Posities van zwarte toetsen in een octaaf
    let whiteKeyIndex = 0;

    for (let i = 0; i < 25; i++) { // Beperk tot 25 toetsen (C1 tot C3)
        let noteName = noteNames[i % 12] + Math.floor(i / 12 + 1);
        const key = document.createElement('div');
        key.classList.add('piano-key');

        if (blackKeyOffsets.includes(i % 12)) {
            key.classList.add('black-key');
            key.style.left = `${(whiteKeyIndex - 1) * 20 + 15}px`; // Pas positie aan ten opzichte van de vorige witte toets
        } else {
            key.classList.add('white-key');
            key.style.left = `${whiteKeyIndex * 20}px`;
            whiteKeyIndex++;
        }

        if (notes.includes(noteName)) {
            key.classList.add('highlighted');
        }

        const label = document.createElement('div');
        label.classList.add('note-label');
        label.textContent = noteName;

        if (key.classList.contains('black-key') && key.classList.contains('highlighted')) {
            label.style.color = 'white';
        }

        key.appendChild(label);
        container.appendChild(key);
    }
}

    majorBox.addEventListener('change', function() {
        const selectedMajorKey = majorBox.value;
        pianoRollMajors.innerHTML = '';
        const majorPianoRoll = createPianoRoll(majorNotes[selectedMajorKey]);
        pianoRollMajors.appendChild(majorPianoRoll);
    });

    minorBox.addEventListener('change', function() {
        const selectedMinorKey = minorBox.value;
        pianoRollMinors.innerHTML = '';
        const minorPianoRoll = createPianoRoll(minorNotes[selectedMinorKey]);
        pianoRollMinors.appendChild(minorPianoRoll);
    });

    trackbar.addEventListener('input', function() {
        const position = trackbar.value;
        majorLabel.style.marginLeft = position + 'px';
        minorLabel.style.marginLeft = (400 - position) + 'px';
    });

    rhymeBox.addEventListener('input', function() {
        const word = rhymeBox.value;
        fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
            .then(response => response.json())
            .then(data => {
                rhymeResults.innerHTML = '';
                data.forEach(item => {
                    const result = document.createElement('div');
                    result.innerText = item.word;
                    rhymeResults.appendChild(result);
                });
            })
            .catch(error => console.error('Error fetching rhymes:', error));
    });

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            thesaurusResults.innerHTML = content;
        };
        reader.readAsText(file);
    });

    generateButton.addEventListener('click', function() {
        const word = thesaurusWord.value;
        fetch(`https://api.datamuse.com/words?ml=${word}`)
            .then(response => response.json())
            .then(data => {
                thesaurusResults.innerHTML = '';
                data.forEach(item => {
                    const result = document.createElement('div');
                    result.innerText = item.word;
                    thesaurusResults.appendChild(result);
                });
            })
            .catch(error => console.error('Error fetching synonyms:', error));
    });

    majorKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.text = key;
        majorBox.add(option);
    });

    minorKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.text = key;
        minorBox.add(option);
    });

    phrygianKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.text = key;
        majorBox.add(option);
    });
});
