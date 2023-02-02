import { LegacyRef, useRef, useState } from 'react';
import { getElementSizeAndPosition } from '@/lib';
import '@/style/get-element-size-and-position.css';

enum ElementPosition {
    left = 'ltr',
    right = 'rtl',
}

const GetElementSizeAndPosition: React.FC = () => {
    const element: LegacyRef<HTMLDivElement> = useRef(null);
    const [positionOfTheElement, setPositionOfTheElement] =
        useState<ElementPosition>(ElementPosition.left);
    const [elementInformation, setElementInformation] = useState<string>('');

    const handleElementPosition = () => {
        setPositionOfTheElement(originalPosition => {
            return originalPosition === ElementPosition.left
                ? ElementPosition.right
                : ElementPosition.left;
        });
    };

    const handleResizeInformation = () => {
        if (element) {
            const { width, height, positionX, positionY } =
                getElementSizeAndPosition(element.current);
            setElementInformation(
                `Width: ${width}, Height: ${height}, PositionX: ${positionX}, PositionY: ${positionY}`,
            );
        }
    };

    return (
        <section>
            <h1>Get Element Size and Position</h1>

            <p className="description">
                Get the width, height, positionX and positionY of the element.
            </p>

            <pre className="element_information">
                Element information: {elementInformation}
            </pre>

            <section className="buttons">
                <button
                    type="button"
                    onClick={handleResizeInformation}
                    className="size_and_position-button"
                >
                    Size and Position of the element
                </button>

                <button
                    type="button"
                    onClick={handleElementPosition}
                    className="move-button"
                >
                    Move element to the other side
                </button>
            </section>

            <section dir={positionOfTheElement}>
                <div ref={element} className="resize">
                    Resize me on the bottom right corner
                </div>
            </section>
        </section>
    );
};

export default GetElementSizeAndPosition;
