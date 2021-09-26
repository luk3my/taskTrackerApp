import Button from './Button.js'

const Header = ({ title, onAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='Green' text='Add' onClick={onAdd}/>
        </header>
    )
}



export default Header