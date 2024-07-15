import React from "react";

function BuildPage (index){
    return(
        <div>
            <h3>Title {index}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque illum recusandae possimus, assumenda rem ab aperiam voluptatem illo. Corporis sequi quo velit totam nam cumque corrupti quis ipsum sed!</p>
        </div>
    )
}

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
