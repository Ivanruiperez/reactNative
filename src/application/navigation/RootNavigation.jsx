import React from 'react'

export const navigationRef = React.createRef()

export function RootNavigation(name, params) {
    navigationRef.current?.RootNavigation(name, params)
}
