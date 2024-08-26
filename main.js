function Info() {
    const st1 = {color: 'red', backgroundColor: 'yellow'}
    return (
        <div>
        <h1 style={st1}>Name-Surname: Kanyakorn Supontana </h1>
        <p style={st1}>Age: {(new Date().toDateString().split(' ')[3]) - 1999}</p>

        </div>
    )
}
ReactDOM.createRoot(document.querySelector('#root')).render(<Info />)