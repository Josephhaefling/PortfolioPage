import React from 'react';
import { Menu, MenuItem, Button } from "@material-ui/core";

const DropDownMenu = () => {

    let open = false

    const handleClick = () => {
        console.log(open)
        open ? open = false : open = true
    }

    return (
        <section>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            {/* <Menu
                id="simple-menu"
                // anchorEl={anchorEl}
                keepMounted
                open={Boolean(open)}
                // onClose={false}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu> */}
        </section>
    )
}

export default DropDownMenu