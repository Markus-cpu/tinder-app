import React from "react"
import "./Header.css"
import IconButton from "@material-ui/core/IconButton"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import tinderLogo from "../../images/tinder.png"

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="headers__icon" />
            </IconButton>

            <IconButton>
                <img className="header__logo" src={tinderLogo} alt="logo"/>
            </IconButton>

            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="headers__icon" />
            </IconButton>

        </div>
    )
}

export default Header