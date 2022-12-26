const students = [
  {name: "Manny", city: "Manila" },
  {name: "Jose", city: "Intramuros" },
  {name: "Anna", city: "Mandaluyong" }
]

for (const address of students) {
  if(address.name === "Manny") {
    console.log(`${students[0].name} lives in ${students[0].city}`);
  }
}