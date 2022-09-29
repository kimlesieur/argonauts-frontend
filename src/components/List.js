import ListItem from "./ListItem";

const List = ({marins}) => {
    return (
        <>
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
            {marins.length > 0 && (
                <div id="members">
                {marins.map(marin => (
                    <ListItem name={marin.name} key={marin.id} id={marin.id} />
                ))}
                </div>
            )}
        </section>
        </>
    )
}

export default List;