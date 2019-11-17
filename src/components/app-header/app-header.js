import React from "react";


const AppHeader = ({todo, done}) => {
    return  (
        <div className="w-100">
            <h1>Things to Do:</h1>
            {todo} more to do. {done} done.
        </div>
    );
};

export default AppHeader;