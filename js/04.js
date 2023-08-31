const programmingLanguages = ['1-Pyton', '2-C++', '3-C#', '4-PHP'];

for (let programmingLanguage of programmingLanguages) {
  programmingLanguage = programmingLanguage.slice(2);
  console.log(programmingLanguage);
}