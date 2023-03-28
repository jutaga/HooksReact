import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Me volvi A dibujar :C');

    return (
        <small>{value}</small>
    )
})
