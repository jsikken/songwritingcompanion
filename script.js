document.addEventListener('DOMContentLoaded', function() {
    const majorKeys = ["C maj", "G maj", "D maj", "A maj", "E maj", "B maj", "F# maj", "C# maj", "Ab maj", "Eb maj", "Bb maj", "F maj"];
    const minorKeys = ["A min", "E min", "B min", "F# min", "C# min", "G# min", "D# min", "A# min", "F min", "C min", "G min", "D min"];
    const majorNotes = {
        "C maj": ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"],
        "G maj": ["G1", "A1", "B1", "C2", "D2", "E2", "F#2", "G2"],
        "D maj": ["D1", "E1", "F#1", "G1", "A1", "B1", "C#2", "D2"],
        "A maj": ["A1", "B1", "C#2", "D2", "E2", "F#2", "G#2", "A2"],
        "E maj": ["E1", "F#1", "G#1", "A1", "B1", "C#2", "D#2", "E2"],
        "B maj": ["B1", "C#2", "D#2", "E2", "F#2", "G#2", "A#2", "B2"],
        "F# maj": ["F#1", "G#1", "A#1", "B1", "C#2", "D#2", "E#2", "F#2"],
        "C# maj": ["C#1", "D#1", "E#1", "F#1", "G#1", "A#1", "B#1", "C#2"],
        "Ab maj": ["G#1", "A#1", "C2", "C#2", "D#2", "F2", "G2", "G#2"],
        "Eb maj": ["D#1", "F1", "G1", "G#1", "A#1", "C2", "D2", "D#2"],
        "Bb maj": ["A#1", "C2", "D2", "D#2", "F2", "G2", "A2", "A#2"],
        "F maj": ["F1", "G1", "A1", "A#1", "C2", "D2", "E2", "F2"]
    };
    const minorNotes = {
        "A min": ["A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2"],
        "E min": ["E1", "F#1", "G1", "A1", "B1", "C2", "D2", "E2"],
        "B min": ["B1", "C#2", "D2", "E2", "F#2", "G2", "A2", "B2"],
        "F# min": ["F#1", "G#1", "A1", "B1", "C#2", "D2", "E2", "F#2"],
        "C# min": ["C#1", "D#1", "E1", "F#1", "G#1", "A1", "B1", "C#2"],
        "G# min": ["G#1", "A#1", "B1", "C#2", "D#2", "E2", "F#2", "G#2"],
        "D# min": ["D#1", "E#1", "F#1", "G#1", "A#1", "B1", "C#2", "D#2"],
        "A# min": ["A#1", "B#1", "C#2", "D#2", "E#2", "F#2", "G#2", "A#2"],
        "F min": ["F1", "G1", "G#1", "A#1", "C2", "C#2", "D#2", "F2"],
        "C min": ["C1", "D1", "D#1", "F1", "G1", "G#1", "A#1", "C2"],
        "G min": ["G1", "A1", "A#1", "C2", "D2", "D#2", "F2", "G2"],
        "D min": ["D1", "E1", "F1", "G1", "A1", "A#1", "C2", "D2"]
    };

    const majorBox = document.getElementById('majorBox');
    const minorBox = document.getElementById('minorBox');
    const pianoRollMajors = document.getElementById('pianoRollMajors');
    const pianoRollMinors = document.getElementById('pianoRollMinors');
    const trackbar = document.getElementById('trackbar');
    const rhymeBox = document.getElementById('rhymeBox');
    const rhymeResults = document.getElementById('rhymeResults');
    const notepad = document.getElementById('notepad');
    const fileInput = document.getElementById('fileInput');

    function createPianoRoll(container, notes) {
        container.innerHTML = '';
        const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const whiteKeyOffsets = [0, 2, 4, 5, 7, 9, 11]; // Positions of white keys in an octave
        const blackKeyOffsets = [1, 3, 6, 8, 10]; // Positions of black keys in an octave
        let whiteKeyIndex = 0;
        for (let i = 0; i < 25; i++) { // Limit to 25 keys (C1 to C3)
            let noteName = noteNames[i % 12] + Math.floor(i / 12 + 1);
            const key = document.createElement('div');
            key.classList.add('piano-key');
            if (blackKeyOffsets.includes(i % 12)) {
                key.classList.add('black-key');
                key.style.left = `${whiteKeyIndex * 20 - 6}px`;
            } else {
                key.classList.add('white-key');
                whiteKeyIndex++;
            }
            if (notes.includes(noteName)) {
                key.classList.add('highlighted');
            }
            const label = document.createElement('div');
            label.classList.add('note-label');
            if (noteName === "B#1" || noteName === "B#2") {
                label.textContent = "B#";
                noteName = noteName.replace("B#", "C");
            } else if (noteName === "E#1" || noteName === "E#2") {
                label.textContent = "E#";
                noteName = noteName.replace("E#", "F");
            } else if (noteName === "A#1" || noteName === "A#2") {
                label.textContent = "A#";
                noteName = noteName.replace("A#", "Bb");
            } else if (noteName === "D#1" || noteName === "D#2") {
                label.textContent = "D#";
                noteName = noteName.replace("D#", "Eb");
            } else if (noteName === "G#1" || noteName === "G#2") {
                label.textContent = "G#";
                noteName = noteName.replace("G#", "Ab");
            } else {
                label.textContent = noteName;
            }
            if (key.classList.contains('black-key') && key.classList.contains('highlighted')) {
                label.style.color = 'white';
            }
            key.appendChild(label);
            container.appendChild(key);
        }
    }

    function updateTextBoxes(index) {
        majorBox.value = majorKeys[index];
        minorBox.value = minorKeys[index];
        createPianoRoll(pianoRollMajors, majorNotes[majorKeys[index]]);
        createPianoRoll(pianoRollMinors, minorNotes[minorKeys[index]]);
    }

    trackbar.addEventListener('input', function() {
        updateTextBoxes(trackbar.value);
    });

    // Initialiseer de piano rolls met de eerste toonsoort
    updateTextBoxes(0);

    // Functie om rijmwoorden op te halen en weer te geven
    function fetchRhymes(word) {
        if (word.trim() === '') {
            rhymeResults.innerHTML = '';
            return;
        }
        fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
            .then(response => response.json())
            .then(data => {
                rhymeResults.innerHTML = '';
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add('rhyme-word');
                    div.textContent = item.word;
                    rhymeResults.appendChild(div);
                });
            });
    }

    rhymeBox.addEventListener('input', function() {
        fetchRhymes(rhymeBox.value);
    });

    function importFile() {
        fileInput.click();
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const fileContent = e.target.result;
                    const titleMarker = '---TITLE---';
                    const contentMarker = '---CONTENT---';
                    const titleStart = fileContent.indexOf(titleMarker) + titleMarker.length;
                    const contentStart = fileContent.indexOf(contentMarker) + contentMarker.length;
                    const title = fileContent.substring(titleStart, fileContent.indexOf(contentMarker)).trim();
                    const content = fileContent.substring(contentStart).trim();
                    document.getElementById('titleBox').value = title;
                    notepad.value = content;
                };
                reader.readAsText(file);
            }
        });
    }

    function saveFile() {
        const content = notepad.value;
        const title = document.getElementById('titleBox').value.trim();
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const fileName = title ? `${title}-${date}.txt` : `notes-${date}.txt`;
        const fileContent = `---TITLE---\n${title}\n---LYRICS/NOTES---\n${content}`;
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    window.importFile = importFile;
    window.saveFile = saveFile;
});
