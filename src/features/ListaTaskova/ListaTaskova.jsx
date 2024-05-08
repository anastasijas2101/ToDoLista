import './ListaTaskova.style.css'

const ListaTaskova = () => {
    return (
        <div className='taskList'>
            <div className='labelStyle'>
                <div className='titleBoxStyle'>
                    <h1>Gotovi taskovi!</h1>
                    <h2>Nastavi tako!</h2>
                </div>
                <span>0/3</span>
            </div>
            <div>
                <p className="taskStyle">
                    <input type="checkbox" />
                    Hello World!
                    <span>
                        <img src="https://static.thenounproject.com/png/2545517-200.png" />
                        <img src="https://static.vecteezy.com/system/resources/previews/010/366/194/original/bin-icon-transparent-bin-clipart-free-png.png" />
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ListaTaskova