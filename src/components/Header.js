import Button from './Button.js'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='Black' text='Add'/>
        </header>
    )
}



export default Header