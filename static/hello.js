const NAMES = [
    "Edwin",
    "Sam",
    "Brooklynn",
    "Declan",
    "Sarah",
    "David"
];

const random_name = NAMES[Math.random() * NAMES.length | 0];

fetch(`/api/hello/${random_name}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return {
                "todo": "better error handling"
            }
        }
    })
    .then(data => {
        document.write(data.message);
    });