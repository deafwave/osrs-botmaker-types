

/// <reference path="../../../java/BufferedImage.d.ts" />

declare namespace bot {
    interface web {
        /**
         * Fetches the content of the given URL as a string. Only allows http/https URLs from whitelisted domains. Returns an empty string on error.
         * @param requestURL The URL to fetch
         * @returns The response body as a string, or empty string on error
         */
        readString: (requestURL: string) => string;

        /**
         * Fetches an image from a whitelisted URL. Returns null on error.
         * @param requestURL The URL to fetch the image from
         * @returns The image as a BufferedImage, or null on error
         */
        readImage: (requestURL: string) => BufferedImage | null;
    }
}
