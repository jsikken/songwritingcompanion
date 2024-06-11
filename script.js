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
        "D# min": ["D#1", "E#1", "F#1", "G#1", "A#1", "B1", "C#2", "D#2"],
        "A# min": ["A#1", "B#1", "C#2", "D#2", "E#2", "F#2", "G#2", "A#2"],
        "F min": ["F1", "G1", "Ab1", "Bb1", "C2", "Db2", "Eb2", "F2"],
        "C min": ["C1", "D1", "Eb1", "F1", "G1", "Ab1", "Bb1", "C2"],
        "G min": ["G1", "A1", "Bb1", "C2", "D2", "Eb2", "F2", "G2"],
        "D min": ["D1", "E1", "F1", "G1", "A1", "Bb1", "C2", "D2"]
    };

    const majorBox = document.getElementById('majorBox');
    const minorBox = document.getElementById('minorBox');
    const pianoRollMajors = document.getElementById('pianoRollMajors');
    const pianoRollMinors = document.getElementById('pianoRollMinors');
    const trackbar = document.getElementById('trackbar');

    function createPianoRoll(container, notes) {
        container.innerHTML = '';
        const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const blackKeyOffsets = [1, 3, 6, 8, 10]; // Positions of black keys in an octave
        for (let i = 0; i < 52; i++) {
            const noteName = noteNames[i % 12] + Math.floor(i / 12 + 1);
            const key = document.createElement('div');
            key.classList.add('piano-key');
            if (blackKeyOffsets.includes(i % 12)) {
                key.classList.add('black-key');
                key.style.left = `${(i - Math.floor(i / 12)) * 20 - 6}px`;
            } else {
                key.classList.add('white-key');
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
});
