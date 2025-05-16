function CoreConcept({ data }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoreConcept;
