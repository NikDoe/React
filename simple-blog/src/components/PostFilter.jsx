import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder='поиск...'
                value={filter.query}
                onChange={e => {
                    setFilter(
                        prevState => {
                            return {...prevState, query: e.target.value}
                        }
                    )
                }}
            />
            <MySelect
                value={filter.sort}
                defaultValue='сортировка'
                options={
                    [
                        {value: 'title', name: 'по названию'},
                        {value: 'body', name: 'по описанию'}
                    ]
                }
                onChange={selectedSort => {
                    setFilter(
                        prevState => {
                            return {...prevState, sort: selectedSort}
                        }
                    )
                }}

            />
        </div>
    );
};

export default PostFilter;