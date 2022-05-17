import PeopleListItem from "./PeopleListItem";

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem index={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
