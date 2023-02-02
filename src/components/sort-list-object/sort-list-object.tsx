import { useState } from 'react';
import { sortListObject } from '@/lib';
import '@/style/sort-list-object.css';

interface List {
    id: number;
    name: string;
    age: number;
}

const listExample: Array<List> = [
    { id: 1, name: 'Jaw', age: 72 },
    { id: 2, name: 'Longest', age: 21 },
    { id: 3, name: 'Jack', age: 18 },
    { id: 4, name: 'Buffalo', age: 12 },
    { id: 5, name: 'Jenny', age: 30 },
    { id: 6, name: 'Sorted', age: 88 },
    { id: 7, name: 'Jill', age: 24 },
    { id: 8, name: 'John', age: 42 },
    { id: 9, name: 'Andrew', age: 60 },
];

const SortListObject: React.FC = () => {
    const option = ['id', 'name', 'age'];
    const [list, setList] = useState<ReadonlyArray<List>>(listExample);
    const [sortedListSelect, setSortedListSelect] = useState<string>('id');

    const handleSortList = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.currentTarget;

        const sortedList = listExample.sort((a, b) =>
            sortListObject(a, b, value),
        );

        setSortedListSelect(value);
        setList(sortedList);
    };

    return (
        <section>
            <h1>Sort List Object</h1>

            <section className="sort-option_explanation">
                <p className="sort-option_text">
                    Select one of the options to sort the list
                </p>

                <select
                    value={sortedListSelect}
                    onChange={handleSortList}
                    className="sort-option_select"
                >
                    {option.map(optionValue => (
                        <option
                            key={optionValue}
                            value={optionValue}
                            className="sort-option_select_option"
                        >
                            {optionValue.toUpperCase()}
                        </option>
                    ))}
                </select>
            </section>

            <section className="result">
                {list.map(obj => (
                    <pre key={obj.id} className="result_pre">
                        {JSON.stringify(obj)}
                    </pre>
                ))}
            </section>
        </section>
    );
};

export default SortListObject;
