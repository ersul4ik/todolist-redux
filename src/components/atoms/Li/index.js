import React from 'react'
import { Button } from 'components'


const Li = ({ ...props }) => <li>Hi <Button name="delete" click={() => console.log("yes")} /></li>


export default Li

