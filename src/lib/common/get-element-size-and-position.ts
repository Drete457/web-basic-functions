const getElementSizeAndPosition = (htmlElement: HTMLElement | null) => {
    if (htmlElement) {
        const {
            width,
            height,
            x: positionX,
            y: positionY,
        } = htmlElement.getBoundingClientRect();

        return {
            width,
            height,
            positionX,
            positionY,
        };
    }

    return {};
};

export default getElementSizeAndPosition;
