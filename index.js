function analyzeSentence(sentence) {
  // Initialize counters
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // Count sentence length
    sentenceLength++;

    // Check if character is a letter (excluding spaces and punctuation)
    if (char.match(/[a-zA-Z]/)) {
      // Check if character is a vowel
      if (char.match(/[aeiouAEIOU]/)) {
        vowelCount++;
      }
    }

    // Check if character is a space (indicating a word boundary)
    if (char === " ") {
      wordCount++;
    }
  }

  // Decrement wordCount by 1 to account for the last word before the period
  wordCount--;

  return { sentenceLength, wordCount, vowelCount };
}

// Get input sentence from user
const inputSentence = prompt("Enter a sentence ending with a period: ");

// Call the function to analyze the sentence
const { sentenceLength, wordCount, vowelCount } =
  analyzeSentence(inputSentence);

// Display the results
console.log("Sentence Length:", sentenceLength);
console.log("Number of Words:", wordCount);
console.log("Number of Vowels:", vowelCount);
