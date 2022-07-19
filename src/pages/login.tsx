import React, { FC } from 'react';

type Props = {
    name?: string;
};

export const Login: FC<Props> = ({ name }) => {
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};