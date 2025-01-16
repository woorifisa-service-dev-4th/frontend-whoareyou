class Image {
    constructor(type, id, url) {
        this.type = type;
        this.id = id;
        this.url = url;
    }

    getImageData() {
        return {url: this.url};
    }
}

export default Image;