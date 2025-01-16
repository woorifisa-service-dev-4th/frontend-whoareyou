class Image {
    constructor(type, url) {
        this.type = type;
        this.url = url;
    }

    getImageData() {
        return {url: this.url};
    }
}

export default Image;