async function nameTranslation(name: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        name
      )}&langpair=en|ar`
    );

    const data = await response.json();
    const arabicTranslation = data.responseData.translatedText;

    return `مرحبا  ${arabicTranslation}`;
  } catch (error) {
    console.error('Translation failed:', error);
    return '  أهلا بك أحمد!'; // Fallback to original if translation fails
  }
}
export default nameTranslation;
