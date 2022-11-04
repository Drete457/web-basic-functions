import { LegacyRef, useRef, useState } from 'react';
import { getElementSizeAndPosition } from '@/lib/common';
import './style.css';

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
                `width: ${width}, height: ${height}, positionX: ${positionX}, positionY: ${positionY}`,
            );
        }
    };

    return (
        <section>
            <h1>Get Element Size and Position</h1>
            <p>
                Get the width, height, positionX and positionY of the element.
            </p>
            <pre>Element information: {elementInformation}</pre>
            <button type="button" onClick={handleResizeInformation}>
                Size and Position of the element
            </button>
            <button type="button" onClick={handleElementPosition}>
                Move element to the other side
            </button>
            <section dir={positionOfTheElement}>
                <div ref={element} className="resize">
                    Resize me
                </div>
            </section>
        </section>
    );
};

export default GetElementSizeAndPosition;
