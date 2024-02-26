import React from 'react';
import { ButtonLoadMore, Text } from './LoadMore.styled';

const LoadMore = (props) => {
    return (
        <ButtonLoadMore onClick={props.onClick}>
            <Text>Load more</Text>
        </ButtonLoadMore>
    );
};

export default LoadMore;
