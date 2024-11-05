import axios from "axios";

interface QuoteWithImage {
  imageUrl: string;
}

async function fetchQuoteWithImage(): Promise<QuoteWithImage | null> {
  try {
    const imageResponse = await axios.get('https://api.unsplash.com/photos/random/?client_id=LbdK0K7R0jQGz05QCCUajlFqK2K6kz-6XN6pSnzctC0');
    const imageUrl = imageResponse.data.urls.small;

    return {
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.log("Error:", error);
    const imageUrl = "/sample.jpg";
    return {
      imageUrl: imageUrl
    };
  }
}

export default fetchQuoteWithImage;