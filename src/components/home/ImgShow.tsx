"use client";
import React, { useEffect, useState } from "react";
import Box from "@/components/ui/Box";
import fetchQuoteWithImage from "@/components/utils/getQuotes";

interface QuoteWithImage {
  imageUrl: string;
}
function ImgShow() {
  const [quoteWithImage, setQuoteWithImage] = useState<QuoteWithImage | null>(
    null
  );

  useEffect(() => {
    async function getQuoteAndImage() {
      const data = await fetchQuoteWithImage();
      if (data) {
        console.log(data,"data")
        setQuoteWithImage(data);
      }
    }

    getQuoteAndImage();
  }, []);

  return (
    <div>
      <Box
        heading="Projects"
        maxHeight="352px"
        backgroundImage={quoteWithImage?.imageUrl}
      />
    </div>
  );
}

export default ImgShow;
