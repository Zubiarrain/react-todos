import './TodoList.css'

function TodoList({children}) {
    return (
        <ul className='TodoList'>
            {children} {/* Para que se rendericen los TodoItems que estan dentro */}
        </ul>
    );
}

export { TodoList }