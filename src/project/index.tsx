import React from 'react';

export default function Project ( ) {
    const helloYou    = (name: string )=> {
        name = 'you' || name   ;
        console.log("hello" + name + "!" )
    }
    return (
        <div>
                project
        </div>
    )
}