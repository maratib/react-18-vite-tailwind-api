import React, { FC } from 'react';

type Props = {
    name?: string;
};

export const Nav: FC<Props> = ({ name }) => {
    return (
        <div>
            <h1>Nav</h1>
        </div>
    );
};