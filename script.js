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

    const phrygianNotes = {
        "C Phrygian": ["C1", "Db1", "Eb1", "F1", "G1", "Ab1", "Bb1", "C2"],
        "G Phrygian": ["G1", "Ab1", "Bb1", "C2", "D2", "Eb2", "F2", "G2"],
        "D Phrygian": ["D1", "Eb1", "F1", "G1", "A1", "Bb1", "C2", "D2"],
        "A Phrygian": ["A1", "Bb1", "C2", "D2", "E2", "F2", "G2", "A2"],
        "E Phrygian": ["E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2"],
        "B Phrygian": ["B1", "C1", "D2", "E2", "F#2", "G2", "A2", "B2"],
        "F# Phrygian": ["F#1", "G1", "A1", "B1", "C#2", "D2", "E2", "F#2"],
        "C# Phrygian": ["C#1", "D1", "E1", "F#1", "G#1", "A1", "B1", "C#2"],
        "Ab Phrygian": ["Ab1", "A1", "C2", "Db2", "Eb2", "F2", "Gb2", "Ab2"],
        "Eb Phrygian": ["Eb1", "E1", "G1", "Ab1", "Bb1", "C2", "Db2", "Eb2"],
        "Bb Phrygian": ["Bb1", "B1", "D2", "Eb2", "F2", "G2", "Ab2", "Bb2"],
        "F Phrygian": ["F1", "Gb1", "A1", "Bb1", "C2", "D2", "Eb2", "F2"]
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
    const thesaurusBox = document.getElementById('thesaurusBox');
    const thesaurusResults = document.getElementById('thesaurusResults');
    const scaleType = document.getElementById('scaleType');
    const fileInput = document.getElementById('fileInput');
    const saveButton = document.getElementById('saveButton');
    const importButton = document.getElementById('importButton');
    const notepad = document.getElementById('notepad');

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

    function updateTextBoxes(index) {
        const selectedScaleType = scaleType.value;
        if (selectedScaleType === 'majorMinor') {
            majorLabel.style.display = 'block';
            majorBox.style.display = 'block';
            minorLabel.textContent = 'Minors';
            minorBox.value = minorKeys[index];
            majorBox.value = majorKeys[index];
            pianoRollMajors.style.display = 'block';
            createPianoRoll(pianoRollMajors, majorNotes[majorKeys[index]]);
            createPianoRoll(pianoRollMinors, minorNotes[minorKeys[index]]);
        } else if (selectedScaleType === 'phrygian') {
            majorLabel.style.display = 'none';
            majorBox.style.display = 'none';
            minorLabel.textContent = 'Phrygian Scale';
            minorBox.value = phrygianKeys[index];
            pianoRollMajors.style.display = 'none';
            createPianoRoll(pianoRollMinors, phrygianNotes[phrygianKeys[index]]);
        }
    }

    scaleType.addEventListener('change', function() {
        updateTextBoxes(trackbar.value);
    });

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

    function fetchSynonyms(word) {
        if (word.trim() === '') {
            thesaurusResults.innerHTML = '';
            return;
        }
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                thesaurusResults.innerHTML = '';
                if (data.title && data.title === "No Definitions Found") {
                    thesaurusResults.textContent = "No synonyms found.";
                    return;
                }
                const synonyms = [];
                data.forEach(entry => {
                    entry.meanings.forEach(meaning => {
                        meaning.definitions.forEach(definition => {
                            if (definition.synonyms) {
                                synonyms.push(...definition.synonyms);
                            }
                        });
                    });
                });
                if (synonyms.length > 0) {
                    synonyms.forEach(synonym => {
                        const div = document.createElement('div');
                        div.classList.add('synonym-word');
                        div.textContent = synonym;
                        thesaurusResults.appendChild(div);
                    });
                } else {
                    thesaurusResults.textContent = "No synonyms found.";
                }
            });
    }

    thesaurusBox.addEventListener('input', function() {
        fetchSynonyms(thesaurusBox.value);
    });


    saveButton.addEventListener('click', function() {
        const content = notepad.value;
        const title = document.getElementById('titleBox').value.trim();
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const fileName = title ? `${title}-${date}.txt` : `notes-${date}.txt`;
        const fileContent = `---TITLE---\n${title}\n---CONTENT---\n${content}`;
        saveTextFile(fileContent, fileName);
    });

    function saveFile() {
        const content = notepad.value;
        const title = document.getElementById('titleBox').value.trim();
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const fileName = title ? `${title}-${date}.txt` : `notes-${date}.txt`;
        const fileContent = `---TITLE---\n${title}\n---CONTENT---\n${content}`;
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    }

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

    saveButton.addEventListener('click', saveFile);
    importButton.addEventListener('click', importFile);
});